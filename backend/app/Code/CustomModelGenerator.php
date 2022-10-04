<?php

namespace App\Code;

use Based\TypeScript\Generators\ModelGenerator;
use Based\TypeScript\Definitions\TypeScriptProperty;
use Based\TypeScript\Definitions\TypeScriptType;
use Doctrine\DBAL\Schema\Column;
use ReflectionClass;
use ReflectionMethod;
use Illuminate\Support\Str;

class CustomModelGenerator extends ModelGenerator
{
  protected function getRelations(): string
    {
        return $this->getRelationMethods()
            ->map(function (ReflectionMethod $method) {
                return (string) new TypeScriptProperty(
                    name: ($method->getName()),
                    types: $this->getRelationType($method),
                    optional: true,
                    nullable: true
                );
            })
            ->join(PHP_EOL . '        ');
    }

    protected function getManyRelations(): string
    {
        return $this->getRelationMethods()
            ->filter(fn (ReflectionMethod $method) => $this->isManyRelation($method))
            ->map(function (ReflectionMethod $method) {
                return (string) new TypeScriptProperty(
                    name: ($method->getName()) . '_count',
                    types: TypeScriptType::NUMBER,
                    optional: true,
                    nullable: true
                );
            })
            ->join(PHP_EOL . '        ');
    }

    protected function getAccessors(): string
    {
        return $this->getMethods()
            ->filter(fn (ReflectionMethod $method) => Str::startsWith($method->getName(), 'get'))
            ->filter(fn (ReflectionMethod $method) => Str::endsWith($method->getName(), 'Attribute'))
            ->mapWithKeys(function (ReflectionMethod $method) {
                $property = (string) Str::of($method->getName())
                    ->between('get', 'Attribute')
                    ->snake();

                return [$property => $method];
            })
            ->reject(function (ReflectionMethod $method, string $property) {
                return $this->columns->contains(fn (Column $column) => $column->getName() == $property);
            })
            ->map(function (ReflectionMethod $method, string $property) {
                return (string) new TypeScriptProperty(
                    name: $property,
                    types: TypeScriptType::fromMethod($method),
                    optional: true,
                    readonly: false
                );
            })
            ->join(PHP_EOL . '        ');
    }

    public function generate(ReflectionClass $reflection): ?string
    {
        if(Str::startsWith($reflection->name, "App\Models\Base")) {
          return "";
        } else{

          $this->reflection = $reflection;
          $this->boot();

          if (empty(trim($definition = $this->getDefinition()))) {
              return "    export interface {$this->tsClassName()} {}" . PHP_EOL;
          }

          return <<<TS
              export interface {$this->tsClassName()} {
                  $definition
              }

          TS;
        }
    }
}
