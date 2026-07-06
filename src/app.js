//app.js -- app is reffered to as wst (Witnes Session Tracker) in this project
const express = require("express");  //import express
const wst = express();
wst.use(express.json());

//display app in browser 
wst.get("/", (req, res) => {
  res.send(
    "Hey There! Thank you for using Witnes, the Session Tracker API."
);
});





//const authRouter = require("./src/routes/auth.routes");
//const userRouter = require("./src/routes/user.routes");
//const deliRouter = require("./src/routes/delivery.routes");
//const prodRouter = require("./src/routes/proD.routes");
//const dhRouter = require("./src/routes/deliveryHistory.routes");

//wst.use("/api/user", authRouter);
//wst.use("/api/getlistof", userRouter);
//wst.use("/api/get", userRouter);
//wst.use("/api/profile/update", userRouter);
//wst.use("/api/profile", userRouter);

//wst.use("/api/delivery", deliRouter);
//wst.use("/api/update", deliRouter);
//wst.use("/api/proof/delivery", prodRouter);
//wst.use("/api/history/delivery", dhRouter);

module.exports = wst;
