const express = require('express')

const router = express.Router()

const ArticleController = require('../../controller/ArticleController')

router.get('/cron', ArticleController.cronGetArticle)
router.get('/id/:id', ArticleController.getArticleById)
router.get('/date/:date', ArticleController.getArticlesByDate)
router.get('/', ArticleController.getArticles)

module.exports = router