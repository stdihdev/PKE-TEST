FROM node:12

ENV PORT 5000

# Create app directory
RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server

# Installing dependencies
COPY package*.json /usr/src/server/
RUN npm install

# Copying source files
COPY . /usr/src/server

EXPOSE 5000



# Running the app
CMD "npm" "run" "start"
