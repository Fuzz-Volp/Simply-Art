const apiController = {
    index(req, res, next) {
      res.json(res.locals.data.arts);
    },
    show(req, res, next) {
      res.json(res.locals.data.art);
    },
  };
  
  // We only need Index and Show because we are currently only ever showing a list of arts
  // Or we are showing a single art
  module.exports = apiController;

