#=================
# builder image
#=================
FROM node:14.15.0-alpine AS builder

WORKDIR /app
ARG BUILD_ENV=production
ENV NODE_ENV=${BUILD_ENV}

COPY package.json \
    yarn.lock \
    ./
COPY . .

EXPOSE 3000

RUN npm install -p \
    && npm run build

#=================
# Production Build
#=================
FROM node:14.15.0-alpine AS production

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder ./app/.next .next
COPY --from=builder ./app/node_modules ./node_modules
COPY --from=builder ./app/package.json .

EXPOSE 3000

CMD ["npm", "start"]
