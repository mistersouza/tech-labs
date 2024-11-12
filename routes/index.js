const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' })
})

router.get('/query', (request, response) => {
  const { name, age } = request.query
  response.json({
    user: `Name: ${name} and age: ${age}`
  })
})

router.get('/:profileId/:username', (request, response) => {
  const { profileId, username } = request.params

  response.render('profile', {
    profileId,
    username
  })
})

router.post('/post', (request, response) => {
    response.json({
    data: request.body
  })
})

module.exports = router
