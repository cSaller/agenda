FROM node:lts-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --no-progress --frozen-lockfile
COPY . .

RUN yarn build

FROM node:lts-alpine AS runtime

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/src/database ./src/database

COPY package.json yarn.lock ./

RUN yarn --production --no-progress --frozen-lockfile

RUN yarn prisma generate

USER node

EXPOSE $PORT

CMD ["yarn", "start"]
