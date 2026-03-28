export class Container {
  constructor() {
    this.providers = new Map();
    this.singletons = new Map();
  }

  register(token, factory, { lifecycle = "transient" } = {}) {
    this.providers.set(token, { factory, lifecycle });
  }
}
