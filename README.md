# Task React Dashboard

A fully functional task management dashboard is a React + TypeScript frontend project with a fullstack backend built in Express.js, designed to manage tasks efficiently.

The app demonstrates modern frontend architecture, reusable components, context-driven state management, and API integration.

## Features

- **User Authentication** - Secure login and logout functionality
- **Task Management** - Create, read, update, and delete tasks
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Protected Routes** - Secure pages behind authentication
- **Type-Safe** - Full TypeScript support for better development experience
- **Modern UI** - Built with Tailwind CSS for a clean, modern interface
- **API integration** - React frontend + Express backend

## Prerequisites

- Node.js `22.12.0` or higher
- npm or yarn package manager

## Getting Started

### Installation

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Environment Variables

Create `.env` files in both frontend and backend directories with the following variables:

**Frontend (.env or .env.local):**

```
VITE_API_URL=http://localhost:5000
```

**Backend (.env):**

```
PORT=5000
NODE_ENV=development
```

### Running the Project

**Frontend:**

```bash
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:5173`

**Backend:**

```bash
cd backend
npm run dev
```

The backend will be available at `http://localhost:5000/tasks`

## Project Structure

```
task-react-app/
├── frontend/           # React + TypeScript frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── context/      # React Context (Auth, Tasks)
│   │   ├── hooks/        # Custom hooks
│   │   ├── layouts/      # Layout components
│   │   ├── pages/        # Page components
│   │   ├── routes/       # Routing logic
│   │   ├── services/     # API services
│   │   └── types/        # TypeScript types
│   └── vite.config.ts    # Vite configuration
├── backend/           # Node.js backend API
└── README.md
```

## Tech Stack

**Frontend:**

- React 18
- TypeScript
- Vite (build tool)
- React Router (routing)
- Axios
- Tailwind CSS (styling)
- ESLint (code linting)

**Backend:**

- Node.js
- Express.js, Node.js, CORS

## Available Scripts

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Backend

- `npm run dev` - Start development server with auto-reload (using nodemon)
- `npm start` - Start production server

## License

MIT
