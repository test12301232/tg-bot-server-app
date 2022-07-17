import ApiError from "../exeptions/ApiError";
import { Request, Response, NextFunction } from "express";

export default function (e: Error, request: Request, response: Response, next: NextFunction) {
   console.log(e.message);

   if (e instanceof ApiError) {
      return response.status(e.status)
         .json({ message: e.message, errors: e.errors });
   }

   return response.status(500).json({ message: 'Неизвестная ошибка!' });
}