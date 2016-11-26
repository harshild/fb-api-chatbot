FROM node:5.10

MAINTAINER harshild <harshil.dhariwal@gmail.com>

RUN mkdir -p /usr/app/src
RUN mkdir -p /usr/app/src/public

WORKDIR /usr/app
COPY . /usr/app

EXPOSE 5000

RUN npm install
CMD ["npm", "start"]
