import { Router } from 'express';
import { movieController } from '../controllers/movieController';

const router = Router();

router.get('/now-playing', movieController.getNowPlaying);
router.get('/popular', movieController.getPopular);
router.get('/top-rated', movieController.getTopRated);
router.get('/upcoming', movieController.getUpcoming);
router.get('/:id/videos', movieController.getVideos);
router.post('/search', movieController.search);

export default router; 