import { recordSAS, getSessionActivityHistory } from "./sessionActivities.service.js";

export const recordActivity = async (req, res, next) => {
    try {

        const result = await recordSAS({
            sessionId: req.params.sessionId,
            event: req.body.event,
            metadata: req.body.metadata,
            client: req.client
        });

        return res.status(201).json({
            success: true,
            message: "Activity recorded successfully.",
            data: result
        });

    } catch (error) {
        next(error);
    }
};

export const getSessionActivities = async (req, res, next) => {
    try {
        const result = await getSessionActivityHistory({
            sessionId: req.params.sessionId,
            client: req.client
        });

        return res.status(200).json({
            success: true,
            message: "Retrieved session activities successfully.",
            data: result
        });
    } catch (error) {
        next(error);
    }
};
