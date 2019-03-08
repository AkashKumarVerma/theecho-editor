export default {
  API_URL: process.env.NODE_ENV === 'production' ? 'https://api.theecho.in/api/editor' : 'http://localhost:3000/api/editor',
}