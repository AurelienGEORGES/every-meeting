# Use an official Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /var/www/client

# Copy the React application code into the container
COPY . .

# Install project dependencies using npm
RUN npm install

# Start the React development server
CMD ["npm", "start"]