FROM node:12-alpine

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install
RUN yarn build

COPY . .

CMD ["serve", "-s", "build"]