import { Response } from 'express';

export class ResForm {
  public statusCode: number;
  public message: Array<string>;
  public data?: unknown;
  public error?: string;

  constructor(
    statusCode: number,
    message: Array<string>,
    data?: unknown,
    error?: string,
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.error = error;
  }
}

export const resTypes = {
  successRes: (route: string, data?: unknown) =>
    new ResForm(200, [`${route} success!`], data),
  failRes: (statusCode: number, message: Array<string>, error: string) =>
    new ResForm(statusCode, message, error),
};
