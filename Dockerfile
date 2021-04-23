#=================
# builder image
#=================
FROM node:14.15.0-alpine AS builder

WORKDIR /app
ENV NODE_ENV=production

COPY package.json \
    yarn.lock \
    ./
COPY . .

EXPOSE 3000

RUN yarn install --production=false \
    && yarn build

#=================
# Production Build
#=================
FROM node:14.15.0-alpine AS production

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder ./app/.next .next
COPY --from=builder ./app/package.json  .
COPY --from=builder ./app/yarn.lock .
RUN yarn install --production

EXPOSE 3000

CMD ["yarn", "start"]
