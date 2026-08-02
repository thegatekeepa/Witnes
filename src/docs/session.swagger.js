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