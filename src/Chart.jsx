
import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
  ResponsiveContainer,
  Label
} from "recharts";

export default function Chart({data}) {

  const suitableData = Object.entries(data).map(([key,value])=>{return { name: key, y: value/1000000}});
  console.log(suitableData)
	return (
    <ResponsiveContainer aspect={1.33}  style={{direction: 'ltr'}}>
		<BarChart data={suitableData}>
			<Bar dataKey="y" fill="#0B5ED7" />
			<XAxis dataKey="name">
      <Label value="ماه" offset={-5} position="insideBottom" />
        </XAxis>
			<YAxis unit='M' >
      </YAxis>
		</BarChart>
    </ResponsiveContainer>
	);
};

