FROM node:10-alpine

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn

# Copying source files
COPY .next ./.next
COPY pages ./pages
COPY _constants ./_constants
COPY next.config.js .

RUN ls

# Building app
RUN yarn build

# Running the app
CMD [ "yarn", "start" ]
