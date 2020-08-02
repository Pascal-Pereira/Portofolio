const portofolioController = require('../controllers/portofolio.controller.js');
const router = require('express').Router();
const handleImageUpload = require('../middlewares/handleImageUpload')



router.get('/', portofolioController.findAll)
router.post('/post', handleImageUpload, portofolioController.create)
router.post('/photo', handleImageUpload, portofolioController.createPhoto)
router.patch('/patchBio/1', handleImageUpload, portofolioController.update);
router.delete('/delete/:id', handleImageUpload, portofolioController.delete);


module.exports = router;
