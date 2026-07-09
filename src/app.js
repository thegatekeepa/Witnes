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
//const userRouter = require("./src/routes/user.routes");
//const deliRouter = require("./src/routes/delivery.routes");
//const prodRouter = require("./src/routes/proD.routes");
//const dhRouter = require("./src/routes/deliveryHistory.routes");
import errorHandler from "./middleware/error.middleware.js";

app.use("/api/v1/client", clRouter);
//wst.use("/api/getlistof", userRouter);
//wst.use("/api/get", userRouter);
//wst.use("/api/profile/update", userRouter);
//wst.use("/api/profile", userRouter);
//wst.use("/api/delivery", deliRouter);
//wst.use("/api/update", deliRouter);
//wst.use("/api/proof/delivery", prodRouter);
//wst.use("/api/history/delivery", dhRouter);
app.use(errorHandler);

export default app;
