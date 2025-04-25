const express = require('express')
const router = express.Router() 
const Sale = require('../models/Sale')

router.post('/', async(req, res)=>{
    try{    
        const { item, quantity, price } = req.body;
        const sale = new Sale({
            item, quantity, price
        })
        const savedSale = await sale.save()
        res.status(201).json(savedSale)

    } catch(error) {
        res.status(400).json({ error : error.message})
    }
})

router.get('/', async(req,res)=>{
    try{
        const sales = await Sale.find();
        res.status(200).json(sales)
    } catch(error) {
        res.status(500).json({ error : error.message})
    }
})

    router.get('/:id', async(req,res)=>{
        try{
            const sale = await Sale.findById(req.params.id)
            if(!sale) {
                return res.status('400').json({ message : 'Sale not found...'})
            }
            res.status(200).json(sale)
        } catch(error) {
            res.status(500).json({ error: error.message})
        }
    })

router.put('/:id', async(req, res)=>{
    try {
        const { item, quantity, price } = req.body;
        const updatedSale = await Sale.findByIdAndUpdate(
            req.params.id,
            {item, quantity, price},
            {new : true}
        )
        if(!updatedSale){
            return res.status(404).json({ message : 'Sale not found... '})
        }
        res.status(200).json(updatedSale)
    } catch(error) {
        res.status(400).json({ error : error.message})
    }
})

router.delete('/:id', async(req, res)=>{
    try{    
        const sale = await Sale.findByIdAndDelete(req.params.id);
        if(!sale){
            return res.status(404).json({ messag : 'Sale not found...'})
        }
        res.status(200).json({ message : 'Sale is deleted successfully... '})

    } catch(error) {
        res.status(500).json({error : error.messgae})
    }
})

module.exports = router;