import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import authConfig from "../config/auth";

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

const authMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction,
): void | Response<unknown> => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ error: "Token not provided" });
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const data = jwt.verify(token, authConfig.secret);

    const { id } = data as TokenPayload;

    request.idOwner = id;

    return next();
  } catch (error) {
    return response.status(401).json({ error: "Token invalid" });
  }
};

export default authMiddleware;
