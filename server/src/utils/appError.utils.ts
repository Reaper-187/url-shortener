export class AppError extends Error {
  statusCode: number;
  code?: string;

  constructor(message: string, statusCode: number, code?: string) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;

    Object.setPrototypeOf(this, AppError.prototype); // err instanceof AppError kann manchmal false zurückgeben obwohl es ein AppError ist.
    Error.captureStackTrace(this, this.constructor);
  }
}
