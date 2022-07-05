const joi = require("joi")

const quotesSchema = joi.object({
    text:joi.string().required().min(5).max(245),
    authorId:joi.number().required().min(1)
})

module.exports = quotesSchema