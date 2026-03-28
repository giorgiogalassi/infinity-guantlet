export class UserService {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  listUsers() {
    return this.apiClient.fetchUsers().slice(1);
  }
}
Injectable({ deps: [ApiClient] })(UserService);

export class App {
  constructor(userService, logger) {
    this.userService = userService;
    this.logger = logger;
  }

  start() {
    const users = this.userService.listUsers().join(", ");
    return this.logger.info(`users: ${users}`);
  }
}
Injectable({ deps: [UserService, Logger] })(App);
