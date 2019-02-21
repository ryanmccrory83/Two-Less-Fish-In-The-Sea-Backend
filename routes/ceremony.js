const express = require('express')
const router = express.Router()

const queries = require('../database/queries')

router.get('/ceremony', (request, response, next) => {
    queries
        .listTheCeremonyPics()
        .then(ceremony => {
            response.json({
                ceremony
            })
            console.log('this is ceremony route')
        })
        .catch(next)
})
router.get('/:id', (request, response, next) => {
    queries.getTheCeremonyPics(request.params.id)
        .then(ceremony => {
            response.json({
                ceremony
            });
        })
        .catch(next);
});

module.exports = router