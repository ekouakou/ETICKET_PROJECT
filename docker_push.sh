#!/bin/bash

# Définir votre nom d'utilisateur Docker Hub
DOCKER_USERNAME="monutilisateur"

# Liste des services à pousser
SERVICES=("react-app" "php-api" "python-api" "java-api")

# Étape 1: Construire toutes les images avec Docker Compose
echo "Construction des images Docker..."
docker-compose build

# Étape 2: Taguer et pousser les images sur Docker Hub
for SERVICE in "${SERVICES[@]}"
do
  # Tagger l'image avec le nom de votre utilisateur Docker Hub
  IMAGE_NAME=$(docker-compose config | grep -A 1 "$SERVICE" | grep image | awk '{print $2}')
  if [ -z "$IMAGE_NAME" ]; then
    # Si l'image est construite via le build context, récupérez l'ID du conteneur
    IMAGE_NAME=$(docker-compose ps -q "$SERVICE")
  fi

  echo "Tagging l'image pour le service: $SERVICE..."
  docker tag $IMAGE_NAME "$DOCKER_USERNAME/$SERVICE:latest"
  
  # Étape 3: Pousser l'image sur Docker Hub
  echo "Poussée de l'image $DOCKER_USERNAME/$SERVICE:latest..."
  docker push "$DOCKER_USERNAME/$SERVICE:latest"
done

echo "Processus terminé."
