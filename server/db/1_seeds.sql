DROP TABLE IF EXISTS post
CREATE TABLE post (
id serial,
title varchar(100) NOT NULL,
pseudonym varchar(20),
bodyOfText varchar (600) NOT NULL
);
1:13
const {Client} = require('pg');
const client = new Client();
module.exports = client;
