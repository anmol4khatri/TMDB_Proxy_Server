"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieController = void 0;
const tmdbService_1 = require("../services/tmdbService");
exports.movieController = {
    getNowPlaying: async (req, res) => {
        var _a, _b;
        try {
            const data = await tmdbService_1.tmdbService.getNowPlaying();
            res.json(data);
        }
        catch (error) {
            console.error('Controller Error - getNowPlaying:', error);
            res.status(((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 500).json({
                error: 'Failed to fetch now playing movies',
                details: ((_b = error.response) === null || _b === void 0 ? void 0 : _b.data) || error.message
            });
        }
    },
    getPopular: async (req, res) => {
        var _a, _b;
        try {
            const data = await tmdbService_1.tmdbService.getPopularMovies();
            res.json(data);
        }
        catch (error) {
            console.error('Controller Error - getPopular:', error);
            res.status(((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 500).json({
                error: 'Failed to fetch popular movies',
                details: ((_b = error.response) === null || _b === void 0 ? void 0 : _b.data) || error.message
            });
        }
    },
    getTopRated: async (req, res) => {
        var _a, _b;
        try {
            const data = await tmdbService_1.tmdbService.getTopRatedMovies();
            res.json(data);
        }
        catch (error) {
            console.error('Controller Error - getTopRated:', error);
            res.status(((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 500).json({
                error: 'Failed to fetch top rated movies',
                details: ((_b = error.response) === null || _b === void 0 ? void 0 : _b.data) || error.message
            });
        }
    },
    getUpcoming: async (req, res) => {
        var _a, _b;
        try {
            const data = await tmdbService_1.tmdbService.getUpcomingMovies();
            res.json(data);
        }
        catch (error) {
            console.error('Controller Error - getUpcoming:', error);
            res.status(((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 500).json({
                error: 'Failed to fetch upcoming movies',
                details: ((_b = error.response) === null || _b === void 0 ? void 0 : _b.data) || error.message
            });
        }
    },
    getVideos: async (req, res) => {
        var _a, _b;
        try {
            const { id } = req.params;
            const data = await tmdbService_1.tmdbService.getMovieVideos(id);
            res.json(data);
        }
        catch (error) {
            console.error('Controller Error - getVideos:', error);
            res.status(((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 500).json({
                error: 'Failed to fetch movie videos',
                details: ((_b = error.response) === null || _b === void 0 ? void 0 : _b.data) || error.message
            });
        }
    },
    search: async (req, res) => {
        var _a, _b;
        try {
            const { query } = req.body;
            if (!query) {
                return res.status(400).json({ error: 'Search query is required' });
            }
            const data = await tmdbService_1.tmdbService.searchMovies(query);
            res.json(data);
        }
        catch (error) {
            console.error('Controller Error - search:', error);
            res.status(((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 500).json({
                error: 'Failed to search movies',
                details: ((_b = error.response) === null || _b === void 0 ? void 0 : _b.data) || error.message
            });
        }
    },
};
