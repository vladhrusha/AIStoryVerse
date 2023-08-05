import pino from 'pino';
let loggerConfig = {};

loggerConfig = {
  transport: {
    target: 'pino-pretty',
  },
};
const logger = pino(loggerConfig);

export default logger;
