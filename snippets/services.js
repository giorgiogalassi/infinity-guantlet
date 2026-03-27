class Logger {}
Injectable()(Logger);

class ApiClient {
  constructor(logger) {
    this.logger = logger;
  }
}
Injectable({ deps: [Logger] })(ApiClient);

class UserService {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }
}
Injectable({ deps: [ApiClient] })(UserService);

class App {
  constructor(userService, logger) {
    this.userService = userService;
    this.logger = logger;
  }
}
Injectable({ deps: [UserService, Logger] })(App);
