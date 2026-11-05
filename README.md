# Soundboard for BUSY Bar

[![CI](https://github.com/iMalkav/busybar-soundboard/actions/workflows/ci.yml/badge.svg)](https://github.com/iMalkav/busybar-soundboard/actions/workflows/ci.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

<img src="src/appmeta/icon_front_8x8.png" width="64" height="64" alt="Soundboard icon">

Play a small collection of original synthesized sounds.

Category: **Music**.

## Screenshots

<img src="screenshots/front.png" width="576" height="128" alt="Soundboard on the BUSY Bar front display">

<img src="screenshots/back.png" width="480" height="240" alt="Soundboard on the BUSY Bar rear display">

Captured from a physical BUSY Bar. See [capture details](docs/SCREENSHOTS.md)
for firmware, settings and sample-data provenance.

## Controls

Wheel selects a sound. OK plays or replaces it. Back stops playback; Back again exits.

## Settings

Open **Apps → Soundboard → Setup**. Saved settings are read when the app starts.

| Setting | Type | Default |
| --- | --- | --- |
| Sound | boolean | True |
| Initial sound | enum | chime |

## Install and build

Use the Node.js version in [.nvmrc](.nvmrc) and the pnpm version in [package.json](package.json).

    corepack pnpm install --frozen-lockfile
    corepack pnpm check
    corepack pnpm app:install
    corepack pnpm app:run

Pass --addr <host> to an app command to select a device. See [INSTALL.md](INSTALL.md).
The minimum firmware HTTP API is specified in [src/appmeta/manifest.json](src/appmeta/manifest.json).

## Development

Each project contains its own runtime, state model, assets, tests and build scripts.
Run pnpm check for metadata validation, type checking, unit tests, packaging and bundle smoke checks.
Run pnpm release to prepare a versioned archive and SHA256SUMS locally.
Generated files under dist/ are excluded from Git.

See [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/RELEASING.md](docs/RELEASING.md).

## License

Code, pixel icons, geometric artwork and synthesized sound assets: [MIT](LICENSE).
Assets can be recreated with python art/generate_assets.py. Rendering uses fonts supplied by the BUSY Bar firmware.

## AI assistance

See [AI_ASSISTANCE.md](docs/AI_ASSISTANCE.md) for the role of AI in this project.
