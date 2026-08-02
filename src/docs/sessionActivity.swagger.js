/**
 * @swagger
 * tags:
 *   name: Session Activities
 *   description: Track and retrieve user activities within a session.
 */

/**
 * @swagger
 * /api/v1/sessions/{sessionId}/activities:
 *   post:
 *     summary: Record a session activity
 *     description: This endpoint records an activity for an active session belonging to the authenticated client.
 *     tags:
 *       - Session Activities
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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - event
 *             properties:
 *               event:
 *                 type: string
 *                 enum:
 *                   - LOGIN
 *                   - LOGOUT
 *                   - PASSWORD_CHANGED
 *                   - PROFILE_UPDATED
 *                   - TOKEN_REFRESHED
 *                 example: LOGIN
 *
 *               metadata:
 *                 type: object
 *                 description: Optional additional information about the activity.
 *                 example:
 *                   updatedFields:
 *                     - email
 *                     - phone
 *
 *     responses:
 *       201:
 *         description: Activity recorded successfully.
 *         content:
 *           application/json:
 *             examples:
 *               EventOnly:
 *                 summary: Record activity without metadata
 *                 value:
 *                   success: true
 *                   message: Activity recorded successfully.
 *                   data:
 *                     activityId: wsaid.2daa872613400f3701
 *                     sessionId: wstsid.f71cf5eb990d4dac8d
 *                     event: LOGIN
 *                     metadata: {}
 *                     createdAt: "2026-08-01T18:03:28.669Z"
 *
 *               WithMetadata:
 *                 summary: Record activity with metadata
 *                 value:
 *                   success: true
 *                   message: Activity recorded successfully.
 *                   data:
 *                     activityId: wsaid.66e74da20301a1cb3c
 *                     sessionId: wstsid.f71cf5eb990d4dac8d
 *                     event: PROFILE_UPDATED
 *                     metadata:
 *                       updatedFields:
 *                         - email
 *                         - phone
 *                     createdAt: "2026-08-01T17:59:32.604Z"
 *
 *       400:
 *         description: Validation failed or session is not active.
 *
 *       401:
 *         description: API Key is missing or invalid.
 *
 *       403:
 *         description: You are not authorized to record activities for this session.
 *
 *       404:
 *         description: Session not found.
 *
 *       500:
 *         description: Internal server error.
 */


