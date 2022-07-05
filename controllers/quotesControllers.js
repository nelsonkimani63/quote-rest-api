const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const getQuotes = async (req,res) =>{
    try{
        const quotes = await prisma.quote.findMany({
            include:{author:true}
        })
        res.status(200).json(quotes)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }   
}

const createQuotes = async (req,res) =>{
    try{
        const {text,authorId} = req.body
        const quote = await prisma.quote.create({
            data:{text,authorId}
        })
        res.status(200).json({message:"Quote has been added.",quote})

    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const getQuote = async (req,res) =>{
    try{
        const quote = await prisma.quote.findUnique({
            where:{id:NUmber(req.params.id)},
            include:{author:true}
        })
        if(quote){
            res.status(200).json(quote)
        }else{
            res.status(404).json({error:`Quote with Id ${req.params.id} was not found.`})
        }
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const updateQuote = async (req,res) =>{
    try{
        const quote = await prisma.quote.update({
            where:{id:NUmber(req.params.id)},
            data:req.body
        })
        if(quote){
            res.status(200).json(quote)
        }else{
            res.status(404).json({error:`Quote with Id ${req.params.id} was not found.`})
        }
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const deleteQuote = async (req,res) =>{
    try{
        const quote = await prisma.quote.delete({
            where:{id:NUmber(req.params.id)},
        })
        if(quote){
            res.status(200).json(quote)
        }else{
            res.status(404).json({error:`Quote with Id ${req.params.id} was not found.`})
        }
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

module.exports = {getQuotes,createQuotes,getQuote,updateQuote,deleteQuote}