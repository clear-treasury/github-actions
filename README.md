# GitHub Actions

This repo contains [GitHub Actions](https://github.com/features/actions) used by
other Clear Treasury repos.

It's structured as a monorepo using the
[workspaces feature](https://github.com/npm/rfcs/blob/latest/implemented/0026-workspaces.md)
made available by `npm v7`.

## Getting Started

Coming soon...

## Contributing

> :warning: **NOTE:** This repo makes use of
> [npm workspaces](https://github.com/npm/rfcs/blob/latest/accepted/0026-workspaces.md)
> which is a feature of `npm v7`. In order to contribute to this repo you'll
> need to install the latest beta version: `npm i -g npm@7`

1. Clone this repo
2. Run `npm install` at the root
3. Once you've made your changes to an action, `cd` into its directory
4. Run `npm run all` to build, lint, and run tests
5. Push your changes to kick of CI
