import app from "./app.js"; //import app( wst ) from app.js
import dotenv from "dotenv";  //import dotenv
import dbConnect from "./config/db.js"; //import dbConnect function from db.js

dotenv.config(); //configure dotenv to load environment variables from .env file
dbConnect(); //connect to MongoDB using the dbConnect function



const PORT = process.env.WST_PORT || 2110;
try {
  app.listen(PORT, () => {
    console.log(
        `Witnes Server is now live on ${PORT}`
    );
  });
} catch (error) {
  console.error("Failed to connect to MongoDB", error);
  process.exit();
}
