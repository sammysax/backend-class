import express from 'express';
import { getPopulation } from '../controller/populationController.js';

const router = express.Router();

router.get('/population', getPopulation);

export default router;