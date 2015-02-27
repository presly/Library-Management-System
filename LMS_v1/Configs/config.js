module.exports = {
    development: {
        root: require('path').normalize(__dirname + '/..'),
        app: {
            name: 'LMS-api'
        },
        host: process.env.HOST || 'https://peaceful-bastion-8958.herokuapp.com',
        port: process.env.PORT || 80,
        dbURL: process.env.MONGODB_URL || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://peaceful-bastion-8958.herokuapp.com/:27017/LMS",
        sessionTimeout: 20 * 60 * 10, // defaults to 20 minutes, in ms (20 * 60 * 10)
        version: '0.0.1',
        URLPrefix: '/api/v1',
        WebURLPrefix: '/webapi/v1',
        security: {
            tokenLife: 3600
        }
    },
    production: {
        root: require('path').normalize(__dirname + '/..'),
        app: {
            name: 'salsa-api'
        },
        host: process.env.HOST || 'https://peaceful-bastion-8958.herokuapp.com/',
        port: process.env.PORT || 80,
        dbURL: process.env.MONGODB_URL || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://peaceful-bastion-8958.herokuapp.com/:27017/LMS",
        session_timeout: 20 * 60 * 10, // defaults to 20 minutes, in ms (20 * 60 * 10)
        version: '0.0.1',
        URLPrefix: '/api/v1',
        WebURLPrefix: '/webapi/v1',
        security: {
            tokenLife: 3600
        },
    }
};