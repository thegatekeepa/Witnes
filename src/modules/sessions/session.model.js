import mongoose from "mongoose";
import { SESSION_STATUS } from "../../utils/constants.js";
import Client from "../clients/client.model.js" //iported client because the terminal was throwing error "Client not defined in session model". 

const sessionSchema = new mongoose.Schema (
    {
        sessionId: {
            type: String,
            required: true, 
            unique: true, 
            index: true
        },

        clientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Client, 
            required: true
        },

        userId: {
            type: String,
            required: true
        }, 

        ipAddress: {
            type: String,
            required: true
        },
        
        userAgent: { 
            type: String, 
            required: true
         },

        sessionStatus: {
            type: String,
            enum: Object.values(SESSION_STATUS),
            default: SESSION_STATUS.active
        },

        revokedAt: { 
            type: Date, 
            default: null
        },

        expiresAt: {
            type: Date, 
            default: null
        },
}, 
{
    timestamps: true
}
);

const Session = mongoose.model("Session", sessionSchema);
export default Session;
