include .env


export

user_id := 1000
user_name := M1CWA

.PHONY: build

build:
	sh ./infra/docker/build-docker.sh

npm-install:
	cd .\frontend && npm install

up: 	 						## Crée et démarre tous les conteneurs
	@docker compose -f infra/docker/docker-compose.yml up --force-recreate

ps: 	 						## Liste les conteneurs
	@docker-compose -f infra/docker/docker-compose.yml ps

generate-models:
	@docker-compose -f infra/docker/docker-compose.yml exec backend php artisan config:clear
	@docker-compose -f infra/docker/docker-compose.yml exec backend php artisan code:models
	@docker-compose -f infra/docker/docker-compose.yml exec backend php artisan typescript:generate
	@powershell cp "${CURDIR}/backend/resources/js/models.d.ts" "${CURDIR}/frontend/src/api/models.d.ts"
