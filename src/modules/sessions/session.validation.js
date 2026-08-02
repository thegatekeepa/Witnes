import { z } from "zod";

export const createSessionSchema = z.object({
    userId: z
        .string()
        .trim()
        .min(1, "User ID is Required")
        .max(216, "User ID cannot exceed 216 characters")
});



export const getSessionSchema = z.object({
    sessionId: z
    .string()
    .trim()
    .min(1, "Session ID is Required")
    .max(216, "Session ID cannot exceed 216 characters")
});

export const sessionHistorySchema = z.object({
    userId: z
        .string()
        .trim()
        .min(1, "User ID is required")
});