import { Router } from 'express';
import { tvController } from '../controllers/tvController';

const router = Router();

router.get('/on-the-air', tvController.getOnTheAir);
router.get('/top-rated', tvController.getTopRated);
router.get('/popular', tvController.getPopular);
router.get('/airing-today', tvController.getAiringToday);

export default router; 