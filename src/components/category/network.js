const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log('estoy en endpoint category')
  res.send('estoy en endpoint category')
})

module.exports = router
