var config = {};

config.app = {};

config.app.ipaddress = process.env.APP_IPADDRESS || '0.0.0.0';
config.app.port = process.env.APP_PORT || '8080';

module.exports = config;
