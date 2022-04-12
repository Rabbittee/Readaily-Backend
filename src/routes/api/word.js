const express = require('express')

const router = express.Router()

const WordController = require('../../controller/WordController')


router.post('/create', WordController.saveWords)


module.exports = router