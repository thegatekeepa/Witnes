import app from "./app.js"; 
import dotenv from "dotenv";  
import dbConnect from "./config/db.js"; 
import expireSessionsJob from "./job/expireSessions.job.js"; 

dotenv.config(); //configure dotenv to load environment variables from .env file
dbConnect(); //connect to MongoDB using the dbConnect function



const PORT = process.env.WST_PORT || 2110;

try {
  app.listen(PORT, () => {
    console.log(
        `[Server] Witnes Server is now live on ${PORT}`
    );

    expireSessionsJob(); // Start the cron job 
  });
} catch (error) {
  console.error("Failed to connect to MongoDB", error);
  process.exit();
}

