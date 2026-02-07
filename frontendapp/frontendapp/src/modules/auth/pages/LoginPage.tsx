import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { login as loginService } from "../api/auth.service";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; 
import "sweetalert2/dist/sweetalert2.min.css";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await loginService({ email, password });
      localStorage.setItem("token", res.token);
      navigate("/dashboard");
    } catch (err: any) {
        Swal.fire({
            icon: "error",
            title: "Error de acceso",
            text: "¡El email o la contraseña es incorrecta!",
            confirmButtonText: "OK",
            customClass: {
                confirmButton: "swal2-confirm-custom", 
            },
        });

    }
  };

  return (
    <div
      className="
        bg-white w-full max-w-md p-8 rounded-xl shadow-card
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      <div className="text-center mb-6">
        <span className="inline-block bg-primary text-white px-4 py-1 rounded-lg font-bold text-lg">
          GVM
        </span>
        <h2 className="text-xl font-bold mt-3">GRANJA VILLA MORALES S.A.S</h2>
        <p className="text-gray-500">Sistema CRM</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* EMAIL */}
        <div>
          <label className="block text-lg mb-1 transition-colors">
            Correo Electrónico
          </label>
          <input
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full px-4 py-2
              border border-gray-300 rounded-lg
              transition-all duration-200 ease-out
              focus:border-primary
              focus:ring-2 focus:ring-primary/30
              focus:shadow-sm
              outline-none
            "
            required
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label className="block text-lg mb-1 transition-colors">
            Contraseña
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full px-4 py-2 pr-12
                border border-gray-300 rounded-lg
                transition-all duration-200 ease-out
                focus:border-primary
                focus:ring-2 focus:ring-primary/30
                focus:shadow-sm
                outline-none
              "
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
                absolute inset-y-0 right-3
                flex items-center
                text-gray-400
                transition-colors duration-200
                hover:text-primary
                active:scale-95
              "
              aria-label={
                showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
              }
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>

        {/* OPTIONS */}
        <div className="flex items-center justify-between text-sm">
          <label
            className="
              flex items-center gap-2
              transition-colors duration-200 ease-in-out
              hover:text-primary
            "
          >
            <input type="checkbox" />
            Recordarme
          </label>

          <a
            href="#"
            className="
              text-[var(--color-primary)]
              transition-all duration-300 ease-in-out
              hover:text-[var(--color-primary-hover)]
              hover:underline
              hover:underline-offset-4
            "
          >
            ¿Olvidó su contraseña?
          </a>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="
            w-full
            bg-[var(--color-primary)]
            text-white
            py-3 rounded-lg font-semibold

            transition-all duration-300 ease-in-out

            hover:bg-[var(--color-primary-hover)]
            hover:-translate-y-[1px]
            hover:shadow-lg

            active:bg-[var(--color-primary-hover)]
            active:scale-[0.98]
            active:shadow-md
          "
        >
          Ingresar →
        </button>
      </form>
    </div>
  );
};
