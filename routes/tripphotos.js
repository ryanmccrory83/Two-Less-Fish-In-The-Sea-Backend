const express = require('express')
const router = express.Router()

const queries = require('../database/queries')

router.get('/tripphotos', (request, response, next) => {
    queries
        .listTripPhotos()
        .then(tripphotos => {
            response.json({
                tripphotos
            })
            console.log('this is tripphotos route')
        })
        .catch(next)
})

router.get('/:id', (request, response, next) => {
    queries.getTripPhotos(request.params.id)
        .then(tripphotos => {
            response.json({
                tripphotos
            });
        })
        .catch(next);
});

router.post('/tripphotos', (request, response, next) => {
    queries
        .createTripPhotos(request.body)
        .then(item => {
            response.status(201).json({
                item
            })
        })
        .catch(console.error)
})

module.exports = router