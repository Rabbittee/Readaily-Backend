const { WordService } = require('../service/WordService')


const saveWords = async (req, res) => {

    const { body } = req
    const [words, error] = await WordService.saveWords(body)
    if (error === null){
        res.json(words)
    } else {
        res.status(404).json({"message": error.message })
    }

}

module.exports = {
    saveWords
}