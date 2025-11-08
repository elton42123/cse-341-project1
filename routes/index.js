const router = require('express').Router();

router.get('/', (req, res) => {res.send('Welcome to the Contacts API');});
router.use('/users', require('./users'));

module.exports = router;