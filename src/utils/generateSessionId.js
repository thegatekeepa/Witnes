import crypto from "crypto";

const generateSessionId = () => {
    const secret = crypto.randomBytes(18).toString("hex");

    const sessionId = `sid.${secret}`;

    return sessionId;
};

export default generateSessionId;