import { createClient } from 'redis';

let redisClient: ReturnType<typeof createClient> | null = null;

export async function getRedisClient() {
  if (!redisClient) {
    redisClient = createClient({
      url: process.env.REDIS_URL,
      password: process.env.REDIS_PASSWORD,
    });

    redisClient.on('error', (err) => {
      console.error('Redis client error:', err);
    });

    await redisClient.connect();
  }

  return redisClient;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function cacheData(key: string, data: any) {
  try {
    const client = await getRedisClient();
    const ttl = parseInt(process.env.REDIS_TTL || '3600', 10);
    await client.set(key, JSON.stringify(data), { EX: ttl });
    console.log(`Data cached with key: ${key}`);
  } catch (error) {
    console.error('Error caching data:', error);
  }
}

export async function getCachedData(key: string) {
  try {
    const client = await getRedisClient();
    const data = await client.get(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error retrieving cached data:', error);
    return null;
  }
}

export async function clearCache(key: string) {
  try {
    const client = await getRedisClient();
    await client.del(key);
    console.log(`Cache cleared for key: ${key}`);
  } catch (error) {
    console.error('Error clearing cache:', error);
  }
}