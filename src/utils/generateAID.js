//generate activity id util for session activities   
import crypto from "crypto";

const generateActivityId = () => {
    const secret = crypto.randomBytes(9).toString("hex");

    const activityId = `wsaid.${secret}`;

    return activityId;
};

export default generateActivityId;