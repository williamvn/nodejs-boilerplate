import { Request, Response } from 'express';

export const getSampleData = (req: Request, res: Response): void => {
    res.status(200).json({ message: { data: { this: { is: { some: "data", arr: [] } } } } });
};