'use strict';

const jwtService = require("./Service/JwtService")
const dotenv = require('dotenv');
dotenv.config();

const token = jwtService.generateToken({info: "jwt example"})
console.info("token : " + token)

const jwt = jwtService.verifyToken(token)
console.info(jwt)
