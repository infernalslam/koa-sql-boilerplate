FROM node:8.11.3-alpine

WORKDIR /app
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
RUN npm i
RUN npm install -g nodemon
COPY . /app
#RUN npm run migration:migrate
CMD npm run start
EXPOSE 3000
