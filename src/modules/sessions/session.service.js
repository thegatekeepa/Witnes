import Session from "./session.model.js";
import generateSessionId from "../../utils/generateSessionId.js";
import { SESSION_STATUS } from "../../utils/constants.js";
import ApiError from "../../utils/ApiError.js"; 
import dotenv from "dotenv";

const createSessionService = async ({
    client,
    userId,
    ipAddress,
    userAgent
}) => {

    // Generate a public session ID
    const sessionId = generateSessionId();

    // Session lifetime (24 hours)
    const expiresAt = new Date(
        Date.now() + (process.env.EXPIREAT_TIME * 60 * 60 * 1000)
    );

    // Create the session
    const newSession = await Session.create({
        sessionId,
        clientId: client._id,
        userId,
        ipAddress,
        userAgent,
        sessionStatus: SESSION_STATUS.ACTIVE,
        expiresAt
    });

    // Return only the information useful to the client
    return {
        sessionId: newSession.sessionId,
        clientId: newSession.clientId,
        userId: newSession.userId,
        sessionStatus: newSession.sessionStatus,
        ipAddress: newSession.ipAddress,
        userAgent: newSession.userAgent,
        expiresAt: newSession.expiresAt,
        createdAt: newSession.createdAt
    };
};

//retrieve session
const getSessionService = async ({sessionId, client}) => {
    const session = await Session.findOne({
        sessionId, 
        clientId: client._id
    });

    if(!session) {
        throw new ApiError(404, "Session not found");
    }

    return {
        sessionId: session.sessionId,
        clientId: session.clientId,
        userId: session.userId,
        sessionStatus: session.sessionStatus,
        ipAddress: session.ipAddress,
        userAgent: session.userAgent,
        expiresAt: session.expiresAt,
        revokedAt: session.revokedAt,
        createdAt: session.createdAt,
    };
};

const getAllSessionsService = async ({client}) => {
    const sessions = await Session.find({
        clientId: client._id
    });

    if(!sessions) {
        throw new ApiError(404, "Sessions not found");
    }

    return sessions;
};

export { createSessionService, getSessionService, getAllSessionsService };