import Session from "./session.model.js";
import generateSessionId from "../../utils/generateSessionId.js";
import { SESSION_STATUS } from "../../utils/constants.js";

const createSessionService = async ({
    client,
    userId,
    ipAddress,
    userAgent
}) => {

    // Generate a public session ID
    const sessionId = generateSessionId();

    // Session expires in 24 hours
    const expiresAt = new Date(Date.now() + (24 * 60 * 60 * 1000));

    // Create session
    const session = await Session.create({
        sessionId,
        clientId: client._id,
        userId,
        ipAddress,
        userAgent,
        sessionStatus: SESSION_STATUS.active,
        expiresAt
    });

    return {
        sessionId: session.sessionId,
        userId: session.userId,
        sessionStatus: session.sessionStatus,
        expiresAt: session.expiresAt,
        createdAt: session.createdAt
    };
};

export default createSessionService;