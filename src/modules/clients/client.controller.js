import registerClientService from "./client.service.js";


export const registerClient = async (req, res, next) => {
    try {
        const result = await registerClientService(req.body);

        return res.status(201).json({
            success: true,
            message: "Client registered successfully.",
            data: result
        });

    } catch (error) {
        next(error);
    }
};