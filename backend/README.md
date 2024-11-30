# Backend API Documentation

## Register a New User

### Endpoint

**POST** `/users/register`

### Description

This endpoint registers a new user in the system.

### Request Body

The request body should be a JSON object containing:

- `fullname`: Object (required)
  - `firstname`: String (required, minimum 3 characters)
  - `lastname`: String (required, minimum 3 characters)
- `email`: String (required, valid email format)
- `password`: String (required, minimum 6 characters)

## Example Response:
- `user`: Object 
    - `fullname`: Object 
        - `firstname`: String 
        - `lastname`: String 
    - `email`: String
    - `password`: String
- `token`: String (JWT Token)

## User Login

### Endpoint

**POST** `/users/login`

### Description

This endpoint authenticates a user and returns a JWT token.

### Request Body

The request body should be a JSON object containing:

- `email`: String (required, valid email format)
- `password`: String (required, minimum 6 characters)

### Example Response:
- `token`: String (JWT Token)
- `user`: Object
    - `fullname`: Object
        - `firstname`: String
        - `lastname`: String
    - `email`: String
    - `password`: String
