import { Request, Response } from 'express';
import { tmdbService } from '../services/tmdbService';

export const tvController = {
    getOnTheAir: async (req: Request, res: Response) => {
        try {
            const data = await tmdbService.getOnTheAirShows();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch on the air shows' });
        }
    },

    getTopRated: async (req: Request, res: Response) => {
        try {
            const data = await tmdbService.getTopRatedShows();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch top rated shows' });
        }
    },

    getPopular: async (req: Request, res: Response) => {
        try {
            const data = await tmdbService.getPopularShows();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch popular shows' });
        }
    },

    getAiringToday: async (req: Request, res: Response) => {
        try {
            const data = await tmdbService.getAiringTodayShows();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch airing today shows' });
        }
    },
}; 