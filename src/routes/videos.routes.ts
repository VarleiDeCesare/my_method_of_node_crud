import { Router } from 'express';
import { VideoController } from '../controllers/VideoController';

const videosRoutes = Router();

videosRoutes.get("/", new VideoController().listAll)
videosRoutes.post("/", new VideoController().create)

export default videosRoutes;