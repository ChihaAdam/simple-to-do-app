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
    <>
    <div className="flex flex-col justify-center items-center w-fit border-1 m-auto p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 dark:text-white">
      <h2 className="m-0 text-2xl font-bold text-blue-500">Tasks distribution</h2>
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
    <div>

    </div>
    </>
  )
}

export default Dashboard
