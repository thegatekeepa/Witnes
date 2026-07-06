const wst = require("./app"); //import app( wst ) from app.js
const dotenv = require("dotenv");  //import dotenv
const dbConnect = require("./config/db"); //import dbConnect function from db.js

dotenv.config(); //configure dotenv to load environment variables from .env file
dbConnect(); //connect to MongoDB using the dbConnect function



const PORT = process.env.WST_PORT || 2110;
  wst.listen(PORT, () => {
    console.log(
        `Witnes Server is now live on ${PORT}`
    );
  });