import Session from "../sessions/session.model.js";
import sessionActivity from "./sessionActivities.model.js";
import generateActivityId from "../../utils/generateAID.js";
import { SESSION_EVENTS, SESSION_STATUS } from "../../utils/constants.js";
import ApiError from "../../utils/ApiError.js"; 


//SAS = Session Activity Service
const recordSAS = async ({
    sessionId,
    event,
    metadata,
    client
}) => {

    //find the session
    const session = await Session.findOne ({ 
        sessionId, 
        clientId: client._id.toString()
     });

    if(!session) {
        throw new ApiError(404, 
            "Session not found. Can't create session activity without a valid session."
        );
    }
    
    //confirm that session is active before recording activity
    if (session.sessionStatus !== SESSION_STATUS.active) {
        throw new ApiError(400, 
            "Can't record activity for a session that is not active."
        );
    }

    //create/generate activity Id
    const activityId = generateActivityId();

    //create session activity
    const activity = await sessionActivity.create({
        sessionId: session.sessionId,
        clientId: session.clientId, //._id -- check later if this is correct
        userId: session.userId,
        activityId,
        event,
        metadata
    });

    return {
        activityId: activity.activityId, 
        sessionId: activity.sessionId,
        event: activity.event,
        metadata: activity.metadata,
        createdAt: activity.createdAt
    };
};

//retrieve session activity history for a session

const getSessionActivityHistory = async ({sessionId, client}) => {
    const session = await Session.findOne({
    sessionId,
    clientId: client._id.toString()
    });

    if(!session) {
        throw new ApiError(404,
            "Session not found. Cannot retrieve session activity history without a valid session."
        );
    }

    const activities = await sessionActivity.find({
        sessionId: session.sessionId,
    }).sort({ createdAt: -1 }); //to sort by most recent first

    if(activities.length === 0) { 
        //no activities 
        }

    return {
        sessionId: session.sessionId,
        userId: session.userId,
        sessionStatus: session.sessionStatus,
        activities: activities.map(activity => ({ //map through activities to return only relevant fields
            activityId: activity.activityId,
            event: activity.event,
            metadata: activity.metadata,
            createdAt: activity.createdAt
        }))
    };
};



export { recordSAS, getSessionActivityHistory };
