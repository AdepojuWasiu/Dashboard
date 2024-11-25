
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";

const data = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 40 },
  { name: "Mar", value: 70, highlight: true, gradient: "url(#gradient4)", color: "#4CAF50" }, // Gradient 4
  { name: "Apr", value: 50 },
  { name: "May", value: 50 },
  { name: "Jun", value: 120, highlight: true, gradient: "url(#gradient5)", color: "#8A2BE2" }, // Gradient 5
  { name: "Jul", value: 50 },
  { name: "Aug", value: 50 },
  { name: "Sep", value: 20 },
  { name: "Oct", value: 80, highlight: true, gradient: "url(#gradient6)", color: "#FF69B4" }, // Gradient 6
  { name: "Nov", value: 50 },
  { name: "Dec", value: 50 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "#fff", border: "1px solid #ccc", padding: "10px" }}>
        <p>{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const Barchart = () => {
  return (
        <div>
              <div
      className="mt-10 sm:flex hidden border-[2px] border-[#fff] rounded-xl bg-[#ffff]"
    >
      <div className='relative'>
      <BarChart
        width={500}
        height={200}
        data={data}
        margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
      >
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
          <linearGradient id="gradient6" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF4CE2" />
            <stop offset="100%" stopColor="#FFB7F5" />
          </linearGradient>
        </defs>

        {/* X and Y Axes */}
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} tick={false} />
        <Tooltip content={<CustomTooltip />} />

        {/* Bars */}
        <Bar dataKey="value" radius={[8, 8, 8, 8]}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.highlight ? entry.gradient : "#e5e5e5"} 
            />
          ))}
        </Bar>
      </BarChart>

      <div 
            style={{
              position: "absolute",
              width: "10px",
              height: "10px",
              border: `3px solid `,
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              top: '27%',
              right: '67.5%',
              color: '#4CAF50'
            }}
          />
            <div 
            style={{
              position: "absolute",
              width: "10px",
              height: "10px",
              border: `3px solid `,
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              top: '22%',
              right: '16.5%',
              color: '#FF69B4'
            }}
          />

          <div 
            style={{
              position: "absolute",
              width: "10px",
              height: "10px",
              border: `3px solid `,
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              top: '0%',
              right: '45.5%',
              color: '#8A2BE2'
            }}
          />
      </div>
    
    </div>
       

 {/* bar chart for mobile view */}
    <div
      className="mt-10 sm:hidden flex border-[2px] border-[#fff] rounded-xl bg-[#ffff]"
    >
    <div className='relative'>
      <BarChart
        width={300}
        height={200}
        data={data}
        margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
      >
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
          <linearGradient id="gradient6" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF4CE2" />
            <stop offset="100%" stopColor="#FFB7F5" />
          </linearGradient>
        </defs>

        {/* X and Y Axes */}
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} tick={false} />
        <Tooltip content={<CustomTooltip />} />

        {/* Bars */}
        <Bar dataKey="value" radius={[6, 6, 6, 6]}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.highlight ? entry.color : "#e5e5e5"} 
            />
          ))}
        </Bar>
      </BarChart>
      <div 
            style={{
              position: "absolute",
              width: "10px",
              height: "10px",
              border: `3px solid `,
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              top: '27%',
              right: '60.5%',
              color: '#4CAF50'
            }}
          />
            <div 
            style={{
              position: "absolute",
              width: "10px",
              height: "10px",
              border: `3px solid `,
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              top: '22%',
              right: '13.8%',
              color: '#FF69B4'
            }}
          />

          <div 
            style={{
              position: "absolute",
              width: "10px",
              height: "10px",
              border: `3px solid `,
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              top: '0%',
              right: '40.5%',
              color: '#8A2BE2'
            }}
          />  
    </div>
      
    </div>
        </div>
  );
};

export default Barchart;

