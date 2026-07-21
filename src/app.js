//app.js -- app is reffered to as wst (Witnes Session Tracker) in this project
import express from "express";  //import express
const app = express();
app.use(express.json());

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
