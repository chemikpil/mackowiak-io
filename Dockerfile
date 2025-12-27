# Build stage
FROM node:20-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./
COPY .npmrc ./

# Install dependencies
# MOTION_AUTH_TOKEN should be provided as a build argument or secret
ARG MOTION_AUTH_TOKEN
ENV MOTION_AUTH_TOKEN=${MOTION_AUTH_TOKEN}
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

# Copy package files for production dependencies
COPY package.json pnpm-lock.yaml ./
COPY .npmrc ./

# Install only production dependencies
# MOTION_AUTH_TOKEN should be provided as a build argument or secret
ARG MOTION_AUTH_TOKEN
ENV MOTION_AUTH_TOKEN=${MOTION_AUTH_TOKEN}
RUN pnpm install --frozen-lockfile --prod

# Copy built files from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public

# Expose port (fly.io uses PORT env variable)
EXPOSE 3000

# Start the Node.js server for Astro SSR
ENV HOST=0.0.0.0
ENV PORT=3000
CMD ["node", "./dist/server/entry.mjs"]
