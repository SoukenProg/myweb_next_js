FROM node:22-alpine

WORKDIR /src

COPY . .

RUN npm install


CMD ["npm", "run", "dev"]