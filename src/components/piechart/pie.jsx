import React from 'react';

import { PieChart, Pie, Cell } from "recharts";


const Piechart = () => {

  const data = [
    { name: "Completed", value: 82.3 }, 
    { name: "Remaining", value: 17.7 } 
  ];

  const colors = ["#6C5DD3", "#e0e0e0"];
  return (
  
    <div>
    <PieChart width={58} height={58}>
    <Pie
      data={data}
      dataKey="value"
      startAngle={90}
      endAngle={-270}
      innerRadius={23}
      outerRadius={28}
      paddingAngle={5}
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index]} />
      ))}
    </Pie>
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      style={{ fontSize: "13px", fontWeight: "600", color: '#0049C6' }}
    >
      86%
    </text>
  </PieChart>
  </div>
  )
}

export default Piechart