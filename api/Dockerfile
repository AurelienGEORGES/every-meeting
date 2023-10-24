# Utilisez l'image PHP avec Apache
FROM php:8.2-apache

# Installe les dépendances nécessaires
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip

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

# Définit l'URL de base pour Symfony
ENV APP_ENV=dev
ENV APP_SECRET=your-secret
ENV DATABASE_URL=sqlite:///%kernel.project_dir%/var/data.db
ENV MAILER_URL=null://localhost

# Point d'entrée pour exécuter le script d'initialisation
ENTRYPOINT ["bash", "/var/www/html/script.sh"]
<<<<<<< HEAD

=======
>>>>>>> 9b41cdca7a737590519aee0915cf4010395768b3
