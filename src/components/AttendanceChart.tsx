"use client";

import Image from "next/image";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import tailwindConfig from "../../tailwind.config";

const data = [
    {
        name: 'Mon',
        present: 60,
        absent: 40,
    },
    {
        name: 'Tu',
        present: 70,
        absent: 60,
    },
    {
        name: 'We',
        present: 90,
        absent: 75,
    },
    {
        name: 'Th',
        present: 90,
        absent: 75,
    },
    {
        name: 'Fr',
        present: 65,
        absent: 55,
    },
];
const AttendanceChart = () => {
    return (
        <div className="bg-white rounded-lg p-4 h-full">
            {/* TILTLE */}
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src={"/icon/moreDark.png"} alt='Icon more' width={20} height={20} />
            </div>
            {/* CHART */}
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
                    <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                    <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }} />
                    <Legend
                        align="left"
                        verticalAlign="top"
                        wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
                    />
                    <Bar
                        dataKey="present"
                        fill={tailwindConfig.theme.extend.colors.lamlibColor3}
                        legendType="circle"
                        radius={[10, 10, 0, 0]}
                    />
                    <Bar
                        dataKey="absent"
                        fill={tailwindConfig.theme.extend.colors.lamlibColor4}
                        legendType="circle"
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart;