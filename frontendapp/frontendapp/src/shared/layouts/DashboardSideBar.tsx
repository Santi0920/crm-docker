import { Outlet, NavLink } from "react-router-dom";
import {
  FaBoxes,
  FaUsers,
  FaDollarSign,
  FaShoppingBag,
  FaBoxOpen,
  FaTruck,
  FaUserTie,
  FaChartBar,
  FaFileAlt,
  FaUserShield,
  FaShieldAlt,
  FaBars,
  FaUserCircle,
  FaSignOutAlt,
  FaCog
} from "react-icons/fa";

import { useSidebar } from "@/shared/hooks/dashboard/useSidebar";
import { useProfileMenu } from "@/shared/hooks/dashboard/useProfileMenu";
import { DashboardHeader } from "./DashboardHeader";

const linkBase =
  "px-4 py-2 flex items-center gap-2 transition-colors cursor-pointer";

const activeLink = "bg-red-600 text-white";
const inactiveLink = "hover:bg-gray-800 text-gray-300";

export const DashboardSideBar = () => {
  const sidebar = useSidebar();
  const profile = useProfileMenu();

  return (
    <div className="flex h-screen bg-main overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`
          fixed z-30 top-0 left-0 h-full bg-black text-white flex flex-col justify-between
          w-64 transition-transform duration-300
          md:translate-x-0 md:static 
          ${sidebar.open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* ...logo + menu */}
                <div>
          {/* Logo */}
          <div className="p-4 text-center border-b border-gray-800">
            <img
              src="/src/assets/OriginalLogo.png"
              className="w-24 mx-auto mb-2"
            />
            <h2 className="font-bold">Sistema CRM</h2>
            <p className="text-xs text-gray-400">
              Granja Villa Morales del Valle S.A.S
            </p>
          </div>

          {/* Menu */}
          <nav className="mt-4">
            <ul>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? activeLink : inactiveLink}`
                }
              >
                <FaBoxes /> Panel
              </NavLink>

              <NavLink
                to="/clients"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? activeLink : inactiveLink}`
                }
              >
                <FaUsers /> Clientes
              </NavLink>

              <NavLink to="/billing" className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : inactiveLink}`
              }>
                <FaDollarSign /> Ventas y Facturación
              </NavLink>

              <li className={`${linkBase} ${inactiveLink}`}>
                <FaShoppingBag /> Compras
              </li>

              <li className={`${linkBase} ${inactiveLink}`}>
                <FaBoxes /> Inventarios
              </li>

              <li className={`${linkBase} ${inactiveLink}`}>
                <FaBoxOpen /> Productos y Catálogos
              </li>

              <li className={`${linkBase} ${inactiveLink}`}>
                <FaTruck /> Proveedores
              </li>

              <li className={`${linkBase} ${inactiveLink}`}>
                <FaUserTie /> Asesores Comerciales
              </li>

              <NavLink to="/reports" className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : inactiveLink}`
              }>
                <FaChartBar /> Reportes
              </NavLink>

              <li className={`${linkBase} ${inactiveLink}`}>
                <FaFileAlt /> Gestión Documental
              </li>

              <p className="px-4 py-3 text-xs text-gray-500 uppercase">
                Gestión Administrativa
              </p>

              <NavLink to="/settings/users" className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : inactiveLink}`
              }>
                <FaUserShield /> Usuarios
              </NavLink>

              <NavLink to="/settings/audit" className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : inactiveLink}`
              }>
                <FaShieldAlt /> Auditoría
              </NavLink>
            </ul>
          </nav>
        </div>

        {/* User */}
        <div ref={profile.ref} className="relative p-4 border-t border-gray-800">
          <button
            onClick={profile.toggle}
            className="w-full flex items-center gap-3 hover:bg-gray-800 p-2 rounded-lg transition"
          >
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center font-bold">
              JD
            </div>
            <div className="text-left">
              <p className="text-sm font-bold">Juan D. Abella</p>
              <p className="text-xs text-gray-400">Vicepresidente</p>
            </div>
          </button>

          <div
            className={`
              absolute bottom-20 left-4 right-4 bg-[#111]
              rounded-xl shadow-xl border border-gray-700
              transform transition-all duration-200 origin-bottom
              ${
                profile.open
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }
            `}
          >
            <ul className="py-2 text-sm">
              <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-800">
                <FaUserCircle /> Ver perfil
              </li>
              <li className="px-4 py-2 flex items-center gap-2 hover:bg-gray-800">
                <FaCog /> Configuración
              </li>
              <li className="border-t border-gray-700 my-1" />
              <li className="px-4 py-2 flex items-center gap-2 text-red-400 hover:bg-red-500/10">
                <FaSignOutAlt /> Cerrar sesión
              </li>
            </ul>
          </div>
        </div>
      </aside>

      {sidebar.open && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={sidebar.close}
        />
      )}

      <div className="flex-1 flex flex-col">
        <header className="md:hidden bg-surface shadow px-4 py-3 flex items-center">
          <button onClick={sidebar.toggle}>
            <FaBars size={22} />
          </button>

          <h2 className="text-lg font-bold ml-auto">
            Sistema CRM
          </h2>
        </header>

        <main className="flex-1 p-4 overflow-auto bg-main text-main">

          {/* HEADER GLOBAL */}
          <DashboardHeader
            currentBranch="Cali"
            city="Ciudad 2K"
            onSearch={(value) => console.log("Buscar:", value)}
            onBranchChange={(branch) => console.log("Sucursal cambiada:", branch)}
          />

          {/* CONTENIDO DINÁMICO */}
          <Outlet />

        </main>
      </div>
    </div>
  );
};
