import { Router } from "express";
import categoriesRoutes from "./categories.routes"
import videosRoutes from "./videos.routes";
const router = Router();

router.use("/categories", categoriesRoutes)
router.use("/videos", videosRoutes)

export { router }