const express = require('express')
const router = express.Router()

const queries = require('../database/queries')

router.get('/mrandmrs', (request, response, next) => {
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
    queries.getMrAndMrsPics(request.params.id)
        .then(mrandmrs => {
            response.json({
                mrandmrs
            });
        })
        .catch(next);
});

module.exports = router