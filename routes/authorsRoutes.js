const express = require("express")
const router = express.Router();
const validateData = require("../helpers/validateData")
const authorsSchema = require("../helpers/authorsSchema")

const {
        getAuthors,
        createAuthors,
        getAuthor,
        updateAuthor,
        deleteAuthor
    } = require("../controllers/authorsControllers")

router.get("/",getAuthors)
router.post("/",validateData(authorsSchema),createAuthors)
router.get("/:id",getAuthor)
router.patch("/:id",validateData(authorsSchema),updateAuthor)
router.delete("/:id",deleteAuthor)

module.exports = router