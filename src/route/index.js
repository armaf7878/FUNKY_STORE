const UserRoute = require('./UserRoute');
const CateRoute = require('./CategoryRoute');
const ProductRoute = require('./ProductRout');
const OrderRoute = require('./OrderRoute');
function route(app){
    app.use('/api/user', UserRoute);
    app.use('/api/category', CateRoute);
    app.use('/api/product', ProductRoute);
    app.use('/api/order', OrderRoute);
}

module.exports = route;