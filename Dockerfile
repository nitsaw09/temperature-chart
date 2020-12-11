FROM node:14-alpine AS base

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . ./

RUN cd client && npm install

CMD ["npm", "run", "dev"]