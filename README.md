# BITBEAT REDIS MODULE

## Introduction

This is the official redis module for bitbeat using ioredis for connection.<br>
This package will export you a redis connector and a redis config.<br>
To use it follow the documentation of bitbeat at [the homepage](https://bitbeat.projects.oliverfreudrich.com/#/?id=add-existing-module-extend-core).

Example register:

```typescript
import { registerBulk } from '@bitbeat/core';
import { RedisConnector, RedisConfig } from '@bitbeat/redis';

export default async () => {
    // it does not matter if you use new Set([RedisConfig, RedisConnector]) or new Set([RedisConnector, RedisConfig]).
    // Configuration files will always be loaded first + the priorities are the important sorter.
    await registerBulk(new Set([RedisConfig, RedisConnector]));
};
```

Example usage:

```typescript
import { getInstance, Task } from '@bitbeat/core';
import { RedisConnector } from '@bitbeat/redis';

export default class Test extends Task {
    constructor() {
        super();
        this.schedule = '* * * * *';
    }

    async run(): Promise<void> {
        // set each minute a new timestamp
        const redis = getInstance(RedisConnector)?.runtime;
        await redis.set('timestamp', Date.now());
    }
}
```
