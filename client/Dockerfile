# Use an official Node.js image
FROM node:lts

# Set the working directory
WORKDIR /var/www/client

# Copy the React application code into the container
COPY . .

# Start the React development server
ENTRYPOINT ["bash", "./script.sh"]