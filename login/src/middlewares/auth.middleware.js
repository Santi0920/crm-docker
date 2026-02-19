import jwt from "jsonwebtoken";
import {
  findActiveTenantByUserId,
  findUserBranches,
  findUserById,
  findUserModules,
  findUserPermissions,
  findUserRoles
} from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: "Token requerido" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded?.id) {
      return res.status(401).json({ message: "Token inválido" });
    }

    const user = await findUserById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "Token inválido" });
    }

    const tenant = await findActiveTenantByUserId(user.id);
    const tenantId = tenant?.tenant_id;

    let roles = [];
    let permissions = [];
    let modules = [];
    let branches = [];

    if (tenantId) {
      [roles, permissions, modules, branches] = await Promise.all([
        findUserRoles(user.id, tenantId),
        findUserPermissions(user.id, tenantId),
        findUserModules(user.id, tenantId),
        findUserBranches(user.id, tenantId)
      ]);
    }

    req.user = {
      id: user.id,
      nombre: user.nombre,
      email: user.email
    };
    req.roles = roles;
    req.permissions = permissions;
    req.modules = modules;
    req.branches = branches;
    req.tenant = tenantId ? { id: tenantId, name: tenant.tenant_name } : null;

    next();
  } catch (err) {
    res.status(401).json({ message: "Token inválido" });
  }
};

export default authMiddleware;
