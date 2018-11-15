FROM node
MAINTAINER Jiahao Wang <jhwang@thoughtworks.com>

WORKDIR /usr/src/app

COPY ./package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "server"]