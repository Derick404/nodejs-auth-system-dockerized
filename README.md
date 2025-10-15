#  Node.js JWT Authentication (Dockerized)

A secure **user authentication API** built with **Node.js**, **Express**, **bcrypt** for password hashing, and **JWT** for token-based authentication — all containerized using **Docker**.

---

## Features

- User registration with **bcrypt** password hashing  
- User login with **JWT token generation**  
- Protected routes secured via **JWT verification middleware**  
- Environment variables handled using **dotenv**  
- Fully **Dockerized** setup for consistent development and deployment  

---

##  Tech Stack

- **Node.js**  
- **Express.js**  
- **JWT (jsonwebtoken)**  
- **bcrypt**  
- **dotenv**  
- **Docker**  

---

##  Project Structure


                                              nodejs-jwt-auth-docker/
                                                │
                                                ├── backend/
                                                │ ├── server.js
                                                │ ├── package.json
                                                │ ├── .env
                                                │ ├── Dockerfile
                                                │ └── docker-compose.yml
                                                │
                                                └── frontend/
                                                ├── index.html
                                                ├── dashboard.html
                                                └── script.js

---

## Environment Variables

Create a `.env` file in the **backend** folder:


>  You can generate a random secret using:
> ```
> node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
> ```

---

##  Installation (Local)

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/nodejs-jwt-auth-docker.git

# 2. Navigate to backend folder
cd nodejs-jwt-auth-docker/backend

# 3. Install dependencies
npm install

# 4. Start the server
npm run dev
# 5. Build docker image
docker build -t nodejs-jwt-auth .
# 6. run container
docker run -p 2000:2000 nodejs-jwt-auth

