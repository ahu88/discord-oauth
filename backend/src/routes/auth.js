//takes care of all routes that deal with authentication
//log user in, get user details

const router = require("express").Router();
const passport = require("passport");

//hit discord app website to authenticate
//api/auth/discord
router.get("/discord", passport.authenticate("discord")); //uses discord strategy

//when successfully auth, redirect to this url
router.get(
  "/discord/redirect",
  passport.authenticate("discord"),
  (req, res) => {
    res.redirect("http://localhost:3000/menu"); //redirect to REACT front-end page -> in production, redirect to actual domain page
  }
);

//if logged in we send back user object (from database), else send error
router.get("/", (req, res) => {
  //passport connects User object to req
  if (req.user) {
    //if user session exists
    res.json(req.user);
  } else {
    res.status(401).send({ msg: "Unauthorized" });
  }
});

module.exports = router;
