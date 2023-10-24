#!/bin/bash

# Run composer install
composer install

# Lancer le serveur Symfony
symfony server:start --no-tls