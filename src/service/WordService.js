const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

class WordService {

    static async saveWords(data){
        
        const { articleId } = data
        const { wordList } = data
        try {
            const words = await this.saveFindWord(wordList, articleId)
            return [words, null]
        } catch(error){
            return [null, error]
        }
    }

    static async saveFindWord(wordList, articleId){

        return Promise.all(wordList.map(async(word) => {
                            let wordExist = await this.checkWordExist(word, articleId)
                            if (!wordExist){
                                return this.createWord(word, articleId)
                            } else {
                                return wordExist
                            }

                        }))
    }

    static async checkWordExist(word, articleId){
        return prisma.Word.findFirst({ where: {
                word: word.word,
                articleId
            }
        })
    }

    static async createWord(word, articleId){
        return prisma.Word.create({
                data:{
                    word: word.word,
                    articleId: articleId,
                    definition: word.definition 
                }
            })

    }

}


module.exports = {
    WordService
}