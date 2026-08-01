import express from "express";
import { createSessionSchema, getSessionSchema } from "./session.validation.js";
import { createSession } from "./session.controller.js";
import authenticateClient from "../../middleware/auth.middleware.js";
import validator from "../../middleware/validate.middleware.js";
import { getSession } from "./session.controller.js";
import { getAllSessions } from "./session.controller.js";
import { 
    recordActivitySchema, 
    activityParamsSchema 
} from "../sessionActivities/sessionActivities.validation.js";
import { recordActivity, getSessionActivities } from "../sessionActivities/sessionActivities.controller.js";

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

sessRouter.get(
    "/", 
    authenticateClient, 
    getAllSessions
);

sessRouter.post(
    "/:sessionId/activities",
    authenticateClient,
    validator(activityParamsSchema, "params"),
    validator(recordActivitySchema),
    recordActivity
);

sessRouter.get(
    "/:sessionId/activities",
    authenticateClient,
    validator(activityParamsSchema, "params"),
    getSessionActivities
);

export default sessRouter;