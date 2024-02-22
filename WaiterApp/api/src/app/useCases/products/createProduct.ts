import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;

    const category = await Product.create({ icon, name });
    console.log(category);
    res.status(201).json(category);
  } catch (err) {
    res.sendStatus(500);
  }
}
