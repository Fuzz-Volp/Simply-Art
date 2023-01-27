const RESOURCE_PATH = '/arts'
const viewController = {
  index(req, res, next){
    res.render('art/Index', res.locals.data)
  },
  show(req, res, next){
    res.render('art/Show', res.locals.data)
  },
  edit(req, res, next){
    res.render('art/Edit', res.locals.data)
  },
  newView(req, res, next){
    res.render('art/New')
  },
  redirectHome(req, res, next){
    res.redirect(RESOURCE_PATH)
  },
  redirectShow(req, res, next){
    res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  }
}

module.exports = viewController