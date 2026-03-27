const container = new Container();

[Logger, ApiClient, UserService, App].forEach((Type) => {
  container.register(Type, (c) => {
    const deps = getDependencies(Type).map((dep) => c.resolve(dep));
    return new Type(...deps);
  });
});

const app = container.resolve(App);
console.log(app.start());
