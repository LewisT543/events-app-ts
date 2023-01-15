export interface ApiError {
  msg: ApiErrorMessageEnum
}

export enum ApiErrorMessageEnum {
  INVALID_API_KEY = 'Invalid Api-key',
  END_OF_HANDLER_ERROR = 'End of Handler error, something unexpected has happened here...'
}