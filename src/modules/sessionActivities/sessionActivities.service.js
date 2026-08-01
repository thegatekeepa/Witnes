import Session from "../sessions/session.model.js";
import sessionActivities from "../sessionActivities/sessionActivities.model.js";
import generateActivityId from "../../utils/generateAID.js";
import { SESSION_EVENTS } from "../../utils/constants.js";
import ApiError from "../../utils/ApiError.js"; 
import dotenv from "dotenv";

//SAS = Session Activities Service
const recordSAS = async ({
    sessionId,
    event,
    metadata,
    client
}) => {

    //find the session
    const session = await Session.findOne ({ sessionId });

    if(!session) {
        throw new ApiError(404, 
            "Sessioon not found. Can't create session activity without a valid session."
        );
    }

    //create activity Id
    const activityId = generateActivityId();

    //create session activity
    const activity = await sessionActivities.create({
        sessionId: session.sessionId,
        clientId: client._id,
        userId: session.userId,
        //activityId,
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

export default recordSAS;
