# Travel Booking Server

Welcome to the Travel Booking Server! This server provides backend functionality for managing travel bookings and related tasks.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Installation](#installation)>>>>>>> 74cb394 (add README.md to server directory)
- [Configuration](#configuration)
- [Routes](#routes)
- [Environment Variables](#environment-variables)
- [License](#license)

## Introduction

The Travel Booking Server is built to handle the backend requirements of a travel booking application. It provides endpoints for user authentication, managing bookings, searching for available accommodations, and more.


## Getting Started

To get started with the server, follow these steps:

1. Clone the repository and navigate to the project directory.
2. Install dependencies by running `npm install`.
3. Create a `.env` file in the project root and set the environment variables listed above.
4. Start the server by running `npm run serve`.

The server will be available at `http://localhost:3000`.


## Configuration

Before running the server, make sure to set up the necessary configuration by creating a `.env` file in the project root directory. The `.env` file should contain the required environment variables as explained in the [Environment Variables](#environment-variables) section below.

## Routes

The Travel Booking Server exposes the following API routes:

### `POST /customer-auth/signup`

Register a new user account.

Request body:

```json
{
  "fullname": "your_fullname",
  "email": "your_email@example.com",
  "password": "your_password"
}
```
Response body:

```json
{
  "success": true,
  "message": "email sent to your account, please verify"
}
```
### POST `/customer-auth/login`

Log in an existing user.

Request body:

```json
{
  "email": "your_email@example.com",
  "password": "your_password"
}
```
Response body:

```json
{
  "success": true,
  "token": "your_jwt_token",
  "data": {
    "id": "user_id",
    "fullname": "your_fullname",
    "email": "your_email@example.com",
    "phonenumber": "your_phone_number",
    "address": "your_address"
  }
}
```
### GET `/customer-auth/:id/verify/:token`

Verify Email.

Response body:

```json
{
  "success": true,
   "message": "Email verified"
}
```
### `POST /business-auth/signup`

Register a new user account.

Request body:

```json
{
  "name": "business_name",
  "type": "business_type",
  "address": "business_address",
  "email": "business_email",
  "phone": "business_phone",
  "website": "business_website",
  "description": "business_description",
  "password": "business_password"
}

```
Response body:

```json
{
  "success": true,
  "message": "email sent to your account, please verify"
}
```
## Environment Variables

The Travel Booking Server uses the following environment variables. Make sure to set these in the `.env` file:

- `HOST`: The hostname of the database server.
- `DB_USER`: The username to use when connecting to the database.
- `PASSWORD`: The password to use when connecting to the database.
- `DB_NAME`: The name of the database to use.
- `SECRET`: The secret key used for signing JSON Web Tokens (JWTs).
- `EMAIL_USER`: The email used for configuring nodemailer.

- `EMAIL_PWD` : The password_key for configuring nodemailer.

## License
This project is licensed under the ISC License.
