# ---------- Build Stage ----------
FROM node:14 AS build

WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Accept the backend URL as a build-time argument
ARG REACT_APP_BACKEND_URL

# Inject REACT_APP_BACKEND_URL directly when running the build
RUN REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL npm run build

# ---------- Production Stage ----------
FROM nginx:alpine

# Copy built static files to nginx
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
