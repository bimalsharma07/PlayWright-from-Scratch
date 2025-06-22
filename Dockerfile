# Dockerfile
FROM mcr.microsoft.com/playwright:v1.53.1
WORKDIR /tests
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npx playwright install --with-deps
RUN npm run build
CMD ["npx", "playwright", "test"]