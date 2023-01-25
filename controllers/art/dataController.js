const Art = require("../../models/art")

const dataController = {
    index(req, res, next) {
        Art.find({}, (err, allArts) => {
            err ? res.status(404).send({ msg:err.message,}) : res.locals.data.arts = allArts; next()
        });
    },
}


module.exports = dataController;