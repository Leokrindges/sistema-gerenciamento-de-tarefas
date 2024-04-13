import { Router } from "express";
import { userRoutes } from "./user.routes";
import express from "express";


const app = express();
app.use(express.json());

app.use("/users", userRoutes());
const routes = Router();

routes.use("/users", userRoutes);

export { routes };