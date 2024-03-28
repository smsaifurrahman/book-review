import React, { useEffect, useState } from 'react';
import { getReadListFromLs } from '../../localStorage';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const ChartComponent = () => {
    const [readList, setReadList] = useState([]);
    // let width =  width = window.innerWidth >= 768 ? 1000 : 500;
    useEffect(() => {
        const readLists = getReadListFromLs() || [];
        setReadList(readLists);
        
    }, []);
  

    return (
        <div>
            
            {readList.length < 1 ? <h1 className='lg:text-3xl text-2xl pt-44 text-orange-600 font-bold flex flex-col items-center justify-center'>You Have Not Selected Any Book Yet <span className='text-xl text-black'>Select at least a book to see data</span></h1> : 
            
            <div className='flex flex-col justify-center items-center'>
            
            <div className="w-full max-w-screen-lg overflow-x-auto">
                <BarChart
                    className="w-full"

                    width={1000} 
                    // className="w-full sm:w-1000 md:w-500"

                    height={500}
                    data={readList}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis dataKey={"totalPages"} />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {readList.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
             </div> 
            
            }
            
        </div>
    );
};

export default ChartComponent;
