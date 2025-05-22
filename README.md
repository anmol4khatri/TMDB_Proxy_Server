# TMDB Proxy Server

A proxy server for handling TMDB API requests for the Netflix GPT application.

## Features

- Secure Bearer token authentication
- Rate limiting
- CORS enabled
- Error handling
- TypeScript support

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- TMDB API access token

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   TMDB_ACCESS_TOKEN=your_tmdb_access_token_here
   TMDB_BASE_URL=https://api.themoviedb.org/3
   NODE_ENV=development
   PROXY_URL=http://your-proxy-url
   ```

## Development

To run the server in development mode:
```bash
npm run dev
```

## Production

To build and run the server in production mode:
```bash
npm run build
npm start
```

## API Endpoints

### Movies
- GET `/api/movies/now-playing` - Get currently playing movies
- GET `/api/movies/popular` - Get popular movies
- GET `/api/movies/top-rated` - Get top-rated movies
- GET `/api/movies/upcoming` - Get upcoming movies
- GET `/api/movies/:id/videos` - Get videos for a specific movie
- POST `/api/movies/search` - Search for movies

### TV Shows
- GET `/api/tv/on-the-air` - Get shows currently on air
- GET `/api/tv/top-rated` - Get top-rated shows
- GET `/api/tv/popular` - Get popular shows
- GET `/api/tv/airing-today` - Get shows airing today

## Security

- Bearer token authentication
- Rate limiting is implemented (100 requests per 15 minutes per IP)
- CORS is enabled
- Helmet.js is used for security headers 