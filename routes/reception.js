const express = require('express')
const router = express.Router()

const queries = require('../database/queries')

router.get('/', (request, response, next) => {
    queries
        .listMrAndMrsPics()
        .then(mrandmrs => {
            response.json({
                mrandmrs
            })
            console.log('this is mrandmrs route')
        })
        .catch(next)
})
router.get('/:id', (request, response, next) => {
    queries.getReceiptionPics(request.params.id)
        .then(reception => {
            response.json({
                reception
            });
        })
        .catch(next);
});

module.exports = router