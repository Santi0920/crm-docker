import React from "react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  change?: string; 
  changeColor?: "green" | "red" | "gray"; 
  highlight?: boolean; 
  squareColor?: "green" | "blue" | "purple" | "red";
  squareLogoColor?: string;
  icon?: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  change,
  text,
  changeColor = "green",
  highlight = false,
  squareColor = "green",
  squareLogoColor = "white",
  icon
}) => {
  const changeClass =
    changeColor === "green"
      ? "text-green-500"
      : changeColor === "red"
      ? "text-red-500"
      : "text-gray-500";

    const changeSquare = 
    changeColor === "green" ? "bg-green-100/40" : 
    changeColor === "red" ? "bg-red-100/40" : "bg-gray-100/40";

    const changeBold = 
    title === "Stock CRÍTICO" ? "font-extrabold" : "font-bold";

    const borderClass = highlight ? "border border-red-300" : "";

    
    const squareBg =
    squareColor === "green"
      ? "bg-green-100"
      : squareColor === "blue"
      ? "bg-blue-100"
      : squareColor === "purple"
      ? "bg-purple-100"
      : "bg-red-100";

    const squareLogo = squareLogoColor || "text-gray-500";

  return (
    <div className={`bg-white p-4 rounded-lg shadow ${borderClass}`}>
        <div className="flex items-center justify-between mb-2">
            <p className={`text-sm text-gray-600 text-lg ${changeBold}`}>{title}</p>
            <div className={`w-8 h-8 flex items-center justify-center rounded-md ${squareBg}`}>
                <span className={`text-sm font-bold ${squareLogo}`}>{icon}</span>
            </div>
        </div>
        
        <p className="text-xl font-bold">{value}</p>
        {(change || text) && (
        <div className="flex items-center gap-2 mt-2">
            {change && (
            <span
                className={`text-sm ${changeClass} font-bold flex items-center justify-center w-14 h-7 rounded-lg ${changeSquare} transition-all duration-200 ease-out group-hover:-translate-y-[1px] group-hover:shadow-sm`}
            >
                {change}
            </span>
            )}
            {text && <span className="text-gray-400 font-semibold">{text}</span>}
        </div>
        )}

    </div>
  );
};
