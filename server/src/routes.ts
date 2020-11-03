import express from 'express'
import ClassesControllers from './controllers/ClassesControllers';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesControllers();
const connectionController = new ConnectionsController();


routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.post('/connections', connectionController.create);
routes.get('/connections', connectionController.index);


export default routes;