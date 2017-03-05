FROM node:7.4
MAINTAINER momoiroshikibu <momoiroshikibu@gmail.com>

RUN apt-get update -y && apt-get upgrade -y

# yarn
RUN apt-get install apt-transport-https
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && apt-get install yarn

WORKDIR /opt
RUN git clone https://github.com/momoiroshikibu/aiteru-webapp.git

WORKDIR /opt/aiteru-webapp
RUN yarn install
RUN yarn run build:all:production


RUN apt-get install -y nginx
RUN rm -rf /var/www/html
RUN mv /opt/aiteru-webapp/dist /var/www/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
