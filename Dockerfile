# Use a Node.js LTS base image
FROM node:22-alpine as builder

WORKDIR /app

# Install dependencies
COPY package.json ./
RUN yarn install --frozen-lockfile

# Build the Next.js application
COPY . ./
RUN yarn build

# Serve the built application
FROM node:22-alpine as runner
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
