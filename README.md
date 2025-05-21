# Zyplow Demo - Redis Caching with Next.js

This application demonstrates the implementation of Redis caching with Next.js to enhance performance and scalability. It was created as part of the Frontend & Scalability Intern application exercise.

## Features

- **Server-Side Rendering (SSR)** with Redis caching
- **Client-Side Rendering (CSR)** for comparison
- Performance metrics display on each page
- Responsive UI built with Tailwind CSS
- Docker integration for Redis

## Tech Stack

- **Next.js 15** - React framework
- **Redis** - Caching solution
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **Docker** - Containerization
- **JSONPlaceholder API** - Public API for demo data

## Quick Start

### Prerequisites

- Node.js (v18+)
- Docker and Docker Compose
- npm or yarn

### Installation & Setup

The easiest way to get started is using the setup script:

```bash
# Make the setup script executable
cp .env.example .env

chmod +x src/scripts/setup.sh

# Run the setup script
./src/scripts/setup.sh
```

This script will:
1. Install dependencies
2. Start Redis using Docker Compose
3. Launch the Next.js development server

### Manual Setup

If you prefer to set up manually:

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start Redis container**
   ```bash
   docker-compose up -d
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/app` - Next.js pages and routes
- `/components` - Reusable UI components
- `/lib` - Utility functions (Redis client, API fetching)
- `/public` - Static assets
- `/scripts` - Setup and utility scripts

## Architecture Overview

### Data Flow

1. **Server-Side Rendering with Redis:**
   - Request comes to server
   - Server checks Redis cache for data
   - If found, returns cached data
   - If not found, fetches from API, caches in Redis, then returns
   - Page is rendered on server with data and sent to client

2. **Client-Side Rendering:**
   - Basic page structure is sent to browser
   - Browser executes JavaScript
   - JavaScript makes API request
   - Page is updated with received data

### Caching Strategy

- **TTL (Time-To-Live):** Cache entries expire after 1 hour (configurable in `.env`)
- **Cache Keys:** Based on API endpoint to ensure unique caching
- **Cache Invalidation:** Automatic via TTL, but can be manually cleared through API

## Performance Metrics

The application includes built-in performance tracking:

- **Without Caching:**
  - First API request: ~300-500ms
  - Server processing: ~20-50ms
  - Total page load: ~400-600ms

- **With Redis Caching:**
  - Cached data retrieval: ~5-20ms
  - Server processing: ~10-30ms
  - Total page load: ~100-200ms

This represents a **60-80% improvement** in data retrieval time when using Redis caching.

## Scaling Considerations

For scaling this application to handle thousands or millions of daily users: