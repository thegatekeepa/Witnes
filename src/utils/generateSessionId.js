import crypto from "crypto";

const generateSessionId = () => {
    const secret = crypto.randomBytes(9).toString("hex");

    const sessionId = `wstsid.${secret}`;

    return sessionId;
};

export default generateSessionId;