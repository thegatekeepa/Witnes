import express from "express";
import { createSessionSchema, getSessionSchema } from "./session.validation.js";
import { createSession, getSession, getAllSessions, revokeSession } from "./session.controller.js";
import authenticateClient from "../../middleware/auth.middleware.js";
import validator from "../../middleware/validate.middleware.js";
import {  recordActivitySchema, activityParamsSchema 
} from "../sessionActivities/sessionActivities.validation.js";
import { recordActivity, getSessionActivities 
} from "../sessionActivities/sessionActivities.controller.js";

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

sessRouter.patch(
    "/:sessionId/revoke",
    authenticateClient,
    validator(getSessionSchema, "params"),
    revokeSession
);

export default sessRouter;