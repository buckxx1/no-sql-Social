const router = require('express').Router();

//deconstruct the routes controller for thoughts

const {
    getAllThoughts,
    getThoughtById,
    updateThought,
    addThought,
    addReaction,
    removeReaction,
    removeThought
} = require('../../controllers/thought-controller')

router
    .route('/')
    .get(getAllThoughts);

router 
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought);

router
    .route('/:userId')
    .post(addThought);

router 
    .route('/:thoughtId/user/:userId')
    .delete(removeThought);

router
    .route('/:thoughtId/reactions')
    .post(addReaction)

router 
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router