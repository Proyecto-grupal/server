const express = require('express')
const router = express.Router()
const { getAll, getBest } = require('./controller')

router.get('/', (req, res) => {
  res.json(getAll())
})

router.get('/best/:qty', (req, res) => {
  res.json(getBest(req.params.qty))
})

module.exports = router
