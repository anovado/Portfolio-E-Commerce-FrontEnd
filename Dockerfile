FROM nginx:stable
MAINTAINER Your Name "novado@alterra.id"

RUN mkdir -p /coba-coba/www/Portfolio-E-Commerce-FrontEnd
RUN mkdir -p /coba-coba/log

COPY default.conf /etc/nginx/conf.d/
ADD build/. /coba-coba/www/Portfolio-E-Commerce-FrontEnd/

WORKDIR /coba-coba/www/Portfolio-E-Commerce-FrontEnd
