require('dotenv').config();
const jwt = require("jsonwebtoken");


const createCookieToken = async (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: '1hr' })
    res.send({ token })
  }

  module.exports = createCookieToken   