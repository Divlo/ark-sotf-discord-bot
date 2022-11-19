FROM node:18.12.1 AS dependencies
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install

FROM node:18.12.1 AS builder
WORKDIR /usr/src/app
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
COPY ./ ./
RUN npm run build

FROM node:18.12.1 AS runner
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/build ./build
COPY --from=builder /usr/src/app/public ./public
USER node
CMD ["node", "build/index.js"]
