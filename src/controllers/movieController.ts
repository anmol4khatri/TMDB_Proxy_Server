import { Request, Response } from 'express';
import { tmdbService } from '../services/tmdbService';

export const movieController = {
    getNowPlaying: async (req: Request, res: Response) => {
        try {
            const data = await tmdbService.getNowPlaying();
            res.json(data);
        } catch (error: any) {
            console.error('Controller Error - getNowPlaying:', error);
            res.status(error.response?.status || 500).json({
                error: 'Failed to fetch now playing movies',
                details: error.response?.data || error.message
            });
        }
    },

    getPopular: async (req: Request, res: Response) => {
        try {
            const data = await tmdbService.getPopularMovies();
            res.json(data);
        } catch (error: any) {
            console.error('Controller Error - getPopular:', error);
            res.status(error.response?.status || 500).json({
                error: 'Failed to fetch popular movies',
                details: error.response?.data || error.message
            });
        }
    },

    getTopRated: async (req: Request, res: Response) => {
        try {
            const data = await tmdbService.getTopRatedMovies();
            res.json(data);
        } catch (error: any) {
            console.error('Controller Error - getTopRated:', error);
            res.status(error.response?.status || 500).json({
                error: 'Failed to fetch top rated movies',
                details: error.response?.data || error.message
            });
        }
    },

    getUpcoming: async (req: Request, res: Response) => {
        try {
            const data = await tmdbService.getUpcomingMovies();
            res.json(data);
        } catch (error: any) {
            console.error('Controller Error - getUpcoming:', error);
            res.status(error.response?.status || 500).json({
                error: 'Failed to fetch upcoming movies',
                details: error.response?.data || error.message
            });
        }
    },

    getVideos: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const data = await tmdbService.getMovieVideos(id);
            res.json(data);
        } catch (error: any) {
            console.error('Controller Error - getVideos:', error);
            res.status(error.response?.status || 500).json({
                error: 'Failed to fetch movie videos',
                details: error.response?.data || error.message
            });
        }
    },

    search: async (req: Request, res: Response) => {
        try {
            const { query } = req.body;
            if (!query) {
                return res.status(400).json({ error: 'Search query is required' });
            }
            const data = await tmdbService.searchMovies(query);
            res.json(data);
        } catch (error: any) {
            console.error('Controller Error - search:', error);
            res.status(error.response?.status || 500).json({
                error: 'Failed to search movies',
                details: error.response?.data || error.message
            });
        }
    },
}; 