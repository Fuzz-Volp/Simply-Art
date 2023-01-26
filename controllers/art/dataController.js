const Art = require("../../models/art")

const dataController = {
    index(req, res, next) {
        Art.find({}, (err, allArts) => {
            if (err) {
                res.status(404).send({
                    msg: err.message,
                });
            } else {
                res.locals.data.arts = allArts;
                next();                
            }
        });
    },
    create(req, res, next) {
        Art.create(req.boyd, (err, createdArt) => {
            if (err) {
                res.status(404).send({
                    msg: err.message,
                });
            } else {
                res.locals.data.art = createdArt;
                next();
            }
        })
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
            (err, updatedArt) => {
                if (err) {
                    res.status(404).send({
                        msg: err.message,
                    });
                } else {
                    res.locals.data.art = updatedArt;
                    next();
                }
            }
        );
    },
    destroy(req, res, next) {
        Art.findByIdAndRemove(req.params.id, (err, art) => {
            if (err) {
                res.status(404).send({
                    msg: err.message,
                });
            } else {
                res.locals.data.art = art;
                next();
            }
        });
    },
};


module.exports = dataController;