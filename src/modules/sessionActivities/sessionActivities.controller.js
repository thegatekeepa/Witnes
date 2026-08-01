import recordSAS from "./sessionActivities.service.js";

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
