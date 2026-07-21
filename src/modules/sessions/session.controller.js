//review chatGpt suggest
import createSessionService from "./session.service.js";

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
