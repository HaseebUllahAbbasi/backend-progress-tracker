const multer = require('multer');

exports.uploadPostImage = multer({
    storage: multer.diskStorage({
        destination: 'public/post-images/',
        filename: function (req, file, callback) {
            callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
        }
    }),
    limits: {
        fileSize: 200 * 1024 * 1024 // 20MB
    }
}).single('file');
