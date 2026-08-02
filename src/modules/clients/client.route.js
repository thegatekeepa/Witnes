import express from "express";
import validator from "../../middleware/validate.middleware.js";
import { registerClientSchema } from "./client.validation.js";
import { registerClient } from "./client.controller.js";
import authenticateClient from "../../middleware/auth.middleware.js";

const clRouter = express.Router();

clRouter.post(
    "/register",
    validator(registerClientSchema),
    registerClient
);

export default clRouter;