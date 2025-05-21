#!/bin/bash

# Print colored output
function print_colored() {
  echo -e "\e[1;34m$1\e[0m"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
  echo "Docker is not installed. Please install Docker first."
  exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
  echo "Docker Compose is not installed. Please install Docker Compose first."
  exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
  echo "Node.js is not installed. Please install Node.js first."
  exit 1
fi

print_colored "=== Setting up Zyplow Demo ==="

# Install dependencies
print_colored "Installing dependencies..."
npm install

# Install and configure shadcn/ui
print_colored "Setting up shadcn/ui components..."
npx shadcn@latest init -y
npx shadcn@latest add card button avatar badge tabs alert progress

# Start Redis container
print_colored "Starting Redis container..."
docker-compose up -d

# Wait for Redis to start
print_colored "Waiting for Redis to start..."
sleep 5

# Run the development server
print_colored "Starting Next.js development server..."
npm run dev