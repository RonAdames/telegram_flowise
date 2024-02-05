# Use a Node.js image as the base
FROM node:18-bullseye as telegram-bot

# Set the working directory in the application
WORKDIR /usr/src/app

# Copy the application files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port that the application will use (make sure it matches the port you are using in your code)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]

