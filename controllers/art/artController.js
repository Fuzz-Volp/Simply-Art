const express = require("express");
const router = express.Router();

// Data Controller
const dateController = require("./dataController");
const viewController = require("./viewController");

// router.use((req, res, next) => {
//     // user session 
// })






/**
 * Art Routes
 */

// Index
router.get("/", dateController.index, viewController.index);
// New
// Delete
// Update
// Create
// Edit
// Show