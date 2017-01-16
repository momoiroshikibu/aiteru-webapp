# aiteru-webapp
FROM nginx
MAINTAINER momoiroshikibu <momoiroshikibu@gmail.com>
COPY dist /usr/share/nginx/html
EXPOSE 80
