# On passe sur 8.4-apache pour la stabilité des extensions
FROM php:8.4-apache

# 1. Installation des dépendances système
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    libicu-dev \
    libpng-dev \
    g++ \
    make \
    autoconf \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

# 2. Installation des extensions PHP
# Note: opcache est compilé séparément pour éviter les conflits de 'make'
RUN docker-php-ext-configure intl \
    && docker-php-ext-install -j$(nproc) intl pdo pdo_mysql zip opcache

# 3. Xdebug (optionnel)
RUN pecl install xdebug && docker-php-ext-enable xdebug || echo "Xdebug non installé"

# 4. Configuration d'Apache (DocumentRoot vers /public)
RUN a2enmod rewrite
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# 5. Outils (Composer + Symfony CLI)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN curl -1sLf https://dl.cloudsmith.io/public/symfony/stable/setup.deb.sh | bash - \
    && apt-get install -y symfony-cli

# 6. Configuration PHP optimisée pour Symfony 7
RUN { \
    echo 'short_open_tag = Off'; \
    echo 'post_max_size = 150M'; \
    echo 'upload_max_filesize = 100M'; \
    echo 'memory_limit = 512M'; \
    echo 'date.timezone = UTC'; \
    echo 'opcache.enable=1'; \
    echo 'opcache.memory_consumption=256'; \
    echo 'opcache.max_accelerated_files=20000'; \
    } > /usr/local/etc/php/conf.d/docker-symfony.ini

# 7. Code Source et Workdir
WORKDIR /var/www/html
COPY ./ /var/www/html

# 8. Droits et permissions
# On crée les dossiers et on donne les droits à l'utilisateur Apache (www-data)
RUN mkdir -p var/cache var/log \
    && chown -R www-data:www-data var/cache var/log \
    && chmod +x /var/www/html/script.sh

ENTRYPOINT ["bash", "/var/www/html/script.sh"]