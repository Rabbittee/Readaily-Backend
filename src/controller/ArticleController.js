const { ArticleCronJob, ArticleGetService } = require('../service/ArticleService')

const cronGetArticle = (req, res) => {
    ArticleCronJob.getDailyArticle()
    res.send('stuff is done')
}

const getArticles = async(req, res) => {
    let articles = await ArticleGetService.getLatestArticle()
    res.json({"articles": articles.slice(articles.length-5, articles.length)})
}

const getArticleById = async (req, res) => {
    const article = await ArticleGetService.getById(parseInt(req.params.id))
    if (article !== null){
        res.json(article)
    } else {
        res.status(404).json({message: "id of article not found"})
    }
}

const getArticlesByDate = async(req, res) => {
    const articles = await ArticleGetService.getArticlesByDate(new Date(req.params.publishedAt))
    if (articles !== null){
        res.json(articles)
    } else {
        res.status(404).json({message: "no articles found"})
    }
}

module.exports = {
    cronGetArticle,
    getArticleById,
    getArticlesByDate,
    getArticles
}