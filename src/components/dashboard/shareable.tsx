import React from "react";

type Item = {
  name: string;
  percent: number;
  color: string;
};

type ShareableProps = {
  title: string;
  data: Item[];
  variant?: "languages" | "categories";
};

export const Shareable = ({ title, data, variant = "languages" }: ShareableProps) => {
  const styles = {
    languages: {
      border: "border-red-300/80",
      gradient: "from-orange-400 to-red-500",
      defaultColor: "#ef476f",
    },
    categories: {
      border: "border-blue-300/80",
      gradient: "from-sky-400 to-purple-500",
      defaultColor: "#8338ec",
    },
  };

  const { border, gradient, defaultColor } = styles[variant];

  return (
    <div className={`border-2 rounded-xl p-3 space-y-3 ${border}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-sm">{title}</h2>
      </div>

      {/* List */}
      <div className="space-y-2">
        {data.slice(0, 4).map((item) => (
          <div key={item.name} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>{item.name}</span>
              <span>{item.percent}%</span>
            </div>
            <div className="w-full h-3 bg-neutral-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${item.percent}%`,
                  background: `linear-gradient(90deg, ${item.color}, ${defaultColor})`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

