FROM node:16.15.1
RUN mkdir -p /app .
COPY /package*.json ./
RUN npm ci
COPY . .
EXPOSE 8080
ADD  server.js ./
CMD ["npm", "run" ,"dev"]