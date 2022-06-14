const multer = require('multer')



module.exports = (multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './public')
        },
        filename: (req, file, cb) => {
            cb(null, `background.${file.mimetype.substring(6, 10)}`)
        }
    }),
    fileFilter: (req, file, cb) => {
        const extensao = ['image/png', 'image/jpg', 'image/jpeg'].find(formatoAceito => formatoAceito == file.mimetype)

        if(extensao) {
            return cb(null, true)
        }

        return cb(null, false)
    }
}))