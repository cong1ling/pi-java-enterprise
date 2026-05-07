# Release Notes and Publishing Guide

## Local validation checklist

Before publishing:

1. Confirm `package.json` contains the `pi` manifest
2. Confirm `skills/`, `prompts/`, `extensions/`, and `themes/` exist
3. Confirm all skill names match directory names
4. Confirm themes use valid Pi theme structure
5. Confirm extension files export valid Pi extension factories
6. Confirm docs and examples reference correct file names

## Local install test

```bash
pi install /absolute/path/to/pi-java-enterprise
```

## npm publish flow

Typical steps:

```bash
npm login
npm publish
```

If publishing under a scope, update `package.json` name first.

## Suggested release process

1. Update `CHANGELOG.md`
2. Review docs and examples
3. Smoke-test local installation in Pi
4. Publish to npm
5. Verify package install from npm source

## Versioning guidance

- `0.1.x`: first usable releases
- `0.2.x` to `0.4.x`: rapid improvement phase
- `1.0.0`: stable workflows and publish-ready structure
