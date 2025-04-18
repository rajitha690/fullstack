# ---------- Build Stage ----------
FROM node:14 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

# Environment variable passed at build time
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

# This will embed the backend URL into the frontend code
RUN npm run build

# ---------- Production Stage ----------
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
