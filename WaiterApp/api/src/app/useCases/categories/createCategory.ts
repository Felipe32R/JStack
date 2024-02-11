import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;

    const category = await Category.create({ icon, name });
    console.log(category);
    res.status(201).json(category);
  } catch (err) {
    res.sendStatus(500);
  }
}
