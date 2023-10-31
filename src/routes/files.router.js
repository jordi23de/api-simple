const express =require('express')
const router = express.Router()
const uploadMiddleware =require('../utils/handleFiles.js')

router.post('/',uploadMiddleware.single('archivo'),(req, res)=>{
    res.send({a:1})
})

module.exports = router;
