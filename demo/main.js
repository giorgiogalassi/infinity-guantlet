import { Container } from "./container.js";
import { getDependencies } from "./decorators.js";
import { App, ApiClient, Logger, UserService } from "./services.js";

const container = new Container();

[Logger, ApiClient, UserService, App].forEach((Type) => {
  container.registerClass(Type, Type, {
    deps: getDependencies(Type),
  });
});

const app = container.resolve(App);
console.log(app.start());
