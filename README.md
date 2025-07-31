# sync-npm-version-to-jsr

[![JSR](https://jsr.io/badges/@nm/sync-npm-version-to-jsr)](https://jsr.io/@nm/sync-npm-version-to-jsr)
[![JSR Score](https://jsr.io/badges/@nm/sync-npm-version-to-jsr/score)](https://jsr.io/@nm/sync-npm-version-to-jsr)
[![NPM Version](https://img.shields.io/npm/v/sync-npm-version-to-jsr)](https://www.npmjs.com/package/sync-npm-version-to-jsr)
[![NPM Downloads](https://img.shields.io/npm/dm/sync-npm-version-to-jsr)](https://www.npmjs.com/package/sync-npm-version-to-jsr)
[![NPM License](https://img.shields.io/npm/l/sync-npm-version-to-jsr)](https://github.com/node-modules/sync-npm-version-to-jsr/blob/master/LICENSE)
[![codecov](https://codecov.io/gh/node-modules/sync-npm-version-to-jsr/branch/master/graph/badge.svg)](https://codecov.io/gh/node-modules/sync-npm-version-to-jsr)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/node-modules/sync-npm-version-to-jsr/ci.yml?branch=master)](https://github.com/node-modules/sync-npm-version-to-jsr/actions/workflows/ci.yml?query=branch%3Amaster)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)
![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/node-modules/sync-npm-version-to-jsr)

sync package.json version to jsr.json

## Usage

```bash
npx sync-npm-version-to-jsr
```

Use `postversion` hook on [semantic-release](https://github.com/semantic-release/semantic-release/blob/fdc35bda3c00a5ae79234ea4e2e6ed05ef4ac501/docs/support/FAQ.md?plain=1#L61)

> the `postversion` hook so it will be executed during the `prepare` step of `@semantic-release/npm`, which allow for example to update files before committing them with the [`@semantic-release/git`](https://github.com/semantic-release/git) plugin

```json
// package.json

{
  "scripts": {
    "postversion": "npx sync-npm-version-to-jsr && git add jsr.json"
  }
}
```

## License

[MIT](./LICENSE)

## Contributors

[![Contributors](https://contrib.rocks/image?repo=node-modules/sync-npm-version-to-jsr)](https://github.com/node-modules/sync-npm-version-to-jsr/graphs/contributors)

Made with [contributors-img](https://contrib.rocks).
