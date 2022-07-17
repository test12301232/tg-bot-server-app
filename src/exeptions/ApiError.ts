export default class ApiError extends Error {
   readonly status;
   readonly errors;

   constructor(status: number, message: string, errors: Array<any> = []) {
       super(message);
       this.status = status;
       this.errors = errors;
   }

   static UnauthorizedError() {
       return new ApiError(401, 'Пользователь не авторизован!');
   }

   static BadRequest(message: string, errors: Array<any> = []) {
       return new ApiError(400, message, errors);
   }

   static AccessDenied(){
       return new ApiError(403, 'Forbidden');
   }
}