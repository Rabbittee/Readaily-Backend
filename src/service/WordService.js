const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

class WordService {

    static async saveWords(wordList){
        
        const { words } = wordList
        await Promise.all(words.map(async(word) => {
            const wordExist = await prisma.Word.findFirst({
                where: {
                    word: word.word
                }
            })

            if (!wordExist){
                await prisma.Word.create({
                    data:{
                        word: word.word,
                        articleId: word.articleId,
                        definition: word.definition 
                    }
                })
            }

        }))
    }

}


module.exports = {
    WordService
}