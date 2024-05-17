FROM node:18

WORKDIR /app
COPY . .
RUN rm -rf node_modules/
RUN npm install
EXPOSE 3000

CMD npm run build && npm run start