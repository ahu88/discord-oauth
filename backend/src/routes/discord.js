//api/discord
//get guilds

const router = require("express").Router();
const User = require("../database/schemas/User");

router.get("/guilds", async (req, res) => {
  const user = await User.findOne({ discordId: req.user.discordId });
  if (user) {
    const userGuilds = user.get("guilds");
    res.send(userGuilds);
  } else {
    return res.status(401).send({ msg: "Unauthorized" });
  }
});

module.exports = router;
