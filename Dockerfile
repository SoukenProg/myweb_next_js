FROM node:22-alpine


WORKDIR /app


COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]

EXPOSE 3000
EXPOSE 6006
EXPOSE 12000