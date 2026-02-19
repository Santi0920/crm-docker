import express from "express";
import { login } from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/login", login);

router.get("/me", authMiddleware, (req, res) => {
  res.json({
    user: req.user,
    roles: req.roles || [],
    permissions: req.permissions || [],
    modules: req.modules || [],
    branches: req.branches || [],
    tenant: req.tenant || null
  });
});

export default router;
