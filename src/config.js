// Backend API URL configuration
const config = {
    // Use environment variable if available, otherwise use the deployed backend URL
    API_URL: import.meta.env.VITE_APP_API || 'https://task-manager-backend-1-4w7r.onrender.com'
};

export default config; 
