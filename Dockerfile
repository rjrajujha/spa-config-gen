# Use a Node.js base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the TypeScript files
RUN npm run build

# Set the default command to run the app
CMD ["node", "dist/index.js"]
