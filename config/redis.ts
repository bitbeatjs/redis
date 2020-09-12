import { Configuration } from '@bitbeat/core';
import { RedisOptions } from 'ioredis';

export default class RedisConfiguration extends Configuration {
    constructor() {
        super();
    }

    default: RedisOptions = {
        port: parseInt(process.env.REDIS_PORT || '6379', 10),
        host: process.env.REDIS_HOST || '0.0.0.0',
        family: parseInt(process.env.REDIS_FAMILY || '4', 10),
        password: process.env.REDIS_PASSWORD,
        db: parseInt(process.env.REDIS_DB || '0', 10),
        enableReadyCheck: true,
    };
}