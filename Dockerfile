FROM node:18.4.0
WORKDIR  ./server/apiV1
COPY /package*.json ./
RUN npm install 
COPY . /server/apiV1 
EXPOSE 8080
ADD server.js ./ 
CMD ["npm", "run" ,"dev"]