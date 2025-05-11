// Backend API URL configuration
const config = {
    // Use environment variable if available, otherwise use the deployed backend URL
    API_URL: process.env.REACT_APP_API_URL || 'https://task-manager-backend-1-4w7r.onrender.com'
};

export default config; 