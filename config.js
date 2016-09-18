exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://localhost/hot-cold-actions' :
                            'mongodb://localhost/hot-cold-actions');
exports.PORT = process.env.PORT || 8080;
