import { Router, Request, Response } from 'express';

const router = Router();

// Mock data for active live sessions
const mockLiveSessions = [
  {
    id: '1',
    influencer: {
      id: 'inf-1',
      name: 'Yuki Tanaka',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
      isVerified: true,
    },
    location: {
      city: 'Tokyo',
      country: 'Japan',
      countryCode: 'JP',
    },
    title: 'Vintage Fashion Finds at Shimokitazawa',
    category: 'Vintage Fashion',
    viewerCount: 1247,
    status: 'LIVE',
    startedAt: new Date(Date.now() - 45 * 60000).toISOString(),
    thumbnail: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=400&h=300&fit=crop',
    productCount: 12,
  },
  {
    id: '2',
    influencer: {
      id: 'inf-2',
      name: 'Elif Yilmaz',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      isVerified: true,
    },
    location: {
      city: 'Istanbul',
      country: 'Turkey',
      countryCode: 'TR',
    },
    title: 'Grand Bazaar Ceramics Tour',
    category: 'Ceramics & Crafts',
    viewerCount: 892,
    status: 'LIVE',
    startedAt: new Date(Date.now() - 30 * 60000).toISOString(),
    thumbnail: 'https://images.unsplash.com/photo-1590422749897-47036da0b0ff?w=400&h=300&fit=crop',
    productCount: 8,
  },
  {
    id: '3',
    influencer: {
      id: 'inf-3',
      name: 'Sophie Laurent',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      isVerified: true,
    },
    location: {
      city: 'Paris',
      country: 'France',
      countryCode: 'FR',
    },
    title: 'Antique Treasures at Marché aux Puces',
    category: 'Antiques',
    viewerCount: 634,
    status: 'LIVE',
    startedAt: new Date(Date.now() - 60 * 60000).toISOString(),
    thumbnail: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&h=300&fit=crop',
    productCount: 15,
  },
  {
    id: '4',
    influencer: {
      id: 'inf-4',
      name: 'Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
      isVerified: true,
    },
    location: {
      city: 'Jaipur',
      country: 'India',
      countryCode: 'IN',
    },
    title: 'Gemstone Shopping in the Pink City',
    category: 'Gemstones',
    viewerCount: 1089,
    status: 'LIVE',
    startedAt: new Date(Date.now() - 20 * 60000).toISOString(),
    thumbnail: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop',
    productCount: 20,
  },
  {
    id: '5',
    influencer: {
      id: 'inf-5',
      name: 'Min-jun Kim',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
      isVerified: true,
    },
    location: {
      city: 'Seoul',
      country: 'South Korea',
      countryCode: 'KR',
    },
    title: 'K-Beauty Secrets from Myeongdong',
    category: 'K-Beauty',
    viewerCount: 2341,
    status: 'LIVE',
    startedAt: new Date(Date.now() - 15 * 60000).toISOString(),
    thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop',
    productCount: 25,
  },
];

const mockUpcomingSessions = [
  {
    id: '6',
    influencer: {
      id: 'inf-6',
      name: 'Fatima Benali',
      avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop',
      isVerified: true,
    },
    location: {
      city: 'Marrakech',
      country: 'Morocco',
      countryCode: 'MA',
    },
    title: 'Moroccan Textiles & Rugs',
    category: 'Textiles & Rugs',
    viewerCount: 0,
    status: 'SCHEDULED',
    scheduledAt: new Date(Date.now() + 2 * 60 * 60000).toISOString(),
    thumbnail: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&h=300&fit=crop',
    productCount: 0,
  },
  {
    id: '7',
    influencer: {
      id: 'inf-7',
      name: 'Made Wijaya',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      isVerified: true,
    },
    location: {
      city: 'Bali',
      country: 'Indonesia',
      countryCode: 'ID',
    },
    title: 'Balinese Silver Jewelry Workshop',
    category: 'Silver Jewelry',
    viewerCount: 0,
    status: 'SCHEDULED',
    scheduledAt: new Date(Date.now() + 4.5 * 60 * 60000).toISOString(),
    thumbnail: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop',
    productCount: 0,
  },
  {
    id: '8',
    influencer: {
      id: 'inf-8',
      name: 'Marco Rossi',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      isVerified: true,
    },
    location: {
      city: 'Florence',
      country: 'Italy',
      countryCode: 'IT',
    },
    title: 'Italian Leather Goods Tour',
    category: 'Leather Goods',
    viewerCount: 0,
    status: 'SCHEDULED',
    scheduledAt: new Date(Date.now() + 6 * 60 * 60000).toISOString(),
    thumbnail: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=300&fit=crop',
    productCount: 0,
  },
];

// GET /api/live/active - Get all active live sessions
router.get('/active', (_req: Request, res: Response) => {
  res.json({
    success: true,
    data: {
      live: mockLiveSessions,
      upcoming: mockUpcomingSessions,
      totalLive: mockLiveSessions.length,
      totalUpcoming: mockUpcomingSessions.length,
    },
  });
});

// GET /api/live/:id - Get a specific live session
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const session = [...mockLiveSessions, ...mockUpcomingSessions].find(s => s.id === id);
  
  if (!session) {
    return res.status(404).json({
      success: false,
      error: 'Not Found',
      message: 'Live session not found',
    });
  }

  res.json({
    success: true,
    data: session,
  });
});

// GET /api/live/stats - Get live streaming stats
router.get('/stats/overview', (_req: Request, res: Response) => {
  const totalViewers = mockLiveSessions.reduce((sum, s) => sum + s.viewerCount, 0);
  
  res.json({
    success: true,
    data: {
      activeSessions: mockLiveSessions.length,
      totalViewers,
      upcomingToday: mockUpcomingSessions.length,
      countriesActive: [...new Set(mockLiveSessions.map(s => s.location.countryCode))].length,
    },
  });
});

export default router;
