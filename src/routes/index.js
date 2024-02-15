import {Router} from 'express';
const router = Router();

import userRoute from './user.js';
import postRoute from './posts.js'

// routes user
router.use('/users', userRoute);
router.use('/posts', postRoute)

export default router;