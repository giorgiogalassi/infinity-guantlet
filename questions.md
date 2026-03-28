# Possible Audience Questions

## Concepts and Framing

1. What is the simplest way to explain the difference between DI and IoC to a junior developer?
2. Why should I care about DI if my project is still small?
3. Is DI really useful in JavaScript, or is it more valuable in strongly typed languages?
4. When does manual wiring stop being enough and a container starts becoming worth it?
5. Are DI and IoC patterns, principles, or just implementation techniques?

## Vanilla JavaScript Approach

6. Why build this in Vanilla JavaScript instead of using an existing framework solution?
7. What do we gain by staying framework-independent?
8. What do we lose by not using a mature framework container?
9. Is this approach still valuable if the team already uses React, Vue, or Angular?
10. How would this approach fit into a frontend app versus a backend app?

## Decorators and Standards

11. Are decorators production-ready today?
12. What does Stage 3 really mean in practice?
13. Why did you avoid relying on parameter decorators?
14. If decorators change in the future, how risky is this architecture?
15. Would you use this approach without decorators at all?

## Implementation Details

16. Why did you choose class metadata instead of a different registration mechanism?
17. How do you handle constructor arguments that are not services, like config values or primitives?
18. How would you support async dependencies?
19. How would you detect circular dependencies?
20. How would you add scoped lifetimes, not just singleton and transient?
21. How would you make this work with factories?
22. How would you support interfaces or abstract contracts in JavaScript, where interfaces do not exist natively?

## Testing and Maintainability

23. Is this approach easier to test than framework-based DI, or just different?
24. How would you mock dependencies in unit tests?
25. Does a container make code easier to maintain, or can it become hidden magic too?
26. What rules would you set to keep the container from becoming too clever?
27. How would you explain the composition root idea to a team that has never used DI?

## Performance and Runtime Concerns

28. Is there any meaningful runtime overhead in this approach?
29. Would you worry about performance in a large application?
30. Does decorator metadata introduce memory or startup costs?
31. How would this compare to framework DI in terms of bundle size?

## Tradeoffs and Decision-Making

32. When would you definitely not recommend this approach?
33. At what scale does it make more sense to adopt a framework container instead?
34. Is this approach a teaching tool, or something you would actually ship?
35. How much team discipline is required for this to stay maintainable?
36. What are the biggest risks if a team copies this approach without understanding it deeply?

## AI and Modern Development

37. You mentioned the AI era. Why is plain JavaScript more AI-friendly in your view?
38. Do you think AI-generated code benefits from simpler architecture boundaries?
39. Could AI make framework-heavy codebases easier to manage, reducing the need for this approach?

## Practical Adoption

40. If I wanted to introduce this in an existing project, where should I start?
41. Would you migrate an entire codebase to this approach, or use it only in selected areas?
42. What is the smallest useful version of this idea a team could adopt next week?
43. How would you sell this approach to a skeptical team lead or architect?
44. What would the next step be if you continued this demo after the talk?
