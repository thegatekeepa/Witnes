import express from "express";
import clientValidator from "../../middleware/validate.middleware.js";
import { registerClientSchema } from "./client.validation.js";
import { registerClient } from "./client.controller.js";
import authenticateClient from "../../middleware/auth.middleware.js";

const clRouter = express.Router();

clRouter.post(
    "/register",
    clientValidator(registerClientSchema),
    registerClient
);

export default clRouter;