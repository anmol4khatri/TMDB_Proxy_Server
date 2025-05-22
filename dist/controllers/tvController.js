"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tvController = void 0;
const tmdbService_1 = require("../services/tmdbService");
exports.tvController = {
    getOnTheAir: async (req, res) => {
        try {
            const data = await tmdbService_1.tmdbService.getOnTheAirShows();
            res.json(data);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to fetch on the air shows' });
        }
    },
    getTopRated: async (req, res) => {
        try {
            const data = await tmdbService_1.tmdbService.getTopRatedShows();
            res.json(data);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to fetch top rated shows' });
        }
    },
    getPopular: async (req, res) => {
        try {
            const data = await tmdbService_1.tmdbService.getPopularShows();
            res.json(data);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to fetch popular shows' });
        }
    },
    getAiringToday: async (req, res) => {
        try {
            const data = await tmdbService_1.tmdbService.getAiringTodayShows();
            res.json(data);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to fetch airing today shows' });
        }
    },
};
