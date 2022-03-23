DROP TABLE IF EXISTS post;

CREATE TABLE post (
id serial,
title varchar(100) NOT NULL,
pseudonym varchar(20) NOT NULL,
bodyOfText varchar (600) NOT NULL
);
