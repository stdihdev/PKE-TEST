FROM node:12

# Setting working directory. All the path will be relative to WORKDIR
# cd /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "run", "migration" ]
CMD [ "npm", "run", "start" ]