FROM node:22-alpine as builder

WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . ./
RUN yarn build
EXPOSE 3000

CMD ["yarn", "start"]