const express = require('express');
const jwt = require('jsonwebtoken');

const { verifyToken } = require('./middlewares');

const router = express.Router();

router.post('/token', async (req, res) => {
  // const clientSecret = req.body;
  const token = jwt.sign({
    id: req.body.id,
    name: req.body.name,
  }, process.env.JWT_SECRET, {
    expiresIn: '1m', //1분
    issuer: 'nodebird',
  });
  return res.json({
    code: 200,
    message: '토큰이 발급되었습니다',
    token,
  });
});

router.get('/test', verifyToken, (req, res) => {
  res.json(req.decoded);
});

module.exports = router;