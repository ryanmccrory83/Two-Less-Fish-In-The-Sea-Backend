const database = require('./database-connection')

module.exports = {
    listGettingReadyPics() {
        return database('gettingready')
    },
    getGettingReadyPics(id) {
        return database('gettingready').select('*').where('id', id).first();
    },
    listBeforeTheCeremonyPics() {
        return database('beforetheceremony')
    },
    getBeforeTheCeremonyPics(id) {
        return database('beforetheceremony').select('*').where('id', id).first();
    },
    listTheCeremonyPics() {
        return database('ceremony')
    },
    getTheCeremonyPics(id) {
        return database('ceremony').select('*').where('id', id).first();
    },
    listMrAndMrsPics() {
        return database('mrandmrs')
    },
    getMrAndMrsPics(id) {
        return database('mrandmrs').select('*').where('id', id).first();
    },
    listReceptionPics() {
        return database('reception')
    },
    getReceiptionPics(id) {
        return database('reception').select('*').where('id', id).first();
    },
    listTripPhotos() {
        return database('tripphotos')
    },
    getTripPhotos(id) {
        return database('tripphotos').select('*').where('id', id).first();
    },
    createTripPhotos(tripphotos) {
        return database('tripphotos')
            .insert(tripphotos)
            .return('*')
            .then(record => record[0])
    }
}