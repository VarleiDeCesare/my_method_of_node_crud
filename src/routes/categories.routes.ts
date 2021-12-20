import { Router } from 'express';
import { CategoryController } from '../controllers/CategoryController';

const categoriesRoutes = Router();

categoriesRoutes.get("/", new CategoryController().listAll)
categoriesRoutes.post("/", new CategoryController().create)
categoriesRoutes.delete("/:id", new CategoryController().delete)

export default categoriesRoutes;