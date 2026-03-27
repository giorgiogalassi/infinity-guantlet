export class Container {
  constructor() {
    this.providers = new Map();
    this.singletons = new Map();
  }

  register(token, factory, { lifecycle = "transient" } = {}) {
    this.providers.set(token, { factory, lifecycle });
  }

  resolve(token) {
    const provider = this.providers.get(token);
    if (!provider) throw new Error(`Missing provider: ${String(token)}`);
    if (provider.lifecycle === "singleton") {
      if (!this.singletons.has(token)) {
        this.singletons.set(token, provider.factory(this));
      }
      return this.singletons.get(token);
    }
    return provider.factory(this);
  }
}
