import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'LiveBuy Local API is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
  });
});

router.get('/ready', (_req: Request, res: Response) => {
  res.json({
    success: true,
    ready: true,
    services: {
      api: 'healthy',
      database: 'not_connected', // Will be updated when DB is connected
    },
  });
});

export default router;
