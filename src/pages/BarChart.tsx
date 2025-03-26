import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { reveneuData } from "../Data/chartData";
import { NavLink } from "react-router-dom";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const BarChart = () => {
  const data = {
    labels: reveneuData.map((reveneu) => reveneu.label),
    datasets: [
      {
        label: "Revenue",
        data: reveneuData.map((reveneu) => reveneu.cost),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
 
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly Revenue" },
    },
  };
  const dataY = {
    labels: reveneuData.map((reveneu) => reveneu.label),
    datasets: [
      {
        label: "Revenue",

        data: reveneuData.map((reveneu) => reveneu.cost),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],

        borderWidth: 1,
   
      },
    ],
  };

  const optionsY: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly Revenue" },
    },
  };
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-textColor text-xl">Bar cahrt</h1>
      <h1 className="text-gray/50 text-sm">
        Chart \
        <NavLink
          to={"/bar-chart"}
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-textColor"
          }>
          {" "}
          Bar chart
        </NavLink>
      </h1>
      <div className="flex flex-col  gap-5   items-center justify-center">
        <div className="bg-white shadow-md w-full max-w-xl lg:max-w-4xl p-4">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Bar data={data} options={options} />
          </div>
        </div>
        <div className="bg-white shadow-md w-full max-w-xl lg:max-w-4xl p-4">
          <div className="relative w-full h-[300px] md:h-[400px] flex">
            <Bar data={dataY} options={optionsY} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
