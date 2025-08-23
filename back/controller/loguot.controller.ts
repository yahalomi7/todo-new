import { Request, Response } from 'express';

export const logoutUser = async (req: Request, res: Response): Promise<any> => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });
  res.status(200).json({ message: 'Logged out successfully' });
};
