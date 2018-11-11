FROM node
MAINTAINER Jiahao Wang <jhwang@thoughtworks.com>

WORKDIR /home/project

EXPOSE 3000

CMD ["npm", "start"]