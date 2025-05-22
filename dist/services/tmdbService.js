"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tmdbService = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config/config");
const https_proxy_agent_1 = require("https-proxy-agent");
// Optionally use a proxy if provided in the environment
const agent = process.env.PROXY_URL ? new https_proxy_agent_1.HttpsProxyAgent(process.env.PROXY_URL) : undefined;
const tmdbApi = axios_1.default.create({
    baseURL: config_1.config.tmdbBaseUrl,
    headers: {
        'Authorization': `Bearer ${config_1.config.tmdbAccessToken}`,
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    },
    httpsAgent: agent,
});
// Add response interceptor for debugging
tmdbApi.interceptors.response.use(response => response, error => {
    var _a, _b, _c, _d, _e, _f;
    console.error('TMDB API Error:', {
        status: (_a = error.response) === null || _a === void 0 ? void 0 : _a.status,
        statusText: (_b = error.response) === null || _b === void 0 ? void 0 : _b.statusText,
        data: (_c = error.response) === null || _c === void 0 ? void 0 : _c.data,
        config: {
            url: (_d = error.config) === null || _d === void 0 ? void 0 : _d.url,
            method: (_e = error.config) === null || _e === void 0 ? void 0 : _e.method,
            headers: (_f = error.config) === null || _f === void 0 ? void 0 : _f.headers
        }
    });
    return Promise.reject(error);
});
exports.tmdbService = {
    // Movies endpoints
    getNowPlaying: async () => {
        try {
            const response = await tmdbApi.get('/movie/now_playing', {
                params: {
                    language: 'en-US',
                    region: 'US'
                }
            });
            return response.data;
        }
        catch (error) {
            console.error('Error in getNowPlaying:', error);
            throw error;
        }
    },
    getPopularMovies: async () => {
        try {
            const response = await tmdbApi.get('/movie/popular', {
                params: {
                    language: 'en-US',
                    region: 'US'
                }
            });
            return response.data;
        }
        catch (error) {
            console.error('Error in getPopularMovies:', error);
            throw error;
        }
    },
    getTopRatedMovies: async () => {
        try {
            const response = await tmdbApi.get('/movie/top_rated', {
                params: {
                    language: 'en-US',
                    region: 'US'
                }
            });
            return response.data;
        }
        catch (error) {
            console.error('Error in getTopRatedMovies:', error);
            throw error;
        }
    },
    getUpcomingMovies: async () => {
        try {
            const response = await tmdbApi.get('/movie/upcoming', {
                params: {
                    language: 'en-US',
                    region: 'US'
                }
            });
            return response.data;
        }
        catch (error) {
            console.error('Error in getUpcomingMovies:', error);
            throw error;
        }
    },
    getMovieVideos: async (movieId) => {
        try {
            const response = await tmdbApi.get(`/movie/${movieId}/videos`, {
                params: {
                    language: 'en-US'
                }
            });
            return response.data;
        }
        catch (error) {
            console.error('Error in getMovieVideos:', error);
            throw error;
        }
    },
    searchMovies: async (query) => {
        try {
            const response = await tmdbApi.get('/search/movie', {
                params: {
                    query,
                    language: 'en-US',
                    region: 'US'
                },
            });
            return response.data;
        }
        catch (error) {
            console.error('Error in searchMovies:', error);
            throw error;
        }
    },
    // TV Shows endpoints
    getOnTheAirShows: async () => {
        try {
            const response = await tmdbApi.get('/tv/on_the_air', {
                params: {
                    language: 'en-US',
                    region: 'US'
                }
            });
            return response.data;
        }
        catch (error) {
            console.error('Error in getOnTheAirShows:', error);
            throw error;
        }
    },
    getTopRatedShows: async () => {
        try {
            const response = await tmdbApi.get('/tv/top_rated', {
                params: {
                    language: 'en-US',
                    region: 'US'
                }
            });
            return response.data;
        }
        catch (error) {
            console.error('Error in getTopRatedShows:', error);
            throw error;
        }
    },
    getPopularShows: async () => {
        try {
            const response = await tmdbApi.get('/tv/popular', {
                params: {
                    language: 'en-US',
                    region: 'US'
                }
            });
            return response.data;
        }
        catch (error) {
            console.error('Error in getPopularShows:', error);
            throw error;
        }
    },
    getAiringTodayShows: async () => {
        try {
            const response = await tmdbApi.get('/tv/airing_today', {
                params: {
                    language: 'en-US',
                    region: 'US'
                }
            });
            return response.data;
        }
        catch (error) {
            console.error('Error in getAiringTodayShows:', error);
            throw error;
        }
    },
};
