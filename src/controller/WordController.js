const { WordService } = require('../service/WordService')


const saveWords = (req, res) => {
    const { body } = req
    WordService.saveWords(body)
    res.send('save words')
}

module.exports = {
    saveWords
}