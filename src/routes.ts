import express from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import PointsController from './controllers/pointsController'
import ItensController from './controllers/itensController'

const routes = express.Router()
const upload = multer(multerConfig)

routes.use(express.json())

const pointsController = new PointsController()
const itensController = new ItensController()


routes.get('/itens', itensController.index )
routes.get('/points/:id', pointsController.show)
routes.get('/points', pointsController.index)
routes.post('/points', upload.single('image'), pointsController.create)



export default routes