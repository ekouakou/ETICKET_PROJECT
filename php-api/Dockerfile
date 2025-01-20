# Utilisation d'une image PHP avec Apache
FROM php:8.1-apache

# Installer les extensions nécessaires (par exemple MySQL)
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Copier les fichiers de l'API PHP dans le conteneur
COPY . /var/www/html/

# Configurer Apache pour que les fichiers soient accessibles
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80
CMD ["apache2-foreground"]
