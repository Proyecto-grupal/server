const express = require('express')
const router = express.Router()
const { getAll } = require('./controller')

router.get('/', (req, res) => {
  console.log('endpoint lesson')
  res.json(getAll())
})

module.exports = router
