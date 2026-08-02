import { z } from "zod";

export const registerClientSchema = z.object({
    clientName: z
        .string()
        .trim()
        .min(3, "Client name must be at least 3 characters.")
        .max(100, "Client name cannot exceed 100 characters."),

    email: z
        .string()
        .trim()
        .email("Please provide a valid email address."),

    companyName: z
        .string()
        .trim()
        .min(2, "Company/Developer name must be at least 2 characters.")
        .max(100, "Company/Developer name cannot exceed 100 characters.")
        .optional()
});