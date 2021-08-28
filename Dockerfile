FROM node:14.17-alpine

WORKDIR /usr/src/stock_market

# COPY package*.json ./
# 
# RUN npm install
# 
# COPY . .

# EXPOSE 5000

CMD [ "npm", "run", "watch" ]