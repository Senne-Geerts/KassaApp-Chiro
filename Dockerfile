#FROM node:alpine3.14
FROM --platform=${TARGETPLATFORM:-linux/amd64} node:alpine3.14

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npm", "start"]
