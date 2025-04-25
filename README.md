
# docker exec -it guineeticket-backend-api  bash

npm install react@18 react-dom@18
npm install react@18 react-dom@18 --force

npx javascript-obfuscator build/static/js --output build/static/js --compact true --self-defending true

