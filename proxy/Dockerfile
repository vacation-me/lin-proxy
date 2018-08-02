FROM node:7.6
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/
RUN npm install --only=production
COPY . /app
EXPOSE 3000
ENV PORT 3000
ENV ENV prod
CMD ["npm", "start"]