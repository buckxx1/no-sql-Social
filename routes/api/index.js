const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = ('./user-routes');

router.use('/users', userRoutes);
thoughtRoutes.use('/thoughts', thoughtRoutes);

module.exports = router;