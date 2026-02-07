import { FaExclamationTriangle } from "react-icons/fa";

export const ErrorPage = () => (
  <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#ED3500]/90 to-[#ED3500]/40 text-white px-4">

    {/* Logo de la empresa */}
    <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <img
            src="src/assets/OriginalLogo.png"
            alt="Logo de la empresa"
            className="h-24 md:h-32 w-auto object-contain"
        />
    </div>


    {/* Icono grande */}
    <div className="text-9xl animate-bounce mb-6 mt-12 text-white/90">
      <FaExclamationTriangle />
    </div>

    {/* Texto principal */}
    <h1 className="text-6xl md:text-8xl font-extrabold mb-4 drop-shadow-lg text-white/90">
      404
    </h1>

    {/* Subtítulo */}
    <p className="text-xl md:text-2xl mb-8 text-white text-center max-w-md drop-shadow-md">
      Oops! La página que buscas no existe. Tal vez se movió o nunca estuvo aquí.
    </p>

    {/* Botón llamativo */}
    <a
      href="/"
      className="px-8 py-4 bg-white text-[#ED3500] font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
    >
      Volver al inicio
    </a>
  </div>
);
