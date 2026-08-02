# BRANCH NOTE — `devWitnessv1`

## Purpose 

This branch is dedicated to building the first production-ready version (MVP) of **Witnes**.

The objective is to build the core **session management** capabilities that other developers can integrate into their applications. The focus is to deliver a stable, secure, and well-documented REST API before going on to introduce more advanced features.

---

# Development/Work Focus

Version 1 focuses on the **core session lifecycle**.

The API must allow and enable client applications to:

* Register and authenticate using API Keys
* Create sessions
* Retrieve session information
* Track session activity
* Revoke sessions
* Expire sessions automatically
* View session history

Every feature that is implemented in this branch must directly support the session lifecycle or improve the reliability and usability of the API.

---

# Scope Definition (to be Included)

## Client Management ✅

* Client registration✅
* API Key generation✅
* API Key authentication middleware✅

## Session Management

* Create session✅
* Retrieve session✅
* List sessions✅
* Revoke session
* End session
* Session expiration

## Activity Logging

* Record session events
* Retrieve activity timeline
* Filter activities by session or external user

## Security

* Helmet
* CORS
* Rate limiting
* Environment variable management✅

## Validation

* Request validation
* Response consistency
* Error handling✅

## Documentation

* Swagger documentation
* README updates

## Logging

* Structured application logging

---

# Out of Scope (for V1.0)

The following features are intentionally excluded from Version 1 and will be implemented in future releases:

* Redis
* Background jobs
* Webhooks
* Analytics
* Developer dashboard
* Docker
* CI/CD
* Multi-region support
* SDKs
* Advanced observability

**Note:** Please avoid introducing the above listed features into this branch unless formally agreed upon and the project scope is officially updated.

---

# Technical Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Zod
* Swagger
* Pino
* Helmet
* express-rate-limit
* CORS

---

# Definition of Done

The `devWitnessv1` branch will be considered complete when:

* All planned endpoints are implemented.
* API Key authentication is functional. ✅
* The complete session lifecycle is supported.
* Activity logging works correctly.
* Request validation is in place.
* Error handling is standardized.
* Swagger documentation is complete.
* The project is fully tested using Postman.
* The API is stable and ready to merge into the `main` branch.

---

> **Guiding Principle:** We (in the event that another collaborator other than myself works on the v1.0) must keep Version 1 focused. Prioritize correctness, maintainability, and developer experience. We build a solid foundation first, then iterate in future versions.
