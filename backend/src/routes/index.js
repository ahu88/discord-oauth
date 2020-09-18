//register all other routes (auth, etc.)

const router = require('express').Router();
const auth = require('./auth'); //router imported from auth.js
const discord = require('./discord');

router.use('/auth', auth);
router.use('/discord', discord)

module.exports = router;