import { Router } from 'express';
import { getArtists, createArtist } from '../controllers/artistsController';

const router = Router();

router.get('/', getArtists);
router.post('/', createArtist);

export default router;
