FROM node:18.13.0 AS builder-dependencies
WORKDIR /usr/src/application
COPY ./package*.json ./
RUN npm clean-install

FROM node:18.13.0 AS runner-dependencies
WORKDIR /usr/src/application
ENV NODE_ENV=production
COPY ./package*.json ./
RUN npm clean-install --omit=dev --ignore-scripts

FROM node:18.13.0 AS builder
WORKDIR /usr/src/application
COPY --from=builder-dependencies /usr/src/application/node_modules ./node_modules
COPY ./ ./
RUN npm run build

FROM gcr.io/distroless/nodejs18-debian11:latest AS runner
WORKDIR /usr/src/application
ENV NODE_ENV=production
COPY --from=runner-dependencies /usr/src/application/node_modules ./node_modules
COPY --from=builder /usr/src/application/package.json ./package.json
COPY --from=builder /usr/src/application/build ./build
COPY --from=builder /usr/src/application/public ./public
CMD ["./build/index.js"]
