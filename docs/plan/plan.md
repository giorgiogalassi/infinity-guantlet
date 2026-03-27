# Execution Plan - Infinity Gauntlet Speech (Slidev)

## Objective
Build a Slidev-based talk and supporting demo code that proves DI/IoC can be implemented in Vanilla JavaScript using decorators and metadata-driven resolution.

## Inputs Analyzed
- Abstract in `docs/abstract.md`
- TC39 Decorators proposal (Stage 3): https://github.com/tc39/proposal-decorators
- TC39 class/method parameter decorators proposal (Stage 1): https://github.com/tc39/proposal-class-method-parameter-decorators
- Slidev documentation: https://sli.dev/guide/

## Deliverables
- `slides.md` with a complete 10-12 slide narrative
- Minimal runnable demo in `demo/` showing:
  - IoC container (`register`, `resolve`, singleton/transient)
  - `Injectable` decorator and metadata strategy
  - dependency graph resolution
  - optional experimental parameter-decorator example
- `snippets/` code excerpts consumed by Slidev slides

## Work Breakdown
1. Scaffold Slidev project structure
2. Create slide narrative and flow
3. Implement IoC demo code
4. Connect code snippets into slides
5. Validate with `npm run dev` and `npm run build`

## Initial Slide Outline
1. Title and thesis
2. Why DI usually implies heavy frameworks
3. DI and IoC model in one slide
4. TC39 status (Stage 3 vs Stage 1)
5. Lean Web constraints and design goals
6. Minimal container API
7. `@Injectable` implementation
8. Dependency metadata and constructor injection
9. Experimental parameter decorators (future path)
10. Live demo output walkthrough
11. Tradeoffs and constraints
12. Conclusion and next steps

## Success Criteria
- Narrative is coherent from problem to working solution
- Demo code is readable and runnable
- Slides clearly distinguish current-standard vs experimental features
- Audience can reproduce the minimal DI setup without frameworks
