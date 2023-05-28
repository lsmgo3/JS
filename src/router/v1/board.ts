import BoardController from '../../controller/BoardController';

const boardController = new BoardController();



const BoardRoutes = [
  {
    path: '/',
    method: 'get',
    action: boardController.getAll,
    requiresAuth: true,
  },
  {
    path: '/:id',
    method: 'get',
    action: boardController.getOne,
  },
  {
    path: '/',
    method: 'post',
    action: boardController.create,
  },
  {
    path: '/:id',
    method: 'put',
    action: boardController.update,
  },
  {
    path: '/:id',
    method: 'delete',
    action: boardController.remove,
  },
];

export default BoardRoutes;
