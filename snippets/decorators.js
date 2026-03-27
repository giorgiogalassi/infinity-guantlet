export const INJECT_TOKENS = Symbol("di:inject_tokens");

export function Injectable({ deps = [] } = {}) {
  return function (Type) {
    Type[INJECT_TOKENS] = deps;
    return Type;
  };
}

export function getDependencies(Type) {
  return Type[INJECT_TOKENS] ?? [];
}
