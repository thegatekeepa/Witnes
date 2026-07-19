import crypto from "crypto";

const newApiKey = () => {
    const randomKey = crypto.randomBytes(32).toString("hex");

    const apiKeyTag = randomKey.slice(0, 8);
    
    const apiKey = `wst_live_${apiKeyTag}.${randomKey}`;

    return {
        apiKey, 
        apiKeyTag
    };
};

export default newApiKey;
