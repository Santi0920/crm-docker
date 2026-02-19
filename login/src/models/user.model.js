import db from "../config/db.js";

export const findByEmail = async (email) => {
  const [rows] = await db.execute(
    `
    SELECT
      u.id,
      u.nombre,
      u.apellidos,
      u.email,
      u.passwordHash,
      u.estado,
      ut.tenantId AS tenant_id,
      t.name AS tenant_name
    FROM auth_users u
    LEFT JOIN auth_user_tenants ut ON ut.userId = u.id AND ut.status = 'ACTIVO'
    LEFT JOIN auth_tenants t ON t.id = ut.tenantId
    WHERE u.email = ?
    LIMIT 1
    `,
    [email]
  );
  return rows[0];
};



// esto es para auth.middleware
export const findUserById = async (userId) => {
  const [rows] = await db.execute(
    `
    SELECT
      id,
      nombre,
      apellidos,
      email,
      passwordHash,
      estado
    FROM auth_users
    WHERE id = ?
    LIMIT 1
    `,
    [userId]
  );
  return rows[0];
};

export const findActiveTenantByUserId = async (userId) => {
  const [rows] = await db.execute(
    `
    SELECT
      ut.tenantId AS tenant_id,
      t.name AS tenant_name
    FROM auth_user_tenants ut
    INNER JOIN auth_tenants t ON t.id = ut.tenantId
    WHERE ut.userId = ? AND ut.status = 'ACTIVO'
    ORDER BY ut.tenantId
    LIMIT 1
    `,
    [userId]
  );
  return rows[0];
};

export const findUserRoles = async (userId, tenantId) => {
  const [rows] = await db.execute(
    `
    SELECT DISTINCT r.name
    FROM auth_role_user ru
    INNER JOIN auth_roles r ON r.id = ru.roleId
    WHERE ru.userId = ? AND ru.tenantId = ?
    `,
    [userId, tenantId]
  );
  return rows.map((r) => r.name);
};

export const findUserPermissions = async (userId, tenantId) => {
  const [rows] = await db.execute(
    `
    SELECT DISTINCT p.key
    FROM auth_permission_user pu
    INNER JOIN auth_permissions p ON p.id = pu.permissionId
    WHERE pu.userId = ? AND pu.tenantId = ?
    UNION DISTINCT
    SELECT DISTINCT p2.key
    FROM auth_role_user ru
    INNER JOIN auth_permission_role pr ON pr.roleId = ru.roleId AND pr.tenantId = ru.tenantId
    INNER JOIN auth_permissions p2 ON p2.id = pr.permissionId
    WHERE ru.userId = ? AND ru.tenantId = ?
    `,
    [userId, tenantId, userId, tenantId]
  );
  return rows.map((p) => p.key);
};

export const findUserModules = async (userId, tenantId) => {
  const [rows] = await db.execute(
    `
    SELECT DISTINCT m.key
    FROM auth_permission_user pu
    INNER JOIN auth_permissions p ON p.id = pu.permissionId
    INNER JOIN auth_modules m ON m.id = p.moduleId
    WHERE pu.userId = ? AND pu.tenantId = ?
    UNION DISTINCT
    SELECT DISTINCT m2.key
    FROM auth_role_user ru
    INNER JOIN auth_permission_role pr ON pr.roleId = ru.roleId AND pr.tenantId = ru.tenantId
    INNER JOIN auth_permissions p2 ON p2.id = pr.permissionId
    INNER JOIN auth_modules m2 ON m2.id = p2.moduleId
    WHERE ru.userId = ? AND ru.tenantId = ?
    `,
    [userId, tenantId, userId, tenantId]
  );
  return rows.map((m) => m.key);
};

export const findUserBranches = async (userId, tenantId) => {
  const [rows] = await db.execute(
    `
    SELECT DISTINCT b.id, b.name
    FROM auth_branch_user bu
    INNER JOIN auth_branches b ON b.id = bu.branchId
    WHERE bu.userId = ? AND bu.tenantId = ?
    `,
    [userId, tenantId]
  );
  return rows.map((b) => ({ id: b.id, name: b.name }));
};
