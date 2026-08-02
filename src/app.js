//app.js -- app is reffered to as wst (Witnes Session Tracker) in this project
import express from "express";  //import express
import helmet from "helmet";
import cors from "cors";
import apiRateLimiter from "./middleware/rateLimit.middleware.js";
//swagger import and config
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger.js";



const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(apiRateLimiter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//display app in browser 
app.get("/", (req, res) => {
  res.send(
    "Welcome to Witnes! This is the Session Tracker API."
);
});


import clRouter from "../src/modules/clients/client.route.js";
import sessRouter from "../src/modules/sessions/session.route.js";
import errorHandler from "./middleware/error.middleware.js";



app.use("/api/v1/client", clRouter);
app.use("/api/v1/sessions", sessRouter);



app.use(errorHandler);

export default app;
