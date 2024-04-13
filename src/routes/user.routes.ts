import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";

export const userRoutes = () => {
  const router = Router();
  const controller = new CreateUserController();

const createUserController = new CreateUserController()

  router.post("/", controller.handle);

  return router;
};
userRoutes.post("/", createUserController.handle)

export {userRoutes};
