const multer = require('multer')

const files = multer.diskStorage({
    destination: function(req, file, cb){
        const pathStorage = `${__dirname}/../00files`;
        cb(null, pathStorage);
    },
    filename: function(req, file, cb){
        const ext = file.originalname.split('.').pop();
        const filename = `prueba-${Date.now()}.${ext}`;
        cb(null,filename)
    }
})

const uploadMiddleware = multer({storage:files});

module.exports= uploadMiddleware