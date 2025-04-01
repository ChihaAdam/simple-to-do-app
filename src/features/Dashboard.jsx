import { PieChart, Cell, Pie, Legend } from "recharts"
import { useSelector } from "react-redux";
import { completedTasks, pendingTasks } from "../utils/state/store";
import { useEffect, useState } from "react";

const pieColors = ["#0088FE", "#00C49F"];

function Dashboard() {
  const completed = useSelector(completedTasks);
  const pending = useSelector(pendingTasks);
  const [chartDimensions, setChartDimensions] = useState({ width: 400, height: 400 });

  const PieData = [
    { name: "Completed", value: completed.length },
    { name: "Pending", value: pending.length },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) { 
        setChartDimensions({ width: 300, height: 300 });
      } else if (width < 768) { 
        setChartDimensions({ width: 350, height: 350 });
      } else { 
        setChartDimensions({ width: 400, height: 400 });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-fit md:max-w-2xl lg:max-w-4xl mx-auto p-4 sm:p-6 my-4 sm:my-8 bg-white dark:bg-gray-800 
                    rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 animate-fadeInTransitive 
                    flex flex-col justify-center items-center">
      <h2 className="mb-4 sm:mb-8 text-xl sm:text-2xl lg:text-3xl font-bold text-center bg-gradient-to-r from-blue-600 
                    to-cyan-500 bg-clip-text text-transparent">
        Task Analytics Overview
      </h2>
        <PieChart width={chartDimensions.width} height={chartDimensions.height}>
          <Pie
            data={PieData}
            innerRadius={chartDimensions.width * 0.175}
            outerRadius={chartDimensions.width * 0.25}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {PieData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={pieColors[index]} />
            ))}
          </Pie>
          <Legend 
            layout="vertical"
            wrapperStyle={{
              paddingTop: '20px'
            }}
          />
        </PieChart>
      </div>
  );
}

export default Dashboard;