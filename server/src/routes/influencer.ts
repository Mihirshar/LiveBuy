import { Router, Request, Response } from 'express';

const router = Router();

interface InfluencerRegistration {
  name: string;
  email: string;
  homeCountry: string;
  socialLinks?: {
    instagram?: string;
    tiktok?: string;
    youtube?: string;
  };
  bio?: string;
  travelExperience?: string;
}

// POST /api/influencers/register - Register as an influencer
router.post('/register', (req: Request, res: Response) => {
  const {
    name,
    email,
    homeCountry,
    socialLinks,
    bio,
    travelExperience,
  }: InfluencerRegistration = req.body;

  // Validation
  if (!name || !email || !homeCountry) {
    return res.status(400).json({
      success: false,
      error: 'Validation Error',
      message: 'Name, email, and home country are required',
      fields: {
        name: !name ? 'Name is required' : null,
        email: !email ? 'Email is required' : null,
        homeCountry: !homeCountry ? 'Home country is required' : null,
      },
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Validation Error',
      message: 'Invalid email format',
    });
  }

  // In production, this would create a user in the database
  // For now, return a mock successful response
  const mockInfluencerId = `inf-${Date.now()}`;

  res.status(201).json({
    success: true,
    message: 'Registration submitted successfully! We will review your application and get back to you within 48 hours.',
    data: {
      id: mockInfluencerId,
      name,
      email,
      homeCountry,
      socialLinks,
      bio,
      travelExperience,
      status: 'pending_review',
      kycStatus: 'not_started',
      createdAt: new Date().toISOString(),
    },
  });
});

// GET /api/influencers/featured - Get featured influencers for landing page
router.get('/featured', (_req: Request, res: Response) => {
  const featuredInfluencers = [
    {
      id: 'inf-1',
      name: 'Yuki Tanaka',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
      homeCountry: 'Japan',
      currentLocation: { city: 'Tokyo', countryCode: 'JP' },
      specialties: ['Vintage Fashion', 'Electronics', 'Anime Collectibles'],
      rating: 4.9,
      totalSales: 342,
      followers: 12500,
      isLive: true,
    },
    {
      id: 'inf-2',
      name: 'Elif Yilmaz',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      homeCountry: 'Turkey',
      currentLocation: { city: 'Istanbul', countryCode: 'TR' },
      specialties: ['Ceramics', 'Spices', 'Turkish Carpets'],
      rating: 4.8,
      totalSales: 287,
      followers: 9800,
      isLive: true,
    },
    {
      id: 'inf-3',
      name: 'Sophie Laurent',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      homeCountry: 'France',
      currentLocation: { city: 'Paris', countryCode: 'FR' },
      specialties: ['Antiques', 'Art', 'Luxury Vintage'],
      rating: 4.9,
      totalSales: 256,
      followers: 15200,
      isLive: true,
    },
    {
      id: 'inf-4',
      name: 'Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
      homeCountry: 'India',
      currentLocation: { city: 'Jaipur', countryCode: 'IN' },
      specialties: ['Gemstones', 'Textiles', 'Jewelry'],
      rating: 4.7,
      totalSales: 198,
      followers: 8400,
      isLive: true,
    },
  ];

  res.json({
    success: true,
    data: featuredInfluencers,
  });
});

// GET /api/influencers/:id - Get influencer profile
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;

  // Mock influencer data
  const mockInfluencer = {
    id,
    name: 'Yuki Tanaka',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    banner: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=400&fit=crop',
    homeCountry: 'Japan',
    currentLocation: { city: 'Tokyo', countryCode: 'JP' },
    bio: 'Fashion enthusiast and vintage collector. I travel the world finding unique pieces that tell a story.',
    specialties: ['Vintage Fashion', 'Electronics', 'Anime Collectibles'],
    rating: 4.9,
    reviewCount: 156,
    totalSales: 342,
    followers: 12500,
    isVerified: true,
    memberSince: '2024-03-15',
    upcomingTrips: [
      { city: 'Osaka', country: 'Japan', dates: 'Mar 15-20' },
      { city: 'Seoul', country: 'South Korea', dates: 'Mar 25-30' },
    ],
    socialLinks: {
      instagram: '@yukitanaka_travels',
      tiktok: '@yukitanaka',
      youtube: 'YukiTanakaTravel',
    },
  };

  res.json({
    success: true,
    data: mockInfluencer,
  });
});

export default router;
