FROM node:18

ARG PORT

RUN echo PORT

WORKDIR /app
COPY . .
RUN rm -rf node_modules/
RUN npm install


RUN npm run build 


CMD [ "npm","start" ]