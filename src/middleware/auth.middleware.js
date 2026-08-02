//authenticate client middleware
import bcrypt from "bcrypt";
import Client from "../modules/clients/client.model.js";
import ApiError from "../utils/apiError.js";
import { CLIENT_STATUS, API_KEY_PREFIX } from "../utils/constants.js";


const authenticateClient = async (req, res, next) => {
    try {
        const apiKey = req.header("x-api-key");
        //check the apiKey exists
        if(!apiKey) {
            throw new ApiError(
                401, 
                "API Key is required to continue"
    );
}
        //split
        const parts = apiKey.split(".");

        //valiate API key format
        if(parts.length !== 2) {
            throw new ApiError(
                401, 
                "Invalid API Key Format"
    );
}
        //extract the key tag or api id
        const apiKeyTag = parts[0].replace(
            API_KEY_PREFIX, 
            "");

        //find the client
        const client = await Client.findOne({
            apiKeyTag
});

        //verify the API key
        const isValid = await bcrypt.compare(
            apiKey,
            client.apiKeyHash
);
        if(!isValid) {
            throw new ApiError(
                401, 
                "Invalid API Key."
    );
}

        //check client account's status
        if(
            client.clientStatus !== CLIENT_STATUS.active
    ) {
        throw new ApiError(
            403, 
            "Client Account is Inactive."
    );
}

        //update client's usage
        client.lastUsedAt = new Date();

        await client.save();

        req.client = client;

next();
    } catch (error) {
        next(error)
    }
};

export default authenticateClient;
