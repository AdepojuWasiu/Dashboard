import React from 'react';
import { PieChart, Pie, Cell } from "recharts";
import path from '../../assets/Charts.png';

const Piechart = () => {
  const data = [
    { name: "Completed", value: 100 }, 
    { name: "Remaining", value: 0 } 
  ];

  const data2 = [
    { name: "Completed", value: 30 }, 
    { name: "Remaining", value: 70 } 
  ];

  const colors = [  '#E2E6FF', "#6C5DD3"]; 

  const colors2 = ["url(#gradient5)", "#e0e0e000"]; 
  const color3 = ['#6C5DD3','#e0e0e000']

  return (
     <div>
      <div className="relative w-[100px] h-[100px] rounded-full md:flex hidden">
      
      {/* Pie Chart */}
      <PieChart width={100} height={100}>

        {/* Gradients */}
        <defs>
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
      <div className="absolute inset-0 flex flex-col justify-center items-center rounded-full ">
        <div className="rounded-full inner-pie p-[10px]">
          <img src={path} alt="path" />
        </div>
      </div>
    </div>

    <div className="relative w-[100px] h-[100px] rounded-full md:hidden flex">
      
      {/* Pie Chart */}
      <PieChart width={100} height={100}>
        {/* Gradients */}
        <defs>
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
            <Cell key={`cell-${index}`} fill={color3[index]} />
          ))}
        </Pie>
      </PieChart>

      {/* Overlayed Images */}
      <div className="absolute inset-0 flex flex-col justify-center items-center rounded-full  ">
        <div className="rounded-full inner-pie p-[10px]">
          <img src={path} alt="path" />
        </div>
      </div>
    </div>
     </div>
  );
};

export default Piechart;
