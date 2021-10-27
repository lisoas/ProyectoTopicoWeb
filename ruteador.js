const express = require("express");
const router = express.Router();

router.get('/productos/:id', (req, res)=> {
    let id = req.params.id;
    let prod = obtenerProducto(id); 
    res.status(200).json(prod);
});
router.get('/productos', (req, res)=> {
    let prods = obtenerProductos(); 
    res.status(200).json(prods);
});

router.post('/producto/', (req, res)=> {
    let p = req.body;
    let prod = insertarProducto(p); 
    res.status(200).json(prod);
});

router.get('/consumidor/:id', (req, res)=> {
    let id = req.params.id;
    let prod = obtenerConsumidor(id); 
    res.status(200).json(cons);
});

router.get('/supermercado/:id', (req, res)=> {
    let id = req.params.id;
    let prod = obtenerSupermercado(id); 
    res.status(200).json(superm);
});

module.exports = router;