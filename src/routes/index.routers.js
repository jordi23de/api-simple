const {Router} =require('express')
const fs =require('fs')

 const router = Router();
 
 const PATH_ROUTES = __dirname;
 console.log(PATH_ROUTES)

 const removerExtension = (filename)=>{
    return filename.split('.').shift()
 }

 fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name = removerExtension(file)
    if(name!== 'index'){
        console.log(`Cargando ruta ${name}`)
        router.use(`/${name}`,require(`./${file}`))
    }
 })

module.exports= router