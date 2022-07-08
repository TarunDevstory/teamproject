FROM node:16.15.1
WORKDIR  /teamproject .
COPY /package*.json ./
RUN npm ci
COPY . /server/apiV1/  
EXPOSE 8080
ADD . server.js 
CMD ["npm", "run" ,"dev"]