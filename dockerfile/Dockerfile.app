# Stage 1: Build the Next.js project
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Next.js project
RUN npm run build

# Stage 2: Serve the Next.js project
FROM node:18-alpine AS application

WORKDIR /app

COPY --from=builder /app /app

# Expose port 3000
EXPOSE 3000

CMD ["npm", "start"]