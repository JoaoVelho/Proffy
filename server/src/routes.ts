import express from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

// Request Body: Dados para criação ou atualização de um registro [req.body]
// Route Params: Identificar qual recurso eu quero atualizar ou deletar (/users/:id) [req.params]
// Query Params: Paginação, filtros, ordenação (users?page=2&sort=name) [req.query]

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;
