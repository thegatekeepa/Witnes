import { z } from "zod";

export const createSessionSchema = z.object({
    userId: z
        .string()
        .trim()
        .min(1, "User ID is Required")
        .max(216, "User ID cannot exceed 216 characters")
});