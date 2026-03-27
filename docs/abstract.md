# Assembling the Infinity Gauntlet: DI and IoC with Decorators in Vanilla JavaScript

## Description
Dependency Injection (DI) is a key pattern for building maintainable, scalable, and testable software, but it is often associated with heavyweight frameworks and complex runtime infrastructure. From a Lean Web perspective, this raises a simple question: can we keep the benefits of DI while staying close to the platform?

This talk explores how metaprogramming, specifically ECMAScript Decorators, enables a DI approach in pure Vanilla JavaScript. We will review the current [TC39 Decorators proposal](https://github.com/tc39/proposal-decorators) (Stage 3) and focus on [Parameter Decorators](https://github.com/tc39/proposal-class-method-parameter-decorators) (Stage 1).

We will demonstrate how to build a minimal Inversion of Control (IoC) container that aligns with Lean Web principles, defining injectable services with a custom decorator and annotating constructor parameters to collect the metadata required for dependency resolution.

The goal is to show how upcoming ECMAScript features make it possible to implement clean, declarative DI using the platform itself without relying on complex frameworks.

---

The talk is themed around assembling an "Infinity Gauntlet" for architecture, mapping each Infinity Stone to a concrete DI/IoC concern: graph reachability, metadata intelligence, runtime shaping, composition power, lifecycle over time, and service identity.

We close with a "snap" analogy: once proposals are mature and production-ready, temporary compatibility layers can disappear, leaving a smaller, explicit, platform-native DI core.
