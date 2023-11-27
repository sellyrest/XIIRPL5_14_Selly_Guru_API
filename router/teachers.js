const express = require('express')
const router = express.Router()

const teachercontroller = require('../controllers/teacher')

router.get('/teachers', teachercontroller.index)

  router.get('/teacher/:id', teachercontroller.show)

  router.post('/teacher', teachercontroller.store)

  router.put('/teacher/:id', teachercontroller.update)


  router.delete('/teacher/:id', teachercontroller.delete)

  module.exports = router