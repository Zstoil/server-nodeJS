const config = {
    production: {
        PORT: `https://server-node-pyu323d9s-zstoil.vercel.app`,
        DB_URI: 'mongodb://127.0.0.1:27017/data',
        SECRET: 'SOMEPRODSECRET',
    },
    development: {
        PORT: 5000,
        DB_URI: 'mongodb://127.0.0.1:27017/data',
        SECRET: 'SOMEDEVSECRET',
    }
};

module.exports = config[process.env.node_env || 'development'];