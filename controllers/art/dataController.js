const Art = require("../../models/art");

const dataController = {
  index(req, res, next) {
    Art.find({ username: req.session.username }, (error, allArts) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.arts = allArts;
        next();
      }
    });
  },
  create(req, res, next) {
    req.body.username = req.session.username;
    // Use Model to create Art Document
    Art.create(req.body, (error, createdArt) => {
      // Once created - respond to client
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.art = createdArt;
        next();
      }
    });
  },
  show(req, res, next) {
    Art.findById(req.params.id, (error, foundArt) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.art = foundArt;
        next();
      }
    });
  },
  update(req, res, next) {
    Art.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (error, updatedArt) => {
        if (error) {
          res.status(404).send({
            msg: error.message,
          });
        } else {
          res.locals.data.art = updatedArt;
          next();
        }
      }
    );
  },
  destroy(req, res, next) {
    Art.findByIdAndRemove(req.params.id, (error, art) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.art = art;
        next();
      }
    });
  },
};

module.exports = dataController;