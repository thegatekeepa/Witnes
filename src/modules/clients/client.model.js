import mongoose from "mongoose";
import { CLIENT_STATUS } from "../../utils/constants.js";

const clientSchema = new mongoose.Schema (
    {
        clientName: {
            type: String,
            required: true, 
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true, 
            trim: true, 
            lowercase: true
        }, 

        companyName: {
            type: String,
            trim: true
        },
        
        apiKeyHash: { 
            type: String, 
            required: true
         },

         apiKeyTag: {
            type: String, 
            required: true, 
            unique: true, 
            index: true
         },

        clientStatus: {
            type: String,
            enum: Object.values(CLIENT_STATUS),
            default: CLIENT_STATUS.active
        },
        
        lastUsedAt: { 
            type: Date, 
            default: null 
        },
}, 
{
    timestamps: true
}
);

const Client = mongoose.model("Client", clientSchema);
export default Client;