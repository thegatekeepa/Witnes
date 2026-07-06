const express = require('express');
const witness = express();
witness.use(express.json());
const dotenv = require('dotenv');
dotenv.config();