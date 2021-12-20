import { getRepository } from "typeorm";
import { Video } from "../entities/Video";
import { Response, Request } from "express"
import { Category } from "../entities/Category";


export class VideoController {

    async listAll(request: Request, response: Response): Promise<Response> {
        const repo = getRepository(Video);
        const videos = await repo.find({
            relations: ['category']
        });
        return response.status(200).json(videos);
    }

    async create(request: Request, response: Response): Promise<Response> {
        const repo = getRepository(Video);
        const repoCategory = getRepository(Category);
        const { name, description, duration, category_id } = request.body;

        if (await repo.findOne({ name })) {
            return response.status(400).json({ error: "Video already exists" })
        }

        if (!await repoCategory.findOne(category_id)) {
            return response.status(400).json({ error: "Category does not exists!" })
        }

        const data = repo.create({ name, description, duration, category_id })

        await repo.save(data);

        return response.status(200).json(data);
    }
}