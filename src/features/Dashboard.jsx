import { PieChart,Cell,Pie,Legend } from "recharts"
import { useSelector } from "react-redux";
import { completedTasks,pendingTasks } from "../utils/state/store";
const pieColors = ["#0088FE", "#00C49F"];
function Dashboard() {
  const completed = useSelector(completedTasks);
  const pending = useSelector(pendingTasks);
  const PieData = [
    { name: "Completed", value: completed.length },
    { name: "Pending", value: pending.length },
  ];
  return (
    <div className=" w-fit mx-auto p-6 my-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl">
      <h2 className="mb-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Task Analytics Overview</h2>
      <PieChart width={400} height={400}>
      <Pie
        data={PieData}
        cx={200}
        cy={200}
        innerRadius={70}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {PieData.map((_, index) => (
          <Cell key={`cell-${index}`} fill={pieColors[index]} />
        ))}
      </Pie>
      <Legend layout="vertical" />
    </PieChart>
    </div>
  )
}

export default Dashboard
