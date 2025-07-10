# Nodejs-User-Authentication

A secure and lightweight user authentication system built using **Node.js**, **Express.js**, and **MongoDB**. This project demonstrates the complete flow of user login, registration, and token-based session management with JWT (JSON Web Token). It features a clean frontend using plain HTML/CSS and a modular backend structure, making it perfect for learning, prototyping, or extending into a full-stack application.

---

## Features

- User registration with hashed passwords
- Login with JWT authentication
- Protected dashboard route (extendable)
- Clean and responsive frontend (HTML + CSS)
- Environment-based configuration with `.env`


## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **bcryptjs** (for password hashing)
- **jsonwebtoken** (for authentication)
- **dotenv**


## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Yashika-Bayeen/Nodejs-User-Authentication

cd Nodejs-User-Authentication
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a .env file in the root directory:
```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

### 4. Start the server
```bash
npm start
```
The server will run at http://localhost:5000

### API Routes
POST /api/auth/register
- Registers a new user

POST /api/auth/login
- Logs in a user and returns a JWT token

### Notes
Extend the project with middleware to protect the dashboard route using JWT.

Frontend can be enhanced using templating engines like EJS or frameworks like React.

### 📄 License
This project is open-source and available under the MIT License.
