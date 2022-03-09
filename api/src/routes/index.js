const { Router } = require('express');

const projectRoute = require('./projects');

const router = Router();

 
router.use('/project', projectRoute);
 

module.exports = router;
