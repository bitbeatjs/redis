import { Configuration, Boot } from '@bitbeat/core';
import { RedisOptions } from 'ioredis';

export default class RedisConfig extends Configuration {
    constructor() {
        super();
    }

    default: RedisOptions = {
        port: Boot.getEnvVar('REDIS_PORT') || 6379,
        host: Boot.getEnvVar('REDIS_HOST') || '0.0.0.0',
        family: Boot.getEnvVar('REDIS_FAMILY') || 4,
        password: Boot.getEnvVar('REDIS_PASSWORD'),
        db: Boot.getEnvVar('REDIS_DB') || 0,
        enableReadyCheck: true,
    };
}
