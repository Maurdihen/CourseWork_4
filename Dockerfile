FROM node:lts

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm install -g serve

COPY build ./build

EXPOSE 3000

CMD [ "serve", "-s", "build"]
