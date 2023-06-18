FROM node:18.16.0-alpine3.18 as builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]
