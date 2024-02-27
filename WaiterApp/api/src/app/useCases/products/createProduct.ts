import { Request, Response } from 'express';

export async function createProduct(req: Request, res: Response) {
  try {
    console.log(req.body);
  } catch (err) {
    res.sendStatus(500);
  }
}
