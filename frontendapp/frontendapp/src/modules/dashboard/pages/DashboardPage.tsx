import React from "react";
import { DashboardCard } from "../components/DashboardCard";
import { CardChart } from "../components/ChartDashboard";
import { CardProgressList } from "../components/CardProgressList";
import { CardPieChart } from "../components/CardPieChart";
import { FaArrowTrendUp, FaPeopleGroup  } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import { IoIosWarning } from "react-icons/io";
import { DashboardHeader } from "../../../shared/layouts/DashboardHeader";


export const DashboardPage = () => {
  return (
    <div className="space-y-2 ">
      {/* Header resumen */}
      <h1 className="text-2xl font-bold">Resumen General</h1>
      <p className="text-gray-500">Información en tiempo real — <span className="font-bold">30 de enero de 2026</span></p>

      {/* Cards resumen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <DashboardCard
                title="Ventas Totales"
                value="$57,560,000"
                change="+17,3%"
                text="vs último mes"
                changeColor="green"
                squareColor="green"
                squareLogoColor="green"
                icon={<FaArrowTrendUp className="w-4 h-4" />}
            />

            <DashboardCard
                title="Clientes Totales"
                value={79}
                change="+5,2%"
                text="vs último mes"
                changeColor="green"
                squareColor="blue"
                squareLogoColor="blue"
                icon={<FaPeopleGroup className="w-4 h-4" />}
            />

            <DashboardCard
                title="C. Recurrentes"
                value={23}
                change="+1,3%"
                text="vs último mes"
                changeColor="green"
                squareColor="purple"
                squareLogoColor="purple"
                icon={<TfiReload className="w-4 h-4" />}
            />

            <DashboardCard
                title="Stock CRÍTICO"
                value="12 items"
                change="-9,3%"
                text="necesita atención"
                changeColor="red"
                squareColor="red"
                squareLogoColor="red"
                icon={<IoIosWarning className="w-4 h-4" />}
                highlight
            />
      </div>

      {/* Evolución de ventas (placeholder gráfico) */}
        <CardChart title="Evolución de Ventas">
        {/* Aquí tu componente de gráfico */}
        </CardChart>


      {/* Ventas por asesor */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CardProgressList
            title="Ventas por Asesor"
            items={[
                { name: "Santiago Henao", value: "$10M COP", percentage: 40, color: "bg-red-500" },
                { name: "Pepito Grajales", value: "$8M COP", percentage: 25, color: "bg-gray-800" },
                { name: "Sofía Saltos", value: "$5M COP", percentage: 20, color: "bg-gray-400" },
                { name: "María José", value: "$3M COP", percentage: 15, color: "bg-gray-300" },
            ]}
        />


        {/* Métodos de pago */}
        <CardPieChart title="Métodos de Pago">
            
        {/* Aquí tu gráfico circular real */}
        </CardPieChart>

      </div>
    </div>
  );
};
