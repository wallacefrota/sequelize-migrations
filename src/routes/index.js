import {Router} from 'express';
const router = Router();

import userRoute from './user.js';

// routes user
router.use('/users', userRoute);

export default router;