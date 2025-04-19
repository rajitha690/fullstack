# Use the official Node.js 14 image as base
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the application source
COPY . .

# Expose the port the app runs on (optional, helps in Docker)
EXPOSE 5000

# Start the app
CMD ["node", "index.js"]
