#!/bin/sh

set -e 

readonly ROOT_DIR=$(realpath "$(dirname "$0")/../..")
cd $ROOT_DIR

NODE_VERSION=16
PHP_VERSION=8.1

APP_VERSION=${APP_VERSION:-1.0.0}

cd $ROOT_DIR

docker build . -f infra/docker/Dockerfile \
    --network=host --force-rm \
    -t master/e-commerce \
    --build-arg APP_VERSION=${APP_VERSION}