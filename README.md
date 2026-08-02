# Witnes

                  Client Application
                         │
                    x-api-key
                         │
                  ┌───────────────┐
                  │   Witnes API  │
                  └───────────────┘
                         │
              Authentication Middleware
                         │
                    Controllers
                         │
                     Services
                ┌──────┼────────┐
                │      │        │
             Clients Sessions Activities
                │      │        │
                └──────┼────────┘
                       │
                   MongoDB

            node-cron
                 │
                 ▼
         Expire Sessions Job

>chart drawn using ChatGpt


**Witnes** is a developer-focused Session Tracking API that enables applications to create, monitor, manage, and audit user sessions through a secure REST API.

Rather than storing application users, Witnes allows client applications to register, authenticate using API keys, create user sessions, record session activities, retrieve session history, revoke sessions, and automatically expire inactive sessions.

---

## Features

### Client Management

* Register client applications
* Secure API Key authentication using hashed keys
* Client ownership verification
* Client status management

### Session Management

* Create user sessions
* Retrieve a specific session
* Retrieve all sessions belonging to a client
* View a user's session history
* Revoke active sessions
* Automatic session expiration using scheduled background jobs (node-cron)

### Session Activity Tracking

* Record session events
* Attach custom metadata to events
* Retrieve complete activity history for a session

### Security

* API Key Authentication
* Helmet
* CORS
* Express Rate Limiting
* Environment Variable Management
* Zod Request Validation
* Ownership verification for protected resources

---

# Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Zod
* bcrypt
* node-cron
* Helmet
* CORS
* express-rate-limit
* dotenv

---

# API Endpoints

## Client

| Method | Endpoint                  | Description           |
| ------ | ------------------------- | --------------------- |
| POST   | `/api/v1/client/register` | Register a new client |

---

## Sessions

| Method | Endpoint                             | Description                       |
| ------ | ------------------------------------ | --------------------------------- |
| POST   | `/api/v1/sessions`                   | Create a new session              |
| GET    | `/api/v1/sessions/:sessionId`        | Retrieve a session                |
| GET    | `/api/v1/sessions`                   | Retrieve all client sessions      |
| PATCH  | `/api/v1/sessions/:sessionId/revoke` | Revoke a session                  |
| GET    | `/api/v1/sessions/history/:userId`   | Retrieve a user's session history |

---

## Session Activities

| Method | Endpoint                                 | Description                           |
| ------ | ---------------------------------------- | ------------------------------------- |
| POST   | `/api/v1/sessions/:sessionId/activities` | Record a session activity             |
| GET    | `/api/v1/sessions/:sessionId/activities` | Retrieve a session's activity history |

---

# Authentication

Protected endpoints require an API Key.

Include the API Key in every request header.

```
x-api-key: YOUR_API_KEY
```

API keys are generated during client registration and should be stored securely by the client application.

---

# Supported Session Events

* LOGIN
* LOGOUT
* PASSWORD_CHANGED
* PROFILE_UPDATED
* TOKEN_REFRESHED

Each event may optionally include a metadata object containing additional event information.

Example:

```json
{
    "event": "PROFILE_UPDATED",
    "metadata": {
        "updatedFields": [
            "email",
            "phone"
        ]
    }
}
```

---

# Session Lifecycle

A session in Witnes can exist in one of the following states:

* ACTIVE
* REVOKED
* EXPIRED

Sessions may end in two ways:

* Manually revoked by the client.
* Automatically expired by the background scheduler after the configured expiration period.

---

# Automatic Session Expiration

Witnes uses **node-cron** to periodically scan for expired sessions.

Any active session whose expiration time has elapsed is automatically marked as:

```
EXPIRED
```

This happens without requiring any API request from the client application.

---

# Example Responses

## Register Client

```json
{
    "success": true,
    "message": "Client registered successfully.",
    "data": {
        "client": {
            "id": "...",
            "clientName": "Morano Labs Inc",
            "companyName": "Morl Inc",
            "clientStatus": "ACTIVE"
        },
        "apiKey": "wst_live_xxxxxxxxxxxxxxxxx"
    }
}
```

---

## Create Session

```json
{
    "success": true,
    "message": "Session created successfully.",
    "data": {
        "sessionId": "wstsid.xxxxxxxxx",
        "userId": "usr_007",
        "sessionStatus": "ACTIVE",
        "expiresAt": "...",
        "createdAt": "..."
    }
}
```

---

## Record Activity

```json
{
    "event": "LOGIN"
}
```

or

```json
{
    "event": "PROFILE_UPDATED",
    "metadata": {
        "updatedFields": [
            "email",
            "phone"
        ]
    }
}
```

---

## Session History

```json
{
    "success": true,
    "data": {
        "userId": "usr_006",
        "totalSessions": 2,
        "sessions": [
            {
                "sessionId": "...",
                "sessionStatus": "EXPIRED"
            }
        ]
    }
}
```

---

# Error Responses

Example validation error

```json
{
    "success": false,
    "message": "Validation failed.",
    "errors": [
        {
            "field": "event",
            "message": "Invalid option."
        }
    ]
}
```

Example authentication error

```json
{
    "success": false,
    "statusCode": 401,
    "message": "API Key is required to continue"
}
```

---

# Future Roadmap

## Version 1.1

* PostgreSQL migration
* Prisma ORM
* Improved database indexing

See more about Version 1.0 here👉 <https://github.com/thegatekeepa/Witnes/blob/devWitnessv1/BRANCH.md>

## Version 2

* Redis caching
* Background queues
* Webhooks
* API Keys management improvements
* Improved testing

## Version 3

* Session Analytics Dashboard
* Docker support
* CI/CD pipeline
* SDKs
* Monitoring improvements

## Version 4

Intentionally left out. <see versionNotes.text>

---

# License

>This project is released for learning and reference purposes.
>You are welcome to explore, study, and build upon the project. Attribution is appreciated when using the project or significant portions of its implementation.

>©️2026 David Caleb (Gatekeepa)