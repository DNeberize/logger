class ConsoleLogger {
  static DEBUG = 1;
  static INFO = 2;
  static WARN = 3;
  static ERROR = 4;
  static CRITICAL = 5;

  static formatDate() {
    return new Date().toISOString().replace("T", " ").replace("Z", "");
  }

  print(message) {
    if (!message || message.trim().length === 0) {
      throw new Error("Logging message must be non-empty.");
    }
    console.log(message);
  }

  log(type, message) {
    if (!message || message.trim().length === 0) {
      throw new Error("Logging message must be non-empty.");
    }

    let logType;
    switch (type) {
      case ConsoleLogger.DEBUG:
        logType = "DEBUG";
        break;
      case ConsoleLogger.INFO:
        logType = "INFO";
        break;
      case ConsoleLogger.WARN:
        logType = "WARN";
        break;
      case ConsoleLogger.ERROR:
        logType = "ERROR";
        break;
      case ConsoleLogger.CRITICAL:
        logType = "CRITICAL";
        break;
      default:
        throw new Error("Invalid log type");
    }
    console.log(`[${ConsoleLogger.formatDate()}][${logType}]: ${message}`);
  }
}

class Application {
  constructor(debugMode = false) {
    this.logger = new ConsoleLogger();
    this.debugMode = debugMode;
  }

  run() {
    try {
      this.logger.print("Application is starting...");
      this.logger.log(ConsoleLogger.INFO, "System initialized successfully.");
      this.logger.log(ConsoleLogger.DEBUG, "Debugging mode enabled.");
      this.logger.log(ConsoleLogger.WARN, "Potential issue detected.");
      this.logger.log(ConsoleLogger.ERROR, "An unexpected error occurred!");
      this.logger.log(
        ConsoleLogger.CRITICAL,
        "System failure! Immediate action required."
      );

      if (this.debugMode) {
        console.log("Running in debug mode...");
        console.log("Logger instance:", this.logger);
      }
      // uncomment ro datesto exception handlingi
      // this.logger.log(ConsoleLogger.INFO, "");
    } catch (error) {
      console.error("Exception caught:", error.message);
    }
  }
}

const app = new Application(true); // Enable debug mode
app.run();
