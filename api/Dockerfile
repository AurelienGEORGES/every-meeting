# Utilisez l'image PHP avec Apache
FROM php:8.2-apache

# Installe les dépendances nécessaires
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip

# fixing symfony check:requirements
RUN apt-get update && apt-get install -y libicu-dev
RUN docker-php-ext-configure intl
RUN docker-php-ext-install intl

RUN docker-php-ext-configure opcache --enable-opcache
RUN docker-php-ext-install opcache

# Active les modules Apache nécessaires
RUN a2enmod rewrite

# Installe Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Installe Symfony CLI
RUN curl -1sLf https://dl.cloudsmith.io/public/symfony/stable/setup.deb.sh | bash - &&\
    apt-get install -y symfony-cli

# Copie le code source Symfony dans le conteneur
COPY ./ /var/www/html

# Rend le script exécutable
RUN chmod +x /var/www/html/script.sh

# Ajoute la configuration pour désactiver short_open_tag
RUN echo "short_open_tag = Off" >> /usr/local/etc/php/php.ini

# Point d'entrée pour exécuter le script d'initialisation
ENTRYPOINT ["bash", "/var/www/html/script.sh"]
