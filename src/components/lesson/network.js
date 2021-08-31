const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log('estoy en endpoint lesson')
  res.json(['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4'])
})

module.exports = router
