import { Configuration } from '@bitbeat/core';
import { RedisOptions } from 'ioredis';

export default class RedisConfiguration extends Configuration {
    constructor() {
        super();
    }

    default: RedisOptions = {
        port: parseInt(process.env.REDIS_PORT || '6379', 10),
        host: process.env.REDIS_HOST || '0.0.0.0',
    };
}