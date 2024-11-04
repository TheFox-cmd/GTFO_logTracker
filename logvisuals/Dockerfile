# Stage 1: Build the app with Node.js
# Use an official Node.js, and it should be version 20 and above
FROM node:20-alpine AS build
# Set the working directory in the container
WORKDIR /app
# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./
# Install pnpm globally
RUN npm install -g pnpm
# Install app dependencies using PNPM
RUN pnpm install
# Copy the rest of the application code
COPY . .
# Build the TypeScript code
RUN pnpm run build

# # Stage 2: Serve the app with NGINX
# FROM nginx:alpine
# # Copy the build output from the previous stage
# COPY --from=build /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3001

# CMD ["nginx", "-g", "daemon off;"]
CMD ["node", "App.cjs"]