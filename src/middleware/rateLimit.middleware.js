import rateLimit from "express-rate-limit";

const apiRateLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    limit: process.env.APIRATELIMIT_LIMIT || 100,

    message: {
        success: false,
        message: "There's too many requests. You can try again later."
    },

    standardHeaders: true,
    legacyHeaders: false
});

export default apiRateLimiter;