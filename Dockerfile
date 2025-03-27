# Use Node.js LTS (Long Term Support) as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy all other source files
COPY . .


# Install dependencies
RUN npm install -g pnpm

RUN pnpm install

RUN pnpm run build

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"] 