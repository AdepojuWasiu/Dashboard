import React from 'react';
import { PieChart, Pie, Cell } from "recharts";
import path2 from '../../assets/path2.png';

const Piechart = () => {
  const data = [
    { name: "Completed", value: 100 }, // Percentage to fill
    { name: "Remaining", value: 0 } // Remaining percentage
  ];

  const data2 = [
    { name: "Completed", value: 30 }, // Percentage to fill
    { name: "Remaining", value: 70 } // Remaining percentage
  ];

  const colors = ['#9EC6001A', "#6C5DD3"]; // Adjust colors for filled and backgroundbackground: #9EC6001A;

  const colors2 = ["url(#gradient4)", "#e0e0e000"]; // Updated with gradient for the second bar

  return (
    <div className="relative w-[100px] h-[100px] rounded-full">
      {/* Pie Chart */}
      <PieChart width={100} height={100}>
        {/* Define Gradients */}
        <defs>
          <linearGradient id="gradient4" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#33C600" />
            <stop offset="100%" stopColor="#CDF4FF" />
          </linearGradient>
        </defs>

        {/* First Pie */}
        <Pie
          data={data}
          dataKey="value"
          startAngle={90}
          endAngle={-360}
          innerRadius={15}
          outerRadius={30}
          paddingAngle={0}
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>

        {/* Second Pie */}
        <Pie
          data={data2}
          dataKey="value"
          startAngle={90}
          endAngle={-360}
          innerRadius={25}
          outerRadius={30}
          paddingAngle={0}
          cornerRadius={10}
          stroke="none"
        >
          {data2.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors2[index]} />
          ))}
        </Pie>
      </PieChart>

      {/* Overlayed Images */}
      <div className="absolute inset-0 flex flex-col justify-center items-center rounded-full">
        <div className="rounded-full inner-pie p-[10px]">
          <img src={path2} alt="path" />
        </div>
      </div>
    </div>
  );
};

export default Piechart;
