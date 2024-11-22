import React from 'react';

import { PieChart, Pie, Cell } from "recharts";


const Piechart = () => {

  const data = [
    { name: "Completed", value: 82.3 }, // Percentage to fill
    { name: "Remaining", value: 17.7 } // Remaining percentage
  ];

  const colors = ["#6C5DD3", "#e0e0e0"]; // Adjust colors for filled and background
  return (
    // <div>
    //   <PieChart width={200} height={200}>
    //   <Pie
    //     data={data}
    //     dataKey="value"
    //     startAngle={90}
    //     endAngle={-270}
    //     innerRadius={70}
    //     outerRadius={90}
    //     paddingAngle={5}
    //   >
    //     {data.map((entry, index) => (
    //       <Cell key={`cell-${index}`} fill={colors[index]} />
    //     ))}
    //   </Pie>
    //   <text
    //     x="50%"
    //     y="50%"
    //     textAnchor="middle"
    //     dominantBaseline="middle"
    //     style={{ fontSize: "18px", fontWeight: "bold" }}
    //   >
    //     82.3%
    //   </text>
    // </PieChart>
    // </div>

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
      style={{ fontSize: "13px", fontWeight: "600", color: '#6C5DD3' }}
    >
      86%
    </text>
  </PieChart>
  </div>
  )
}

export default Piechart