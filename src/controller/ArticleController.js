const { ArticleCronJob } = require('../service/ArticleService')

const cronGetArticle = (req, res) => {
    ArticleCronJob.getDailyArticle()
    res.send('stuff is done')
}



module.exports = {
    cronGetArticle
}