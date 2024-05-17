FROM node:18

WORKDIR /app
COPY . .
RUN rm -rf node_modules/
RUN npm install
ENV PORT 8080
ENV HOST 0.0.0.0

RUN npm run build 
EXPOSE 8080

CMD [ "npm","start" ]