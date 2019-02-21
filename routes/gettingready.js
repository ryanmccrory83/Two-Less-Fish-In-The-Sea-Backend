const express = require('express')
const router = express.Router()

const queries = require('../database/queries')

router.get('/', (request, response, next) => {
    queries
        .listGettingReadyPics()
        .then(gettingready => {
            response.json({
                gettingready
            })
            console.log('this is gettingready route')
        })
        .catch(next)
})
router.get('/:id', (request, response, next) => {
    queries.getGettingReadyPics(request.params.id)
        .then(gettingready => {
            response.json({
                gettingready
            });
        })
        .catch(next);
});

module.exports = router