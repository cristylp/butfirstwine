module.exports = app => {

    // Base URLS
    app.use('/api/wine', require('./wine.routes.js'))
    app.use('/api', require('./auth.routes.js'))
    app.use('/api/review', require('./review.routes.js'))

    
}