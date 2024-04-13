import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";

<<<<<<< HEAD
export const userRoutes = () => {
  const router = Router();
  const controller = new CreateUserController();
=======
const createUserController = new CreateUserController()
>>>>>>> f28b19451c89bc7a61f6496eb6064f392d428c36

  router.post("/", controller.handle);

<<<<<<< HEAD
  return router;
};
=======
userRoutes.post("/", createUserController.handle)

export {userRoutes};
>>>>>>> f28b19451c89bc7a61f6496eb6064f392d428c36
