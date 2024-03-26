FROM node:20.11.0-alpine
WORKDIR /frontend
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 3001
CMD ["yarn", "start"]
