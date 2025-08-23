import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/jwt';
import User from '../schema/user.schema';

export const loginUser = async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = generateToken({ userId: user._id, username: user.username });

    // Set cookie
    res.cookie('token', token, {
      httpOnly: true,        // Protects from XSS
      secure: process.env.NODE_ENV === 'production', // only https in prod
      sameSite: 'strict',    // CSRF protection
      maxAge: 3600000        // 1 hour in ms
    });

    res.status(200).json({ message: 'Login successful' });
  } catch (err: any) {
    res.status(500).json({ message: 'Login error', error: err.message });
  }
};
