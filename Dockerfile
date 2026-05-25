FROM node:22.22.3-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Этап сборки
FROM node:22.22.3-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Продакшн-этап
FROM node:22.22.3-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Копируем необходимые файлы
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3001

# Запуск приложения
CMD ["npm", "start"]