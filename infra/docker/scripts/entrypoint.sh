#!/bin/sh

set -e 

php artisan config:cache &&\
php artisan route:cache &&\
php artisan view:cache &&\
php artisan migrate &&\
\
exec /usr/local/bin/docker-php-entrypoint "$@"