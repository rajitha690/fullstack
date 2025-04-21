# ---------- Build Stage ----------
FROM node:14 AS build

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Accept the backend URL as a build-time argument
ARG REACT_APP_BACKEND_URL

# Set environment variable so React can access it
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

# Build the React app
RUN npm run build

# ---------- Production Stage ----------
FROM nginx:alpine

# Copy build output to NGINX public folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose default port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
