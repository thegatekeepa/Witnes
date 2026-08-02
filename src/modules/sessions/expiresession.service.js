// expiresession.service.js for node-cron job to expire inactive sessions
import Session from "./session.model.js";
import sessionActivity from "../sessionActivities/sessionActivities.model.js";
import { SESSION_STATUS, SESSION_EVENTS } from "../../utils/constants.js";
import ApiError from "../../utils/ApiError.js";

/** Comments
 * This file contains the service logic for expiring sessions.
 * @param {Object} params
 * @param {string} params.sessionId - The session identifier
 * @param {Object} params.client - The client object (with _id)
 * @returns {Promise<Object>} - The updated session details
 */

const expireSessions = async () => {
    // Find all active sessions that have reached expiration time
    const sessions = await Session.find({
        sessionStatus: SESSION_STATUS.active,
        expiresAt: { $lte: new Date() } //$lte means less than or equal to --a mongodb operator
    });

    // Nothing to do
    if (sessions.length === 0) {
        return {expiredCount: 0};
    }

    // Expire each session using the for...of loop to ensure sequential processing
    for (const session of sessions) {
        session.sessionStatus = SESSION_STATUS.expired;
        await session.save();
    }

    return {
        expiredCount: sessions.length
    };
};

export default expireSessions;