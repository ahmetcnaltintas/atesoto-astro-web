# 1. Build aşaması
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# 2. Sadece statik dosyaları sunan aşama
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# Opsiyonel: NGINX config dosyası eklemek isterseniz
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]