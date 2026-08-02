import bcrypt from "bcrypt";
import dotenv from "dotenv";
import Client from "../clients/client.model.js";
import newApiKey from "../../utils/generateApiKey.js";
import ApiError from "../../utils/apiError.js";

const registerClientService = async (clientData) => {
  //check if client exists
  //check parameter
  const clientExists = await Client.findOne({
    email: clientData.email
  });
  //check
  if(clientExists) {
    throw new ApiError( 
      409,
      "A client with the provided email already exists"
    )};
    //generate apiKey and create apiKeyTag
    const { apiKey, apiKeyTag } = newApiKey();

    //hash apiKey
    const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS);
    const apiKeyHash = await bcrypt.hash(apiKey, saltRounds);

    //save new client
    const client = await Client.create({
      clientName: clientData.clientName, 
      email: clientData.email, 
      companyName: clientData.companyName, 
      apiKeyTag,
      apiKeyHash
    });
    
    return {
      client: {
        id: client._id, 
        clientName: client.clientName, 
        email: client.email, 
        companyName: client.companyName, 
        clientStatus: client.clientStatus, 
        createdAt: client.createdAt
      }, 
      apiKey
    };
  };
  
  export default registerClientService;
