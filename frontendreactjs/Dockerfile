# ---------- Build Stage ----------
FROM node:14 AS build

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the full application code
COPY . .

# Build the React app
RUN npm run build


# ---------- Production Stage ----------
FROM nginx:alpine

# Copy the build output from previous stage to nginx's default html directory
COPY --from=build /app/build /usr/share/nginx/html

# Optionally copy a custom nginx config file if you use one
# Make sure nginx.conf exists in the same directory as your Dockerfile
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the outside
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
