"use strict";

const { EventEmitter } = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("lunch");