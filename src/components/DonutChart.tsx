import React from "react";
import { Pie, PieChart, ResponsiveContainer, Cell, Label, Legend } from "recharts";

const DonutChart = ({ data, year }) => {
  const pieData = Object.entries(data).map(([genre, count], index) => ({
    name: genre,
    value: count,
  }));

  // Define an array of colors for the slices
  const colors = ["#a78bfa", "#d946ef", "#f43f5e", "#14b8a6", "#06b6d4"];

  return (
    <ResponsiveContainer width="100%" height={300} className={"max-w-96"}>
      <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 15 }}>
        <Legend
          height={40}
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          iconSize={12}
          formatter={renderColorfulLegendText}
        />
        <Pie
          data={pieData}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={80}
          innerRadius={60}
          paddingAngle={2}
          label={({ name, value }) => `${value}`} // Display the value inside each slice
          labelLine={false}
        >
          {/* Apply different colors to each slice */}
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
          {/* Add a central label to display the year */}
          <Label
            content={<CustomLabel value1={year} viewBox={["50%", "50%"]} />}
            width={100}
            position="center"
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

const renderColorfulLegendText = (value: string, entry: any) => {
  return <span className={"text-sm sm:text-base font-medium px-2 text-slate-600"}>{value}</span>;
};

function CustomLabel({ viewBox, value1 }) {
  const { cx, cy } = viewBox;
  return (
    <text x={cx} y={cy} fill="#3d405c" textAnchor="middle" dominantBaseline="central">
      <tspan alignmentBaseline="middle" fontSize="26">
        {value1}
      </tspan>
    </text>
  );
}

export default DonutChart;
