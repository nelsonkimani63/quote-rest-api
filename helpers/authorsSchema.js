const joi = require("joi")

const authorsSchema = joi.object({
    name:joi.string().required().min(3).max(245),
})

module.exports = authorsSchema