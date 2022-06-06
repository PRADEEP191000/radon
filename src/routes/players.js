const express = require('express');
const router = express.Router('../routes/player.js');

router.post('/first-api', function(req, res) {

    console.log(req.body)
    res.send({ data: players, status: true })
});

module.exports = router;