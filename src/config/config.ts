import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    tmdbAccessToken: process.env.TMDB_ACCESS_TOKEN,
    tmdbBaseUrl: process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3',
    nodeEnv: process.env.NODE_ENV || 'development'
}; 