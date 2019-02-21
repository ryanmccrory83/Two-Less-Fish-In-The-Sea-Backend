const express = require('express')
const router = express.Router()

const queries = require('../database/queries')

router.get('/', (request, response, next) => {
    queries
        .listBeforeTheCeremonyPics()
        .then(beforetheceremony => {
            response.json({
                beforetheceremony
            })
            console.log('this is beforetheceremony route')
        })
        .catch(next)
})
router.get('/:id', (request, response, next) => {
    queries.getBeforeTheCeremonyPics(request.params.id)
        .then(beforetheceremony => {
            response.json({
                beforetheceremony
            });
        })
        .catch(next);
});

module.exports = router