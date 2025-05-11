# Task Manager Application

A full-stack task management application built with React, Node.js,Express.js and MongoDB. This application allows users to create, read, update, and delete tasks with a clean and intuitive user interface.

## Features

- User authentication and authorization
- Create, read, update, and delete tasks
- Responsive design with Tailwind CSS
- Real-time task updates
- Secure API endpoints
- Modern UI/UX

## Tech Stack

### Frontend
- React.js
- Vite
- Axios for API calls
- Tailwind CSS for styling
- React Router for navigation

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for authentication

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

### 2. Frontend Setup

```bash
cd frontend/task-manager
npm install
```

Create a `.env` file in the frontend directory:
```
VITE_API_URL=http://localhost:8000
```

### 3. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Running the Application

#### Development Mode

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. Start the frontend development server:
```bash
cd frontend/task-manager
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:8000

## Deployment

### Frontend Deployment (Vercel)

1. Create a Vercel account at https://vercel.com
2. Install Vercel CLI:
```bash
npm install -g vercel
```

3. Deploy the frontend:
```bash
cd frontend/task-manager
vercel
```

### Backend Deployment (Render)

1. Create a Render account at https://render.com
2. Create a new Web Service
3. Connect your GitHub repository
4. Configure the following:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Add environment variables from your `.env` file

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=your_backend_api_url
```

### Backend (.env)
```
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email your-email@example.com or open an issue in the GitHub repository.
