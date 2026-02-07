import React from "react";

interface CardChartProps {
  title: string;
  children: React.ReactNode; // Para insertar gráficos o contenido
  height?: string; // opcional, altura de la tarjeta
}

export const CardChart: React.FC<CardChartProps> = ({
  title,
  children,
  height = "h-64",
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <p className="font-bold mb-2 text-lg">{title}</p>
      <div className={`${height} bg-gray-100 rounded-lg flex items-center justify-center text-gray-400`}>
        {children || "[Gráfico aquí]"}
      </div>
    </div>
  );
};
