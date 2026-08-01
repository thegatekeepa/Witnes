//review chatGpt suggest
import { createSessionService, getSessionService } from "./session.service.js";
//import authenticateClient from "../../middleware/auth.middleware.js";

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
