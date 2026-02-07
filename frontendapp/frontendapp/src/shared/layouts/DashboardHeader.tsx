import React from "react";
import { FaBuilding, FaBell, FaQuestionCircle } from "react-icons/fa";

interface DashboardHeaderProps {
  currentBranch: string; // Nombre de la sucursal
  city: string;          // Ciudad
  onSearch?: (value: string) => void;
  onBranchChange?: (branch: string) => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  currentBranch,
  city,
  onSearch,
  onBranchChange,
}) => {
  return (
    <div className="flex items-center justify-between bg-white px-6 py-3 rounded-lg shadow mb-4">
      {/* Sucursal actual */}
      <div className="flex items-center gap-3">
        <FaBuilding className="text-gray-500 text-xl" />
        <div className="flex flex-col">
          <span className="text-sm text-gray-400">SUCURSAL ACTUAL</span>
          <select
            value={currentBranch}
            onChange={(e) => onBranchChange && onBranchChange(e.target.value)}
            className="font-semibold text-gray-700 text-sm bg-transparent focus:outline-none"
          >
            <option value={currentBranch}>
              {currentBranch}, {city}
            </option>
            {/* Aquí puedes agregar más sucursales */}
          </select>
        </div>
      </div>

      {/* Barra de búsqueda */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Buscar clientes, órdenes o proveedores"
          onChange={(e) => onSearch && onSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
        />
      </div>

      {/* Iconos de notificación y ayuda */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <FaBell className="text-gray-500 text-xl cursor-pointer" />
          {/* Indicador de notificación */}
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
        <FaQuestionCircle className="text-gray-500 text-xl cursor-pointer" />
      </div>
    </div>
  );
};
