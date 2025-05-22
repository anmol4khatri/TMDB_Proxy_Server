import axios from 'axios';
import { config } from '../config/config';
import { HttpsProxyAgent } from 'https-proxy-agent';

// Optionally use a proxy if provided in the environment
const agent = process.env.PROXY_URL ? new HttpsProxyAgent(process.env.PROXY_URL) : undefined;

const tmdbApi = axios.create({
    baseURL: config.tmdbBaseUrl,
    headers: {
        'Authorization': `Bearer ${config.tmdbAccessToken}`,
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    },
    httpsAgent: agent,
});

// Add response interceptor for debugging
tmdbApi.interceptors.response.use(
    response => response,
    error => {
        console.error('TMDB API Error:', {
            status: error.response?.status,
            statusText: error.response?.statusText,
            data: error.response?.data,
            config: {
                url: error.config?.url,
                method: error.config?.method,
                headers: error.config?.headers
            }
        });
        return Promise.reject(error);
    }
);

export const tmdbService = {
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
        } catch (error) {
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
        } catch (error) {
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
        } catch (error) {
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
        } catch (error) {
            console.error('Error in getUpcomingMovies:', error);
            throw error;
        }
    },

    getMovieVideos: async (movieId: string) => {
        try {
            const response = await tmdbApi.get(`/movie/${movieId}/videos`, {
                params: {
                    language: 'en-US'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error in getMovieVideos:', error);
            throw error;
        }
    },

    searchMovies: async (query: string) => {
        try {
            const response = await tmdbApi.get('/search/movie', {
                params: {
                    query,
                    language: 'en-US',
                    region: 'US'
                },
            });
            return response.data;
        } catch (error) {
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
        } catch (error) {
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
        } catch (error) {
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
        } catch (error) {
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
        } catch (error) {
            console.error('Error in getAiringTodayShows:', error);
            throw error;
        }
    },
}; 