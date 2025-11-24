import pino from "pino";

export class Logger {
  logger: pino.Logger<never, boolean>;
  constructor() {
    const transports = pino.transport({
      targets: [
        // Console transport (uses pino-pretty for human-readable output)
        {
          target: "pino-pretty",
          options: {
            colorize: true,
          },
          level: "info", // Set minimum log level for console
        },
        // File transport (writes raw JSON logs to the file)
        {
          target: "pino/file", // use pino/file transport for writing to a file
          options: {
            destination: "./logs/app.log",
            // Optional: set a different log level for the file
            // level: 'debug'
          },
          level: "debug", // Set minimum log level for file
        },
      ],
    });

    this.logger = pino({ level: process.env.DEBUG_LEVEL }, transports);
  }

  error(msg: string) {
    this.logger.error(msg);
  }

  info(msg: string) {
    this.logger.info(msg);
  }

  debug(msg: string) {
    this.logger.debug(msg);
  }
}
