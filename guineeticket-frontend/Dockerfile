# Utiliser une image de base Nginx
FROM nginx

# Copier les fichiers build de React dans le dossier utilisé par Nginx
COPY build/ /usr/share/nginx/html

# Exposer le port 80 pour que le conteneur soit accessible
EXPOSE 80

# Lancer Nginx en mode non-bloquant
CMD ["nginx", "-g", "daemon off;"]

