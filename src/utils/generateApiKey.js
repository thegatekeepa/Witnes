import crypto from "crypto";

const newApiKey = () => {
    const randomKey = crypto.randomBytes(32).toString("hex");
    return `wst_live_${randomKey}`;
};

export default newApiKey;
