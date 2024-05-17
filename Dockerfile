FROM node:18

WORKDIR /app
COPY . .
RUN rm -rf node_modules/
RUN npm install
EXPOSE 8080

CMD npm run build && npm run start