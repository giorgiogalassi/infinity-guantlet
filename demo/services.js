import { Injectable } from "./decorators.js";

export class Logger {
  info(message) {
    return `[log] ${message}`;
  }
  
  static {
    Injectable(this);
  }
}

export class ApiClient {
  constructor(logger) {
    this.logger = logger;
  }

  fetchUsers() {
    return [
      this.logger.info("request /users"),
      "Ada Lovelace",
      "Grace Hopper",
      "Margaret Hamilton",
    ];
  }
  
  static {
    Injectable(this, { deps: [Logger] });
  }
}

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
