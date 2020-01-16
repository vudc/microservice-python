FROM node:latest

WORKDIR /var/www/node/

ADD package*.json ./

RUN npm install
RUN npm audit fix

ADD . .

EXPOSE 3000
