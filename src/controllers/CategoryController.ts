import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Category } from "../entities/Category";


export class CategoryController {

    async create(request: Request, response: Response): Promise<Response> {
        const category = getRepository(Category);
        const { name, description } = request.body;

        if (await category.findOne({ name })) {
            return response.status(400).json({ error: "Category already exists" })
        }

        const data = category.create({ name, description })

        await category.save(data);

        return response.status(200).json(data);
    }

    async listAll(request: Request, response: Response): Promise<Response> {
        const category = getRepository(Category);
        const categories = await category.find();


        return response.status(200).json(categories);
    }

    async delete(request: Request, response: Response): Promise<Response> {
        const category = getRepository(Category);
        const { id } = request.params;

        if (!await category.findOne(id)) {
            return response.status(400).json({ error: "Category not found" })
        }

        await category.delete(id);

        return response.status(200).send();
    }
}
