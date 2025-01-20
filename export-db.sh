#!/bin/bash

# Charger les variables d'environnement depuis le fichier .env
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
else
    echo "Erreur : fichier .env introuvable."
    exit 1
fi

# Vérification des variables nécessaires
if [[ -z "$DB_USER" || -z "$DB_PASSWORD" || -z "$DB_NAME" ]]; then
    echo "Erreur : certaines variables de configuration sont manquantes dans le fichier .env."
    echo "DB_USER=$DB_USER, DB_PASSWORD=$DB_PASSWORD, DB_NAME=$DB_NAME"
    exit 1
fi

# Variables
CONTAINER_NAME="mysql-container"  # Nom du conteneur MySQL
OUTPUT_FILE="./backup.sql"        # Chemin de sauvegarde pour le fichier SQL

# Vérification du conteneur
if ! docker ps --format "{{.Names}}" | grep -q "^${CONTAINER_NAME}$"; then
    echo "Erreur : le conteneur ${CONTAINER_NAME} n'est pas en cours d'exécution."
    exit 1
fi

# Commande pour exporter la base de données
docker exec -i $CONTAINER_NAME mysqldump -u$DB_USER -p$DB_PASSWORD $DB_NAME > $OUTPUT_FILE

# Vérification du résultat
if [ $? -eq 0 ]; then
    echo "Export de la base de données terminé avec succès : $OUTPUT_FILE"
else
    echo "Erreur lors de l'export de la base de données."
    exit 1
fi
