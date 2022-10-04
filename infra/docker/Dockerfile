ARG PHP_VERSION=8.1
ARG APP_VERSION=0.0.0

FROM php:${PHP_VERSION}-apache

ARG APP_VERSION

RUN apt-get update && apt-get install -y \
        curl \
        libxml2-dev \
        libonig-dev \
        libpq-dev \
        unzip \
    && rm -rf /var/lib/apt/lists/* \
    \
    && a2enmod rewrite headers \
    \
    && cp "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

COPY --chown=1000:1000 backend/ /var/www/html

COPY infra/docker/conf/m1-vhost.conf /etc/apache2/sites-available/000-default.conf
COPY --chown=1000:1000 infra/docker/scripts/*.sh /scripts/

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

RUN docker-php-ext-install \
    bcmath \
    ctype \
    dom \
    mbstring \
    pdo \
    pdo_pgsql \
    xml \
    && composer config version $APP_VERSION \
    && composer install --optimize-autoloader --no-dev

ENTRYPOINT [ "/scripts/entrypoint.sh" ]
CMD ["apache2-foreground"]

ENV APP_DEBUG=false