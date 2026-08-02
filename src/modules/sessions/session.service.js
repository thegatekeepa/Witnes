import Session from "./session.model.js";
import generateSessionId from "../../utils/generateSessionId.js";
import { SESSION_STATUS, SESSION_EVENTS } from "../../utils/constants.js";
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

//revoke session
const revokeSessionService = async ({ sessionId, client }) => {
    const revokedSession = await Session.findOneAndUpdate({
        sessionId,
        clientId: client._id.toString()
    });

    if(!revokedSession) {
        throw new ApiError(404, "Session not found");
    };

    if(revokedSession.sessionStatus === SESSION_STATUS.revoked) {
        throw new ApiError(400, "Session is already revoked");
    };

    if(revokedSession.sessionStatus === SESSION_STATUS.expired) {
        throw new ApiError(400, "Session is expired and cannot be revoked");
    }

    revokedSession.sessionStatus = SESSION_STATUS.revoked;
    revokedSession.revokedAt = new Date();
    await revokedSession.save(); 

    return {
        sessionId: revokedSession.sessionId, 
        sessionStatus: revokedSession.sessionStatus, 
        revokedAt: revokedSession.revokedAt
    };
};

//get session history
const getSessionHistoryService = async ({ client, userId }) => {
    const sessions = await Session.find({
        clientId: client._id,
        userId
    }).sort({ createdAt: -1 });

    return {
        userId,
        totalSessions: sessions.length,
        sessions: sessions.map((session) => ({
            sessionId: session.sessionId,
            sessionStatus: session.sessionStatus,
            ipAddress: session.ipAddress,
            userAgent: session.userAgent,
            createdAt: session.createdAt,
            expiresAt: session.expiresAt,
            revokedAt: session.revokedAt
        }))
    };
};

export { createSessionService, 
    getSessionService, 
    getAllSessionsService, 
    revokeSessionService, 
    getSessionHistoryService };