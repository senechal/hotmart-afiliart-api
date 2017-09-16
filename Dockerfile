FROM node:8.5.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY package.json package-lock.json ./

RUN npm config set registry https://registry.npmjs.org/
RUN npm install --ignore-scripts --unsafe-perm

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
