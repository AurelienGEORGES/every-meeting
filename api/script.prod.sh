php bin/console doctrine:database:create --no-interaction --if-not-exists
php bin/console doctrine:migrations:migrate --no-interaction
php bin/console lexik:jwt:generate-keypair --overwrite --no-interaction 
apache2-foreground