ARG NODE_VERSION
ARG NPM_VERSION

FROM node:${NODE_VERSION}-alpine

RUN apk add --update --no-cache \
    curl \
    git

RUN npm install -g npm@${NPM_VERSION} nodemon

USER node

WORKDIR /home/node/reactmeadr.ink

COPY --chown=node:node package*.json ./

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]