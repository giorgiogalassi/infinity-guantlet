// Stage 1 concept sketch only (not used by runtime demo).
// Syntax and semantics may change before standardization.

class UserService {}
class Logger {}

function inject(_token) {
  return function () {};
}

class AppController {
  constructor(
    @inject(UserService) userService,
    @inject(Logger) logger
  ) {
    this.userService = userService;
    this.logger = logger;
  }
}

export { AppController };
