import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const jwt_secret = process.env.JWT_SECRET ;

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token; 

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, jwt_secret as string);
    (req as any).user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};
