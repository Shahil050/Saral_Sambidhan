# Use the lightweight Nginx Alpine image
FROM nginx:alpine

# Set the working directory to Nginx's default public folder
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy all the frontend files
COPY . .

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx in the foreground so the container stays alive
CMD ["nginx", "-g", "daemon off;"]