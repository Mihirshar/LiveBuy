# LiveBuy Local

**The Global Livestream Shopping Portal Powered by Traveling Influencers**

LiveBuy Local is a next-generation global commerce platform where traveling influencers go LIVE from local markets around the world, letting viewers instantly purchase authentic, culturally-rich products that get carried back and delivered across borders.

Think: **TikTok Shop × Airbnb Experiences × Shopify × Google Maps** — but for real-time, trust-based, hyperlocal cross-border commerce.

## 🎯 Platform Personas

- **Influencer (Seller-Traveler)**: Registers travel itineraries, goes live from local markets, sells and fulfills orders
- **Viewer (Global Buyer)**: Discovers influencers by location, watches lives, buys in real-time
- **Admin**: Manages KYC, payments, escrow, logistics, and analytics

## 🛠️ Tech Stack

### Frontend (`/client`)
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Lucide React (icons)

### Backend (`/server`)
- Node.js + Express
- TypeScript
- Prisma ORM
- PostgreSQL

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`

### Backend Setup

```bash
cd server
npm install

# Configure your database
cp .env.example .env
# Edit .env with your PostgreSQL connection string

# Generate Prisma client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Start development server
npm run dev
```

Backend runs at `http://localhost:3001`

## 📁 Project Structure

```
LIVEbUY/
├── client/                    # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── landing/       # Landing page sections
│   │   │   ├── ui/            # Reusable UI components
│   │   │   └── layout/        # Header, Footer, Layout
│   │   ├── assets/            # Images, icons
│   │   ├── styles/            # Global CSS
│   │   ├── hooks/             # Custom React hooks
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
├── server/                    # Node.js + Express backend
│   ├── src/
│   │   ├── routes/            # API route handlers
│   │   ├── middleware/        # Auth, error handling
│   │   ├── services/          # Business logic
│   │   └── index.ts           # Express entry point
│   ├── prisma/
│   │   └── schema.prisma      # Database schema
│   └── package.json
└── README.md
```

## 🎨 Design System

### Colors
- **Deep Navy**: `#0A0F1E` - Primary background, trust
- **Accent Gold**: `#D4A853` - Luxury, value, CTAs
- **Live Red**: `#E8402A` - Urgency, live indicator
- **Success Teal**: `#00D4AA` - Confirmed, verified
- **Cream**: `#FAF7F2` - Warm, editorial
- **Charcoal**: `#1C1008` - Body text

### Typography
- **Playfair Display**: Hero headings, destination names
- **Syne**: Dashboard, section titles
- **Plus Jakarta Sans**: Body text
- **IBM Plex Mono**: Prices, IDs, data

## 📄 License

MIT License - Built for LiveBuy Local
