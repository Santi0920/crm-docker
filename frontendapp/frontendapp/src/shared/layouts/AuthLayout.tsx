import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      
      {/* LADO IZQUIERDO */}
      <div className="hidden lg:flex flex-col justify-center px-16 bg-white">
        <h1 className="text-3xl font-bold mb-20 mt-[2rem]">
          CRM Corporativo • Acceso Seguro
        </h1>
        <img
          src="src/assets/granja.png"
          alt="GVM"
          className="w-96 mb-8 mx-auto"
        />


        <h1 className="text-4xl font-extrabold mb-4">
          Sistema CRM Corporativo
        </h1>
        <div className="text-lg">
          <p className="text-gray-500 mb-8">
            Plataforma diseñada para gestionar, centralizar y optimizar la relación con clientes.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li
              className="
                group
                flex items-center gap-4
                rounded-lg px-2 py-1
                transition-all duration-200 ease-out
                hover:bg-gray-50
              "
            >
              <span
                className="
                  flex items-center justify-center
                  w-10 h-10 rounded-lg
                  bg-gray-200
                  transition-all duration-200 ease-out
                  group-hover:-translate-y-[1px]
                  group-hover:shadow-sm
                "
              >
                👥
              </span>

              <span className="transition-colors duration-200">
                Gestión de clientes y facturación
              </span>
            </li>


            <li
              className="
                group
                flex items-center gap-4
                rounded-lg px-2 py-1
                transition-all duration-200 ease-out
                hover:bg-gray-50
              "
            >
              <span
                className="
                  flex items-center justify-center
                  w-10 h-10 rounded-lg
                  bg-gray-200
                  transition-all duration-200 ease-out
                  group-hover:-translate-y-[1px]
                  group-hover:shadow-sm
                "
              >
                🔐
              </span>

              <span className="transition-colors duration-200">
                Control administrativo y reportes
              </span>
            </li>

            <li
              className="
                group
                flex items-center gap-4
                rounded-lg px-2 py-1
                transition-all duration-200 ease-out
                hover:bg-gray-50
              "
            >
              <span
                className="
                  flex items-center justify-center
                  w-10 h-10 rounded-lg
                  bg-gray-200
                  transition-all duration-200 ease-out
                  group-hover:-translate-y-[1px]
                  group-hover:shadow-sm
                "
              >
                📊
              </span>

              <span className="transition-colors duration-200">
                Gestión de proyectos y KPIs
              </span>
            </li>
          </ul>

        </div>
        <h1 className="text-base mt-[6rem] text-gray-500">
          <img src="src/assets/LogoSH.png" alt="Santiago Henao Logo" className="w-7 h-7 mr-1 inline-block opacity-50" />
           © 2026 <span className="font-bold">Santiago Henao Dev.</span> Todos los derechos reservados.
        </h1>
      </div>

      {/* LADO DERECHO */}
      <div className="flex items-center justify-center bg-gradient-to-br from-soft to-primary/65">
        <Outlet />
      </div>
    </div>
  );
};
