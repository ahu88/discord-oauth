require("dotenv").config();
require("./strategies/discord");
const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const Store = require("connect-mongo")(session);

const app = express();
const PORT = process.env.PORT || 3002;
const routes = require("./routes"); //import index.js

mongoose.connect("mongodb://localhost/djsdashboard", {
  useNewUrlParse: true,
  useUnifiedTopology: true,
});

//to allow front end to make api calls to back end
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

//setup cookies and session to persist user
app.use(
  session({
    secret: "secret",
    cookie: {
      //cookies determine whether user is authorized
      maxAge: 60000 * 60 * 24,
    },
    resave: false,
    saveUninitialized: false,
    //session stores (connect-mongo) to store session data, save sessions in memory if server goes down (sensitive data)
    store: new Store({ mongooseConnection: mongoose.connection }),
  })
);

//setup passport
app.use(passport.initialize());
app.use(passport.session());

//register routes in index.js
app.use("/api", routes);

app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
