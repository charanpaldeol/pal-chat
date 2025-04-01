# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the server code
COPY . .

# Use production port
ENV PORT=8080
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
