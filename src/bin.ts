#!/usr/bin/env node

import sync from './index.ts';

const cwd = process.cwd();

await sync(cwd);
