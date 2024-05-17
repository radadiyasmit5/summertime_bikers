FROM node:18

WORKDIR /app
COPY . .
RUN rm -rf node_modules/
RUN npm install
ENV PORT 8080
ENV HOST 0.0.0.0

EXPOSE 8080
CMD npm run build && npm run start