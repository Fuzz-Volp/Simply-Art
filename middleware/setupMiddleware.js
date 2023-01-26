const methodOveride = require("method-override");
const morgan = require("morgan");
// const sessions = require("express-session");
// const MongoStore = require("connect-mongo");
const express = require("express");

const setupMiddleware = (app) => {
    app.use(morgan("tiny")); //logging

    // Allow express to use urlencoded
    app.use(express.urlencoded({ extended: true}));
    app.use(express.json());

    // Add sessions here when ready. 
};


module.exports = setupMiddleware;