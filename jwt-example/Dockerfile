FROM node:16

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN npm install  --quiet

EXPOSE 8080

CMD [ "npm", "start" ]