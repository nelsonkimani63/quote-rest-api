const express = require("express")
const router = express.Router();
const validateData = require("../helpers/validateData")
const quotesSchema = require("../helpers/quotesSchema")

const {
    getQuotes,
    createQuotes,
    getQuote,
    updateQuote,
    deleteQuote
    } = require("../controllers/quotesControllers")

router.get("/",getQuotes)
router.post("/",validateData(quotesSchema),createQuotes)
router.get("/:id",getQuote)
router.patch("/:id",validateData(quotesSchema),updateQuote)
router.delete("/:id",deleteQuote)

module.exports = router