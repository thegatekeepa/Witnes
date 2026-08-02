/**
 * @swagger
 * tags:
 *   name: Sessions
 *   description: Create, retrieve, revoke, and manage user sessions.
 */

/**
 * @swagger
 * /api/v1/sessions:
 *   post:
 *     summary: Create a new session
 *     description: This endpoint creates a new session for a user belonging to the authenticated client application.
 *     tags:
 *       - Sessions
 *     security:
 *       - ApiKeyAuth: []
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *                 example: usr_007
 *
 *     responses:
 *       201:
 *         description: Session created successfully.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Session created successfully.
 *               data:
 *                 sessionId: wstsid.f71cf5eb990d4dac8d
 *                 clientId: 6a5034d3964d9dcb9105e1f5
 *                 userId: usr_007
 *                 sessionStatus: ACTIVE
 *                 ipAddress: "::1"
 *                 userAgent: PostmanRuntime/7.56.0
 *                 expiresAt: "2026-08-02T18:27:50.921Z"
 *                 createdAt: "2026-08-01T18:27:50.925Z"
 *
 *       400:
 *         description: Validation failed.
 *
 *       401:
 *         description: API Key is missing or invalid.
 *
 *       500:
 *         description: Internal server error.
 */


/**
 * @swagger
 * /api/v1/sessions/{sessionId}:
 *   get:
 *     summary: Retrieve a session
 *     description: This endpoint retrieves the details of a specific session belonging to an authenticated client.
 *     tags:
 *       - Sessions
 *     security:
 *       - ApiKeyAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: sessionId
 *         required: true
 *         description: The unique session identifier.
 *         schema:
 *           type: string
 *           example: wstsid.f71cf5eb990d4dac8d
 *
 *     responses:
 *       200:
 *         description: Session retrieved successfully.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Session retrieved successfully.
 *               data:
 *                 sessionId: wstsid.f71cf5eb990d4dac8d
 *                 clientId: 6a5034d3964d9dcb9105e1f5
 *                 userId: usr_007
 *                 sessionStatus: ACTIVE
 *                 ipAddress: "::1"
 *                 userAgent: PostmanRuntime/7.56.0
 *                 expiresAt: "2026-08-02T18:27:50.921Z"
 *                 revokedAt: null
 *                 createdAt: "2026-08-01T18:27:50.925Z"
 *
 *       401:
 *         description: API Key is missing or invalid.
 *
 *       404:
 *         description: Session not found.
 *
 *       500:
 *         description: Internal server error.
 */


/**
 * @swagger
 * /api/v1/sessions:
 *   get:
 *     summary: Retrieve all sessions
 *     description: This endpoint retrieves all sessions belonging to an authenticated client.
 *     tags:
 *       - Sessions
 *     security:
 *       - ApiKeyAuth: []
 *
 *     responses:
 *       200:
 *         description: All sessions retrieved successfully.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: All Sessions retrieved successfully.
 *               data:
 *                 - sessionId: wstsid.ecc717176cdafc5253
 *                   clientId: 6a5033d4cb33826e639a7fea
 *                   userId: usr_007
 *                   sessionStatus: ACTIVE
 *                   ipAddress: "::1"
 *                   userAgent: PostmanRuntime/7.56.0
 *                   revokedAt: null
 *                   expiresAt: "2026-08-02T18:27:50.921Z"
 *                   createdAt: "2026-08-01T18:27:50.925Z"
 *
 *                 - sessionId: wstsid.0a7e308b372552bab1
 *                   clientId: 6a5033d4cb33826e639a7fea
 *                   userId: usr_004
 *                   sessionStatus: ACTIVE
 *                   ipAddress: "::1"
 *                   userAgent: PostmanRuntime/7.56.0
 *                   revokedAt: null
 *                   expiresAt: "2026-08-02T18:28:55.722Z"
 *                   createdAt: "2026-08-01T18:28:55.723Z"
 *
 *       401:
 *         description: API Key is missing or invalid.
 *
 *       500:
 *         description: Internal server error.
 */


/**
 * @swagger
 * /api/v1/sessions/{sessionId}/revoke:
 *   patch:
 *     summary: Revoke a session
 *     description: This endpoint revokes an active session belonging to an authenticated client. A revoked session can no longer be used.
 *     tags:
 *       - Sessions
 *     security:
 *       - ApiKeyAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: sessionId
 *         required: true
 *         description: The unique session identifier.
 *         schema:
 *           type: string
 *           example: wstsid.f71cf5eb990d4dac8d
 *
 *     responses:
 *       200:
 *         description: Session revoked successfully.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Session revoked successfully.
 *               data:
 *                 sessionId: wstsid.f71cf5eb990d4dac8d
 *                 sessionStatus: REVOKED
 *                 revokedAt: "2026-08-01T22:00:51.981Z"
 *
 *       400:
 *         description: Session is already revoked.
 *
 *       401:
 *         description: API Key is missing or invalid.
 *
 *       404:
 *         description: Session not found.
 *
 *       500:
 *         description: Internal server error.
 */


/**
 * @swagger
 * /api/v1/sessions/history/{userId}:
 *   get:
 *     summary: Retrieve a user's session history
 *     description: This endpoint retrieves all sessions that belong to a specific user under the authenticated client application. Note: Ownership is enforced, so only authenticated client can access this endpoint.
 *     tags:
 *       - Sessions
 *     security:
 *       - ApiKeyAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: The user identifier whose session history should be retrieved.
 *         schema:
 *           type: string
 *           example: usr_006
 *
 *     responses:
 *       200:
 *         description: Session history retrieved successfully.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Session history retrieved successfully.
 *               data:
 *                 userId: usr_006
 *                 totalSessions: 2
 *                 sessions:
 *                   - sessionId: wstsid.7b6e1a980f4d59baae
 *                     sessionStatus: EXPIRED
 *                     ipAddress: "::1"
 *                     userAgent: PostmanRuntime/7.56.0
 *                     createdAt: "2026-08-02T02:25:09.406Z"
 *                     expiresAt: "2026-08-02T02:25:39.285Z"
 *                     revokedAt: null
 *
 *                   - sessionId: wstsid.284889e258446ce1f9
 *                     sessionStatus: EXPIRED
 *                     ipAddress: "::1"
 *                     userAgent: PostmanRuntime/7.56.0
 *                     createdAt: "2026-08-02T02:21:30.179Z"
 *                     expiresAt: "2026-08-02T02:22:00.055Z"
 *                     revokedAt: null
 *
 *       401:
 *         description: API Key is missing or invalid.
 *
 *       404:
 *         description: No session history found for the specified user.
 *
 *       500:
 *         description: Internal server error.
 */