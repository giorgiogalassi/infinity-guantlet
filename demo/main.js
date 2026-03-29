import { Container } from "./container.js";
import { getDependencies } from "./decorators.js";
import { App, ApiClient, Logger, UserService } from "./services.js";

const container = new Container();
const singletonServices = new Set([App, UserService]);

[Logger, ApiClient, UserService, App].forEach((Type) => {
  container.registerClass(Type, Type, {
    lifecycle: singletonServices.has(Type) ? "singleton" : "transient",
    deps: getDependencies(Type),
  });
});

const app = container.resolve(App);
console.log(app.start());
