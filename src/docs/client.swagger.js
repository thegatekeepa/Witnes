/**
 * @swagger
 * tags:
 *   name: Clients
 *   description: Witnes API Client Operations.
 */


/**
 * @swagger
 * /api/v1/client/register:
 *   post:
 *     summary: Register a new client
 *     description: This endpoint registers a new client application and returns a unique API Key. The API Key is shown only once and should be stored securely by the client.
 *     tags:
 *       - Clients
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - clientName
 *               - email
 *               - companyName
 *             properties:
 *               clientName:
 *                 type: string
 *                 example: Morano Labs Inc
 *               email:
 *                 type: string
 *                 format: email
 *                 example: morlab@example.com
 *               companyName:
 *                 type: string
 *                 example: Morano Technologies
 *
 *     responses:
 *       201:
 *         description: Client registered successfully.
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Client registered successfully.
 *               data:
 *                 client:
 *                   id: 6a5034d3964d9dcb9105e1f5
 *                   clientName: Morano Labs Inc
 *                   email: morlab@example.com
 *                   companyName: Morano Technologies
 *                   clientStatus: ACTIVE
 *                   createdAt: "2026-08-02T18:00:00.000Z"
 *                 apiKey: wst_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 *
 *       400:
 *         description: Validation failed.
 *
 *       409:
 *         description: Client already exists.
 *
 *       500:
 *         description: Internal server error.
 */

