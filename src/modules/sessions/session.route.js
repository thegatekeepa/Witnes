import express from "express";
import { createSessionSchema } from "./session.validation.js";
import { createSession } from "./session.controller.js";
import authenticateClient from "../../middleware/auth.middleware.js";
import validator from "../../middleware/validate.middleware.js";

const sessRouter = express.Router();

sessRouter.post(
    "/", authenticateClient,
    validator(createSessionSchema),
    createSession
);

export default sessRouter;