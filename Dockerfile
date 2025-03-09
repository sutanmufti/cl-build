# Use an official Node.js runtime as the base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application files
COPY . .


# Expose the app's port (optional)
ENV PORT=3000
EXPOSE $PORT

# Start the application
CMD ["node", "index.js"]
