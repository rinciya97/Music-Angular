FROM node:12
ADD /dist/music/front-end/dist
WORKDIR /music/front-end/dist 
RUN npm install http-server -g
cmd ["http-server"]
