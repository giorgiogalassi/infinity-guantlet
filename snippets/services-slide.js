export class UserService {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  listUsers() {
    return this.apiClient.fetchUsers().slice(1);
  }
  
  static {
    Injectable(this, { deps: [ApiClient] });
  }
}

export class App {
  constructor(userService, logger) {
    this.userService = userService;
    this.logger = logger;
  }

  start() {
    const users = this.userService.listUsers().join(", ");
    return this.logger.info(`users: ${users}`);
  }
  
  static {
    Injectable(this, { deps: [UserService, Logger] });
  }
}
