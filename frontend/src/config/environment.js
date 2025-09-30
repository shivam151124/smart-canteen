// Environment configuration for Smart Canteen
// This file will be used to set proper API URLs based on environment

const config = {
  development: {
    API_URL: 'http://localhost:4000',
    BASE_URL: 'http://localhost:5173'
  },
  production: {
    API_URL: '', // Same domain in production
    BASE_URL: '' // Same domain in production
  }
};

const environment = import.meta.env.PROD ? 'production' : 'development';

export const API_URL = config[environment].API_URL;
export const BASE_URL = config[environment].BASE_URL;

export default config[environment];