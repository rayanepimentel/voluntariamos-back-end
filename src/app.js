const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const user = require("./routers/userRouter"); //chamando a rota do usuario
const auth = require("./routers/authRouter");
const events = require("./routers/eventRouter");
const db = require("./database/mongooseConnect");

app.use(bodyParser.json());

app.use("/usuario", user);
app.use("/auth", auth);
app.use("/evento", events);

db.connect();

module.exports = app; //exportando
