const {PrismaClient} = require('@prisma/client')
const { default: axios } = require('axios')

const prisma = new PrismaClient()


class ArticleCronJob {

    static #newApiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`

    static async getDailyArticle(){
        const {data} = await axios.get(this.#newApiUrl)
        const articles = data.articles
        await Promise.all(articles.map(async(article) => {
                const exist = await prisma.article.findFirst({
                    where: {
                        title: article.title
                    }
                })
                const data = this.parseData(article)
                if (!exist && article.content){
                    await prisma.Article.create({
                        data
                    })
                }
            }))
    } 

    static parseData(article){
        return {
            publisher: article.source.name,
            author: article.author || "no author",
            title: article.title || "no title",
            description: article.description || "no description",
            url: article.url || "no url",
            imageUrl: article.urlToImage || "no image",
            publishedAt: article.publishedAt || "no published data",
            content: article.content || "no content"
        }
    }
}

class ArticleGetService {

    static async getLatestArticle(){
        return prisma.Article.findMany()
    }

    static async getById(id){
        return prisma.Article.findFirst({
            where:{
                id
            }
        })
    }

    static async getByDate(publishedAt){
        return prisma.Article.findMany({
            where:{
                publishedAt
            }
        })
    }

}


module.exports = {
    ArticleCronJob,
    ArticleGetService
}