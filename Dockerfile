FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 

ENV PORT=3000
ENV MONGO_URI=mongodb://admin:password@mongodb:27017/salesdb?authSource=admin

EXPOSE $PORT

CMD ["npm", "start"]
