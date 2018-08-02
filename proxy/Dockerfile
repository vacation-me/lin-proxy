FROM node:7.6
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app
EXPOSE 3000
ENV PORT 3000
CMD ["npm", "start"]