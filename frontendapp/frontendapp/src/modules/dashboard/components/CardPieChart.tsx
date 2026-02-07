import React from "react";

interface CardPieChartProps {
  title: string;
  children?: React.ReactNode; // Aquí puedes poner tu gráfico circular
  height?: string; // altura opcional, por defecto 64
}

export const CardPieChart: React.FC<CardPieChartProps> = ({
  title,
  children,
  height = "h-64",
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <p className="font-bold mb-2 text-lg">{title}</p>
      <div
        className={`${height} flex items-center justify-center bg-gray-100 rounded-lg text-gray-400`}
      >
        {children || "[Gráfico circular aquí]"}
      </div>
    </div>
  );
};