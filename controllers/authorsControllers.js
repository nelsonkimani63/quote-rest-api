const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const getAuthors = async (req,res) =>{
    try{
        const authors = await prisma.author.findMany({
            include:{quote:true}
        })
        res.status(200).json(authors)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }   
}

const createAuthors = async (req,res) =>{
    try{
        const {name} = req.body
        const author = await prisma.author.create({
            data:{name}
        })
        res.status(200).json({message:"Author has been added.",author})

    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const getAuthor = async (req,res) =>{
    try{
        const author = await prisma.author.findUnique({
            where:{id:Number(req.params.id)},
            include:{quote:true}
        })
        if(author){
            res.status(200).json(author)
        }else{
            res.status(404).json({error:`Author with Id ${req.params.id} was not found.`})
        }
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const updateAuthor = async (req,res) =>{
    try{
        const author = await prisma.author.update({
            where:{id:Number(req.params.id)},
            data:req.body
        })
        if(author){
            res.status(200).json(author)
        }else{
            res.status(404).json({error:`Author with Id ${req.params.id} was not found.`})
        }
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const deleteAuthor = async (req,res) =>{
    try{
        const author = await prisma.author.delete({
            where:{id:Number(req.params.id)},
        })
        if(author){
            res.status(200).json(author)
        }else{
            res.status(404).json({error:`Author with Id ${req.params.id} was not found.`})
        }
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

module.exports = {getAuthors,createAuthors,getAuthor,updateAuthor,deleteAuthor}