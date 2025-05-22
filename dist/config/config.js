"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    port: process.env.PORT || 3000,
    tmdbAccessToken: process.env.TMDB_ACCESS_TOKEN,
    tmdbBaseUrl: process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3',
    nodeEnv: process.env.NODE_ENV || 'development'
};
