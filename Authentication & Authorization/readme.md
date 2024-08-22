# Authentication & Authorization

## Overview

This project is a demonstration of implementing authentication and authorization in a web application using Express.js, MongoDB, EJS, and JWT. It provides features such as user registration, login, JWT-based authentication, and role-based access control.

## Features

- User Registration with email verification
- User Login with session management and JWT-based authentication
- Password hashing using bcrypt
- Error handling and validation

## Technologies Used

- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **EJS**: Embedded JavaScript templating.
- **bcrypt**: Password hashing function.
- **express-session**: Middleware for session management.
- **jsonwebtoken (JWT)**: For secure token-based authentication.
- **connect-flash**: Flash messages for displaying success/error messages.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/authentication-authorization.git
   cd authentication-authorization
2. Install dependencies:
   ```bash
   npm i
3. Create a .env file in the root directory and add the following variables:
   ```bash
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret_key
   SESSION_SECRET=your_session_secret_key
4. Start the application:
   ```bash
   nodemon app.js
5. Open your browser and navigate to http://localhost:3000.

## Usage
Register a new user via the registration page.
Login with the registered credentials to receive a JWT.
Access protected routes based on user roles.
Logout to destroy the session.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request.
