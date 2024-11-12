const express = require('express')
const router = express.Router()

const profiles = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
  },
  {
    id: 2,
    name: 'Jane Doe',
    age: 25,
    email: 'jane.doe@example.com'
  },
  {
    id: 3,
    name: 'Bob Smith',
    age: 35,
    email: 'bob.smith@example.com'
  }
]

router.get('/', (req, res) => {
  res.render('index', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' })
})

router.get('/query', (request, response) => {
  const { name, age } = request.query
  response.json({
    user: `Name: ${name} and age: ${age}`
  })
})

router.get('/:id', (request, response) => {
  const { id } = request.params

  if (id >= profiles.length || id < 0) {
    response.json({
      confirmation: 'fail',
      message: 'Profile does not exist'
    })
    return;
  }

  response.render('profile', {
    profile: profiles[id - 1]
  })
})

router.post('/post', (request, response) => {
    response.json({
    data: request.body
  })
})



module.exports = router
