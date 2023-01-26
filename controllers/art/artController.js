const express = require("express");
const router = express.Router();

// Data Controller
const dataController = require("./dataController");
const viewController = require("./viewController");

// router.use((req, res, next) => {
//     // user session 
// })






/**
 * Art Routes
 */

// Index
router.get("/arts", dataController.index, viewController.index);
// New
router.get("/new", viewController.newView);
// Delete
router.delete("/:id", dataController.destroy, viewController.redirectShow);
// Update
router.put("/:id", dataController.update, viewController.redirectShow);
// Create
router.post("/", dataController.create, viewController.redirectHome);
// Edit
router.get("/:id/edit", dataController.show, viewController.edit);
// Show
router.get("/:id", dataController.show, viewController.show);

module.exports = router;