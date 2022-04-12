const express = require('express')

const router = express.Router()

const ArticleController = require('../../controller/ArticleController')

router.get('/', ArticleController.cronGetArticle)

module.exports = router