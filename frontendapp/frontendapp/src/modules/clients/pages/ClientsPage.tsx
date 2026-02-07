import { useEffect, useState } from "react";
import { SkeletonRow } from "../components/SkeletonRow";

const PAGE_SIZE = 3;

const clientes = [
  {
    name: "Carbones y Parrilla",
    contact: "cyparrilla@cvp.com",
    phone: "+57 3218712282",
    segment: "Empresarial",
    balance: 100000000,
    status: "Activo",
    logo: "https://via.placeholder.com/40",
  },
  {
    name: "Simon Parilla",
    contact: "sparilla@simonparilla.com",
    phone: "+57 3113389087",
    segment: "Restaurante",
    balance: 1500000,
    status: "Activo",
    logo: "https://via.placeholder.com/40",
  },
  {
    name: "Tuan & Tuy",
    contact: "gerencia@tuantuy.com",
    phone: "+57 324660487",
    segment: "PYME",
    balance: -500000,
    status: "Inactivo",
    logo: "https://via.placeholder.com/40",
  },
  {
    name: "Taco Fino",
    contact: "gerencia@tacofino.com",
    phone: "+57 3518763399",
    segment: "PYME",
    balance: -3000000,
    status: "Inactivo",
    logo: "https://via.placeholder.com/40",
  },
];

export const ClientsPage = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const totalPages = Math.ceil(clientes.length / PAGE_SIZE);
  const paginated = clientes.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Gestión de Clientes</h1>
        <p className="text-gray-500">
          Administra clientes y controla sus saldos
        </p>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {clientes.map((c, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-4 shadow transition-all duration-300 hover:shadow-md"
          >
            <div className="flex items-center gap-3 mb-3">
              <img src={c.logo} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">{c.name}</p>
                <p className="text-xs text-gray-400">{c.contact}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-400">Segmento</p>
                <p>{c.segment}</p>
              </div>
              <div>
                <p className="text-gray-400">Estado</p>
                <span
                  className={`px-2 py-0.5 text-xs rounded-full ${
                    c.status === "Activo"
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {c.status}
                </span>
              </div>
              <div>
                <p className="text-gray-400">Saldo</p>
                <p
                  className={`font-semibold ${
                    c.balance < 0 ? "text-red-500" : ""
                  }`}
                >
                  ${c.balance.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Desktop table */}
      <div className="hidden md:block bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {["Cliente", "Contacto", "Segmento", "Saldo", "Estado", "Acciones"].map(h => (
                <th
                  key={h}
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y">
            {loading
              ? Array.from({ length: 5 }).map((_, i) => <SkeletonRow key={i} />)
              : clientes.map((c, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50 transition-all duration-200"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <img src={c.logo} className="w-10 h-10 rounded-full" />
                        <div>
                          <p className="font-medium">{c.name}</p>
                          <p className="text-xs text-gray-400">
                            ID: CL-{1020 + idx}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-4 py-3 text-sm">
                      <p>{c.contact}</p>
                      <p className="text-xs text-gray-400">{c.phone}</p>
                    </td>

                    <td className="px-4 py-3">
                      <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-600">
                        {c.segment}
                      </span>
                    </td>

                    <td
                      className={`px-4 py-3 font-semibold ${
                        c.balance < 0 ? "text-red-500" : "text-gray-900"
                      }`}
                    >
                      ${c.balance.toLocaleString()}
                    </td>

                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          c.status === "Activo"
                            ? "bg-green-100 text-green-600"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {c.status}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      <button className="text-gray-400 hover:text-gray-700 transition">
                        👁️
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 pt-4">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`
              w-9 h-9 rounded-lg text-sm font-semibold
              transition-all duration-200
              ${
                page === i + 1
                  ? "bg-red-600 text-white shadow"
                  : "bg-gray-100 hover:bg-gray-200"
              }
            `}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
