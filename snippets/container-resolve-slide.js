resolve(token) {
  const provider = this.providers.get(token);
  if (!provider) {
    throw new Error(`No provider registered for token: ${String(token)}`);
  }

  if (provider.lifecycle === "singleton") {
    if (!this.singletons.has(token)) {
      this.singletons.set(token, provider.factory(this));
    }
    return this.singletons.get(token);
  }

  return provider.factory(this);
}
