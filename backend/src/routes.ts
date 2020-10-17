import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import OrphanageConstroller from './controler/orphanagesController';

const routes = Router();
const upload = multer(uploadConfig );

routes.get('/orphanages', OrphanageConstroller.index);
routes.get('/orphanages/:id', OrphanageConstroller.show);
routes.post('/orphanages', upload.array('images'), OrphanageConstroller.create);


export default routes;