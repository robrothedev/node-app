// src/jwt/validateJwt.js

/**
 * Middleware to verify a jwt token coming from the cookie in the request
 *
 * Uses the auth_mp_net cookie that is set at authenticate.macpractice.net
 *
 * Requires a public key which is fetched and stored as a file
 *
 * @see getPublicKey.js
 * @see https://github.com/auth0/node-jsonwebtoken
 * @see https://authenticate.macpractice.net
 */
const jwt = require("jsonwebtoken");
const getPublicKey = require("./getPublicKey");

module.exports = async (req, res, next) => {
  if (req.path == "/login") return next();
  let token = req.cookies.auth_mp_net;

  if (!token) token = req.headers.authorization;
  if (!token) return res.status(401).json("No token");
  let publicKey = await getPublicKey();

  if (!publicKey) next("No public key was found");

  // we have the public key so verify jwt
  jwt.verify(token, publicKey, function (err, decoded) {
    if (err || !decoded.user) return res.status(401).json("Invalid token");
    req.user = decoded.user;
    next();
  });
};