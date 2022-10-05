FROM node:16-bullseye-slim

WORKDIR /app

COPY package*.json .

RUN npm install

CMD [ "npm", "start" ]