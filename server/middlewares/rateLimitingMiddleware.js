import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';

// Middleware for rate limiting
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later',
});

// Middleware for API throttling
const apiThrottler = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayMs: (delayAfter, req) => {
    const used = req.slowDown.current;
    return (used - delayAfter) * 500;
  },
  maxDelayMs: 5000, // optional, maximum delay to be applied
});


export { rateLimiter, apiThrottler };