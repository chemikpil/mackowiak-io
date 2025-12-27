# Build stage
FROM node:20-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the Astro site
RUN pnpm build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install serve globally to serve static files
RUN npm install -g serve

# Copy built files from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public

# Expose port (fly.io uses PORT env variable, but serve defaults to 3000)
EXPOSE 3000

# Start the server - serve from dist/client if it exists (SSR build), otherwise from dist (static build)
CMD ["sh", "-c", "if [ -d dist/client ]; then serve -s dist/client -l ${PORT:-3000}; else serve -s dist -l ${PORT:-3000}; fi"]

