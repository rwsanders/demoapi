var config = {};

config.app = {};

config.app.ipaddress = process.env.APP_IPADDRESS || '0.0.0.0';
config.app.port = process.env.PORT || '8080';

module.exports = config;
