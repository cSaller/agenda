FROM node:lts-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production --no-progress --frozen-lockfile
COPY . .

RUN yarn build

COPY --chown=node:node . .
USER node

EXPOSE 3000

CMD ["yarn", "start"]