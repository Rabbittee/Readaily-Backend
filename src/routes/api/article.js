const express = require('express')

const router = express.Router()

const ArticleController = require('../../controller/ArticleController')

router.get('/cron', ArticleController.cronGetArticle)
router.get('/id/:id', ArticleController.getArticle)
router.get('/date/:date', ArticleController.getArticlesByDate)

module.exports = router