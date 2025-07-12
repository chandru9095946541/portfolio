# Portfolio Application

## Overview

This is a portfolio website showcasing Survesh Chandru, a chatbot developer and ML engineer. The application features a modern, futuristic dark theme with glassmorphism effects and interactive components including a chatbot widget. Built using pure HTML, CSS, and JavaScript for simplicity and performance.

## System Architecture

### Frontend Architecture
- **Languages**: Pure HTML5, CSS3, and JavaScript (ES6+)
- **Styling**: Custom CSS with CSS variables for theming and glassmorphism effects
- **Fonts**: Google Fonts (Space Grotesk, Inter) and Font Awesome icons
- **Responsive Design**: CSS Grid and Flexbox with mobile-first approach
- **Animations**: CSS keyframes and transitions for smooth interactions

### No Backend Required
- **Static Website**: Simple HTML/CSS/JS structure for easy hosting
- **Client-side Only**: All interactions handled with vanilla JavaScript
- **External Links**: Direct mailto and social media links
- **Deployment**: Can be hosted on any static hosting service

## Key Components

### User Interface Components
- **Navigation**: Fixed navigation with smooth scrolling
- **Hero Section**: Animated landing section with call-to-action buttons
- **About Section**: Personal information and statistics
- **Skills Section**: Hexagonal skill grid with hover effects
- **Projects Section**: Portfolio project showcase
- **Achievements Section**: Professional accomplishments
- **Contact Section**: Interactive contact information
- **Chatbot Widget**: Floating chatbot interface with company selection

### Backend Services
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Modular route handling system
- **Error Handling**: Centralized error middleware
- **Request Logging**: API request/response logging with duration tracking

### Data Models
- **User Schema**: Basic user model with username/password fields
- **Validation**: Zod schema validation integrated with Drizzle
- **Type Safety**: Full TypeScript integration across frontend and backend

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Request Processing**: Express middleware handles authentication, logging, and routing
3. **Data Access**: Storage interface abstracts database operations
4. **Response Handling**: Structured JSON responses with error handling
5. **State Management**: Client-side state synchronized with server data

## External Dependencies

### Frontend Dependencies
- **UI Components**: Extensive Radix UI component library
- **Styling**: Tailwind CSS with PostCSS processing
- **Fonts**: Google Fonts (Space Grotesk, Inter) and Font Awesome icons
- **Animations**: CSS-based animations and transitions
- **Form Handling**: React Hook Form with Hookform Resolvers

### Backend Dependencies
- **Database**: Neon Database serverless PostgreSQL
- **Session Storage**: PostgreSQL session store
- **Development Tools**: tsx for TypeScript execution, esbuild for production builds
- **Date Handling**: date-fns library for date manipulation

### Development Tools
- **Package Manager**: npm with lockfile version 3
- **Type Checking**: TypeScript with strict configuration
- **Build System**: Vite with React plugin and runtime error overlay
- **Development Environment**: Replit with auto-scaling deployment

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20 with tsx for TypeScript execution
- **Hot Reload**: Vite development server with HMR
- **Database**: PostgreSQL 16 module in development
- **Port Configuration**: Application runs on port 5000

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: esbuild compiles TypeScript server to `dist/index.js`
- **Deployment**: Replit autoscale deployment target
- **Environment**: Production mode with optimized assets

### Database Management
- **Schema Sync**: `db:push` command for schema synchronization
- **Migrations**: Drizzle Kit handles migration generation and execution
- **Environment Variables**: DATABASE_URL required for PostgreSQL connection

## Changelog

```
Changelog:
- June 23, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```