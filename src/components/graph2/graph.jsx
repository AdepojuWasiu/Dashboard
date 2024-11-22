import React from 'react';
import { PieChart, Pie, Cell } from "recharts";

const Piechart = () => {
  const data = [
    { name: "Completed", value: 100 },
    { name: "Remaining", value: 0 }
  ];

  const data2 = [
    { name: "Completed", value: 25 },
    { name: "Remaining", value: 75 }
  ];

  const data3 = [
    { name: "Completed", value: 60 },
    { name: "Remaining", value: 40 }
  ];

  return (
    <div className="relative w-[200px] h-[200px] shadow-pie rounded-full">
      {/* Pie Chart */}
      <PieChart width={200} height={200}>
        {/* Define Gradients */}
        <defs>
          <linearGradient id="gradient4" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#33C600" />
            <stop offset="100%" stopColor="#CDF4FF" />
          </linearGradient>
          <linearGradient id="gradient5" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#B8B7FF" />
            <stop offset="100%" stopColor="#6C5DD3" />
          </linearGradient>
        </defs>

        {/* First Pie */}
        <Pie
          data={data}
          dataKey="value"
          startAngle={90}
          endAngle={-360}
          innerRadius={50}
          outerRadius={70}
          paddingAngle={0}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={index === 0 ? "#e0e0e0" : "#6C5DD3"} />
          ))}
        </Pie>

        <Pie
          data={data3}
          dataKey="value"
          startAngle={90}
          endAngle={-360}
          innerRadius={45}
          outerRadius={75}
          paddingAngle={0}
        >
          {data3.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={index === 0 ? "url(#gradient4)" : "#e0e0e01A"} />
          ))}
        </Pie>

        {/* Second Pie */}
        <Pie
          data={data2}
          dataKey="value"
          startAngle={90}
          endAngle={-360}
          innerRadius={40}
          outerRadius={80}
          paddingAngle={0}
        >
          {data2.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={index === 0 ? "url(#gradient5)" : "#FFFFFF00"} />
          ))}
        </Pie>

        {/* Third Pie */}
     
      </PieChart>

      {/* Overlayed Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center rounded-full">
        <div className="rounded-full inner-pie p-[10px]">
          <p>82.3%</p>
          <p>Total</p>
        </div>
      </div>
    </div>
  );
};

export default Piechart;
