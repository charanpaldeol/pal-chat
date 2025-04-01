# Use the official Node.js LTS image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all source code
COPY . .

# Expose port that Fly.io will route traffic to (Fly sets PORT automatically)
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
