const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log('estoy en endpoint category')
  res.json(['JavaScript', 'React', 'Redux', 'Express'])
})

module.exports = router