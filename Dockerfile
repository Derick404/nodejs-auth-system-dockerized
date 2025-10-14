# 1️⃣ Use an official Node.js image
FROM node:20-alpine

# 2️⃣ Set the working directory inside the container
WORKDIR /app

# 3️⃣ Copy only package files first (for better caching)
COPY proj/package*.json ./

# 4️⃣ Install dependencies
RUN npm install

# 5️⃣ Copy the rest of your app’s source code
COPY proj/ .

# 6️⃣ Expose the app port (optional, but recommended)
EXPOSE 3070

# 7️⃣ Start the server
CMD ["node", "server.js"]
