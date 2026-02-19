-- =========================
-- TENANTS
-- =========================
INSERT INTO auth_tenants (id, name, status, createdAt) VALUES
(1, 'Empresa Alpha', 'ACTIVO', NOW()),
(2, 'Empresa Beta', 'ACTIVO', NOW());

-- =========================
-- USERS (GLOBALES)
-- =========================
INSERT INTO auth_users (id, nombre, apellidos, email, passwordHash, estado, createdAt) VALUES
(1, 'Juan', 'Pérez', 'juan@correo.com', 'hash123', 'ACTIVO', NOW()),
(2, 'Ana', 'Gómez', 'ana@correo.com', 'hash456', 'ACTIVO', NOW()),
(3, 'Carlos', 'Ruiz', 'carlos@correo.com', 'hash789', 'ACTIVO', NOW());

-- =========================
-- USER ↔ TENANT
-- =========================
INSERT INTO auth_user_tenants (userId, tenantId, status) VALUES
(1, 1, 'ACTIVO'),
(2, 1, 'ACTIVO'),
(3, 2, 'ACTIVO');

-- =========================
-- BRANCHES (SEDES)
-- =========================
INSERT INTO auth_branches (id, tenantId, name, code) VALUES
(1, 1, 'Sede Principal Alpha', 'ALPHA-001'),
(2, 1, 'Sede Norte Alpha', 'ALPHA-002'),
(3, 2, 'Sede Central Beta', 'BETA-001');

-- =========================
-- ROLES (POR TENANT)
-- =========================
INSERT INTO auth_roles (id, tenantId, name, description) VALUES
(1, 1, 'Admin', 'Administrador Empresa Alpha'),
(2, 1, 'Empleado', 'Empleado Empresa Alpha'),
(3, 2, 'Admin', 'Administrador Empresa Beta');

-- =========================
-- MODULES (GLOBALES)
-- =========================
INSERT INTO auth_modules (id, name, `key`) VALUES
(1, 'Usuarios', 'users'),
(2, 'Sucursales', 'branches'),
(3, 'Ventas', 'sales');

-- =========================
-- PERMISSIONS (GLOBALES)
-- =========================
INSERT INTO auth_permissions (id, moduleId, name, `key`) VALUES
(1, 1, 'Crear usuario', 'create_user'),
(2, 1, 'Editar usuario', 'edit_user'),
(3, 2, 'Crear sucursal', 'create_branch'),
(4, 3, 'Crear venta', 'create_sale');

-- =========================
-- ROLE ↔ PERMISSION (POR TENANT)
-- =========================
INSERT INTO auth_permission_role (roleId, permissionId, tenantId) VALUES
(1, 1, 1),
(1, 2, 1),
(1, 3, 1),
(2, 4, 1),
(3, 1, 2),
(3, 2, 2),
(3, 4, 2);

-- =========================
-- ROLE ↔ USER (POR TENANT)
-- =========================
INSERT INTO auth_role_user (userId, roleId, tenantId) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 2);

-- =========================
-- USER ↔ PERMISSION (POR TENANT)
-- =========================
INSERT INTO auth_permission_user (userId, permissionId, tenantId) VALUES
(2, 4, 1);

-- =========================
-- USER ↔ BRANCH (POR TENANT)
-- =========================
INSERT INTO auth_branch_user (userId, branchId, tenantId) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 2);
