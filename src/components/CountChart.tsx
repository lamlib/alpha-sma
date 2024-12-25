"use client";

import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import tailwindConfig from '../../tailwind.config';

const data = [
    {
        name: 'Total',
        count: 53,
        fill: 'white',
    },
    {
        name: 'Girls',
        count: 53,
        fill: tailwindConfig.theme.extend.colors.lamlibColor4,
    },
    {
        name: 'Boys',
        count: 53,
        fill: tailwindConfig.theme.extend.colors.lamlibColor3,
    },
];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

const CountChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            {/* TILTLE */}
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Students</h1>
                <Image src={"/icon/moreDark.png"} alt='Icon more' width={20} height={20}/>
            </div>
            {/* CHART */}
            <div className="relative w-full h-[75%]">
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                        <RadialBar
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row'>
                    <Image src={"/icon/man.png"} alt="The Man icon" width={30} height={30}/>
                    <Image src={"/icon/girl.png"} alt="The Girl icon" width={30} height={30}/>
                </div>
            </div>
            {/* BOTTOM */}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-lamlibColor3 rounded-full"></div>
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-lamlibColor4 rounded-full"></div>
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='text-xs text-gray-300'>Girls (55%)</h2>
                </div>
            </div>
        </div>
    )
}

export default CountChart;  