FROM node:22.22.3-alpine AS base

WORKDIR /app

COPY package.json ./

RUN npm install

RUN npm run build

EXPOSE 3000

RUN npm run start