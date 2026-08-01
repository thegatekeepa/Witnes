import express from "express";
import { createSessionSchema } from "./session.validation.js";
import { createSession } from "./session.controller.js";
import authenticateClient from "../../middleware/auth.middleware.js";
import validator from "../../middleware/validate.middleware.js";
import { getSessionSchema } from "./session.validation.js";
import { getSession } from "./session.controller.js";

const sessRouter = express.Router();

sessRouter.post(
    "/", authenticateClient,
    validator(createSessionSchema),
    createSession
);

sessRouter.get(
    "/:sessionId",
    authenticateClient, 
    validator(getSessionSchema, "params"),
    getSession
);

export default sessRouter;