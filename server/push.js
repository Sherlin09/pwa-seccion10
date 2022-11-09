const urlsafeBase64 = require('urlsafe-base64');
const vapid = require('./vapid.json');

module.exports.getKey = () => {
    return urlsafeBase64.decode(vapid.publicKey);
};

const suscripciones = [];

module.exports.addSubscription = (suscripcion) => {

    suscripciones.push(suscripcion);

};