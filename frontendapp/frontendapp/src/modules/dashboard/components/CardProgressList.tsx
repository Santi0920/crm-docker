import React from "react";

interface ProgressItem {
  name: string;
  value: string | number;
  percentage: number; // 0 a 100
  color?: string; // bg-color de la barra
}

interface CardProgressListProps {
  title: string;
  items: ProgressItem[];
}

export const CardProgressList: React.FC<CardProgressListProps> = ({
  title,
  items,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <p className="font-bold mb-2 text-lg">{title}</p>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index}>
            <p className="font-medium">{item.name}</p>
            <div className="h-2 w-full bg-gray-200 rounded-full">
              <div
                className={`h-2 rounded-full ${item.color || "bg-red-500"}`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
