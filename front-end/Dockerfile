FROM node:18-alpine

WORKDIR /app

COPY ./react-app/package.json .
COPY ./react-app/package-lock.json .
#COPY . .

#RUN npm install -g npm@8.19.3
#RUN npm install react-scripts
#RUN npm ci
RUN npm install

COPY ./react-app/ .

EXPOSE 3000
CMD ["npm", "run", "start"]