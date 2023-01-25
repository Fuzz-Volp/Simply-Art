const RESOURCE_PATH = "/arts"
const viewController = {
    index(req, res, next){
        res.render('art/Index', res.locals.data)
    },
}

module.exports = viewController;