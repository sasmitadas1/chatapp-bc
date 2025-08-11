import { getAuth } from "@clerk/express";

export const protectedRoute = (req, res, next) => {
  try {
    const { userId } = getAuth(req); // throws if token invalid
    req.userId = userId;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};
