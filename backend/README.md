
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
- `user`: Object (required)
    - `fullname`: String (required, minimum 3 characters)
        - `firstname`: String (required, minimum 3 characters)
        - `lastname`: String (required, minimum 3 characters)
    - `email`: String (required, valid email format)
    - `password`: String (required, minimum 6 characters)
- `token`: String (JWT Token)
