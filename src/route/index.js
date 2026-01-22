const UserRoute = require('./UserRoute');

function route(app){
    app.use('/api/user', UserRoute);
}

module.exports = route;