import { z } from "zod";
import { SESSION_EVENTS } from "../../utils/constants.js";

export const recordActivitySchema = z.object({
    event: z
    .enum(Object.values(SESSION_EVENTS)),

    metadata: z
    .object({})
    .passthrough()
    .optional()    
});

export const activityParamsSchema = z.object({
    sessionId: z
    .string()
    .trim()
    .min(1, "Session ID is Required")
    .max(48, "Invalid Session ID")
});
