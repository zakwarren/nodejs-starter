exports.getHome = (req, res, next) => {
    res.render('main/index', {pageTitle: "Node.js Starter", path: '/'});
};
