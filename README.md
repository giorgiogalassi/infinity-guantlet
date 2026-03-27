# Infinity Gauntlet Speech Demo

This project contains:

- a Slidev presentation in `slides.md`
- a runnable Vanilla JS DI/IoC demo in `demo/`

## Technical Description

This repository demonstrates a metadata-driven Dependency Injection (DI) and
Inversion of Control (IoC) design in plain JavaScript, using decorators as the
annotation mechanism and a small runtime container as the resolver.

### Goals and Constraints

- Keep architecture framework-independent (no framework DI runtime).
- Preserve explicit composition at startup (`register` + `resolve`).
- Use current standards where possible (Decorators Stage 3).
- Isolate experimental syntax (parameter decorators) from production baseline.

### Architecture Overview

The runtime architecture is split into four layers:

1. Service classes (`demo/services.js`)
2. Metadata decorator (`demo/decorators.js`)
3. IoC container (`demo/container.js`)
4. Composition root (`demo/main.js`)

The composition root registers tokens/providers and resolves the top-level app
type. The container recursively resolves dependencies from metadata and builds
the object graph.

### Container Design

`Container` is intentionally minimal and usually exposes:

- `register(token, provider, options)` to map abstract tokens to concrete
  providers.
- `resolve(token)` to recursively build an instance graph.
- singleton/transient lifecycle handling through registration options.

Internally, the container keeps:

- a provider registry (token -> provider + config)
- an instance cache (for singleton reuse)
- a recursive resolution path

Resolution algorithm (high level):

1. Look up token in registry.
2. If singleton and cached, return cached instance.
3. Read dependency metadata from provider class.
4. Resolve each dependency token recursively.
5. Instantiate provider with resolved dependencies.
6. Cache if singleton, then return instance.

### Decorator and Metadata Strategy

The `Injectable` decorator attaches dependency metadata to classes instead of
hardcoding `new` calls inside classes. This preserves DI principles:

- classes declare what they need
- wiring stays centralized in the composition root
- tests can swap tokens/providers without rewriting service internals

In practical terms, decorator metadata is the contract between class
declarations and container resolution.

### Why This Is Lean-Web Friendly

- Small runtime surface area (easy to audit and debug).
- No hidden framework lifecycle assumptions.
- Works with standard JavaScript execution model.
- Supports incremental growth (interceptors, scoped lifetimes, factories).

### Experimental Track: Parameter Decorators

`demo/experimental-parameter-decorators.js` shows a potential future API where
constructor parameters can be directly annotated for injection intent. This is
currently an ergonomics preview only, not the production baseline.

Production path today:

- class-level decorators and explicit metadata
- explicit registration at app startup
- deterministic container resolution

### Slide Mapping

- `slides.md` explains the narrative, tradeoffs, and standards status.
- `snippets/` mirrors key code used in slides so the talk stays synchronized
  with runnable examples.

## Prerequisites

- Node.js 18+ (Node.js 20+ recommended)
- npm

## Install Dependencies

```bash
npm install
```

## Run the Slide Deck (Dev Mode)

```bash
npm run dev
```

Slidev will print a local URL (usually `http://localhost:3030`).

## Build the Slides

```bash
npm run build
```

Build output is generated in `dist/`.

## Export Slides (PDF / PPTX depending on setup)

```bash
npm run export
```

## Run the DI/IoC Demo Code

```bash
node demo/main.js
```

Expected output:

```text
[log] users: Ada Lovelace, Grace Hopper, Margaret Hamilton
```
