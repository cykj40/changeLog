// src/middlewares/protect.ts
import { Request, Response, NextFunction } from 'express';

const protect = (req: Request, res: Response, next: NextFunction) => {
    // Middleware logic, for example, authentication
    const secret = req.headers['x-secret'];

    if (secret === 'doggyShart') {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden' });
    }
};

export default protect;
