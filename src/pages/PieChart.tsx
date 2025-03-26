import { Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartOptions,
} from "chart.js";
import { reveneuData } from "../Data/chartData";
import { NavLink } from "react-router-dom";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
const PieChart = () => {
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
		hoverOffset:30,
      },
    ],
  };
  const options: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: { position: "left" },
      title: { display: true, text: "Revenue Distribution" },
    },
  };

  const dataDoughnut = {
    labels: reveneuData.map((reveneu) => reveneu.label),
    datasets: [
      {
        label: "Revenue",

        fill: false,
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
        cutout: "60%",
        hoverOffset: 20,
      },
    ],
  };

  const optionsDoughnut: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: { position: "right" },
      title: { display: true, text: "Revenue Distribution" },
    },
  };

	return (
	  <div className="flex flex-col gap-2">
      <h1 className="text-textColor text-xl">Pie cahrt</h1>
      <h1 className="text-gray/50 text-sm">
        Chart \
        <NavLink
          to={"/pie-chart"}
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-textColor"
          }>
          {" "}
          Pie chart
        </NavLink>
      </h1>
    <div className="flex flex-col  gap-5   items-center justify-center">
      <div className="bg-white shadow-md w-full max-w-xl  p-4 flex justify-center items-center">
        <div className=" w-full h-[300px] md:h-[400px]">
          <Pie data={data} options={options} />
        </div>
      </div>
      <div className="bg-white shadow-md w-full max-w-xl p-4 flex  justify-center items-center">
        <div className=" w-full h-[300px] md:h-[400px]">
          <Doughnut data={dataDoughnut} options={optionsDoughnut} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default PieChart;
