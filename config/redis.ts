import { Configuration, getEnvVar } from '@bitbeat/core';
import { RedisOptions } from 'ioredis';

export default class RedisConfig extends Configuration {
    constructor() {
        super();
    }

    default: RedisOptions = {
        port: (getEnvVar('REDIS_PORT') as any) || 6379,
        host: (getEnvVar('REDIS_HOST') as any) || '0.0.0.0',
        family: (getEnvVar('REDIS_FAMILY') as any) || 4,
        password: getEnvVar('REDIS_PASSWORD') as any,
        db: (getEnvVar('REDIS_DB') as any) || 0,
        enableReadyCheck: true,
    };
}
