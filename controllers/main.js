exports.getHome = (req, res, next) => {
    res.status(404).render('main/index', {pageTitle: "Node.js Starter", path: '/'});
};
