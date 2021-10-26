const express = require('express')
const userController = require('./controllers/userController')
const sectorController = require('./controllers/sectorController')
const jobController = require('./controllers/jobController')

const router = express.Router()

router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getUser)
router.put('/user/', userController.createUser)
router.patch('/user/:id', userController.editUser)
router.delete('/user/:id', userController.deleteUser)


router.get('/sector', sectorController.getSectors)
router.get('/sector/:id', sectorController.getSector)
router.put('/sector/', sectorController.createSector)
router.patch('/sector/', sectorController.editSector)
router.delete('/sector/', sectorController.deleteSector)


router.get('/position', jobController.getPosition)
router.get('/position/:id', jobController.getPosition)
router.put('/position/', jobController.createPosition)
router.patch('/position/:id', jobController.editPosition)
router.delete('/position/:id', jobController.deletePosition)

module.exports = router