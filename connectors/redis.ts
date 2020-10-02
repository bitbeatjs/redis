import {
    Connector,
    getInstance,
    logger,
    generateDebugger,
} from '@bitbeat/core';
import RedisConfiguration from '../config/redis';
import IORedis from 'ioredis';
import { Redis } from 'ioredis';
import { Debugger } from 'debug';

export default class RedisConnector extends Connector {
    runtime: Redis | undefined;
    debug: Debugger | any;

    constructor() {
        super();
        this.initializePriority = 10;
        this.startPriority = 10;
        this.stopPriority = 10;
    }

    async configure(): Promise<void> {
        this.debug = generateDebugger(this.name);
    }

    async start(): Promise<void> {
        const config = getInstance(RedisConfiguration);
        this.runtime = new IORedis({
            ...config?.value,
        });
        logger.info(`${this.name} started.`);
        this.debug(`${this.name} started.`);
        return super.start();
    }

    async stop(): Promise<void> {
        this.runtime?.disconnect();
        logger.info(`${this.name} stopped.`);
        this.debug(`${this.name} stopped.`);
        return super.stop();
    }
}
