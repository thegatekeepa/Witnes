import mongoose from "mongoose";
import { SESSION_EVENTS } from "../../utils/constants.js";

const sessionActivitySchema = new mongoose.Schema (
    {
        sessionId: {
            type: String,
            required: true,
            index: true
        },

        clientId: {
            type: String,
            required: true,
            index: true
        },

        userId: {
            type: String,
            required: true,
            index: true
        },

        activityId: {
            type: String,
            required: true,
            unique: true,
            index: true
        },

        event: {
            type: String,
            enum: Object.values(SESSION_EVENTS),
            required: true
        },

        metadata: {
            type: mongoose.Schema.Types.Mixed,
            default: Object.freeze({})
        }
    },
    {
        timestamps: true
    }
);

const SessionActivity = mongoose.model(
    "SessionActivity",
    sessionActivitySchema
);

export default SessionActivity;

