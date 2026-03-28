registerClass(token, Type, { lifecycle = "transient", deps = [] } = {}) {
  this.register(
    token,
    (container) => {
      const args = deps.map((dep) => container.resolve(dep));
      return new Type(...args);
    },
    { lifecycle }
  );
}
