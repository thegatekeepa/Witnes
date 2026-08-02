import { 
    createSessionService, 
    getSessionService, 
    getAllSessionsService, 
    revokeSessionService, 
    getSessionHistoryService 
} from "./session.service.js";


export const createSession = async (req, res, next) => {
    try {

        const result = await createSessionService({
            client: req.client,
            userId: req.body.userId,
            ipAddress: req.ip,
            userAgent: req.header("user-agent")
        });

        return res.status(201).json({
            success: true,
            message: "Session created successfully.",
            data: result
        });

    } catch (error) {
        next(error);
    }
};

export const getSession = async (req, res, next) => {
    try {
        const result = await getSessionService({
            sessionId: req.params.sessionId,
            client: req.client
        });
        return res.status(200).json({
            success: true,
            message: "Session retrieved successfully.",
            data: result
        });
    } catch (error) {
        next(error);
    }

};

export const getAllSessions = async (req, res, next) => {
    try {
        const result = await getAllSessionsService({
            client: req.client._id
        });
        return res.status(200).json({
            success: true, 
            message: "All Sessions retrieved successfully.",
            data: result
        });
    } catch (error) {
        next(error);
    }
};

export const revokeSession = async (req, res, next) => {
    try {
    const result = await revokeSessionService({
        sessionId: req.params.sessionId,
        client: req.client
    });
    return res.status(200).json({
        success: true,
        message: "Session revoked successfully.",
        data: result
    });
    } catch (error) {
        next(error);
    }
};

export const getSessionHistory = async (req, res, next) => {
    try {
        const result = await getSessionHistoryService({
            client: req.client,
            userId: req.params.userId
        });
        return res.status(200).json({
            success: true,
            message: "Session history retrieved successfully.",
            data: result
        });
    } catch (error) {
        next(error);
    }
};
