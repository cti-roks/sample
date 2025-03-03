FROM registry.access.redhat.com/ubi8/nodejs-18:latest
COPY package.json ./
RUN npm install
COPY . /opt/app-root/src
ENV PORT 3000
CMD ["npm", "start"]
