const express = require('express')
const router = express.Router()
const networkCategory = require('../components/category/network')
const networkLesson = require('../components/lesson/network')


router.use('/category', networkCategory)
router.use('/lesson', networkLesson)


module.exports = router
