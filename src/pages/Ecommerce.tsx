import { growths, SalesByCountries } from "../Data/dummyData";
import { Line } from "react-chartjs-2";
import { reveneuData } from "../Data/chartData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: reveneuData.map((reveneu) => reveneu.label),

  datasets: [
    {
      label: "Revenue",
      data: reveneuData.map((reveneu) => reveneu.cost),
      fill: true,
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
      tension: 0.4,
    },
  ],
};

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Monthly Sales" },
  },
};
const Ecommerce = () => {
  return (
    <div className="w-full h-full flex flex-col overflow-auto [&::-webkit-scrollbar]:hidden mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
        {/* 1 */}
        <div className="h-[900px] lg:h-[430px] grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="w-full h-full border-2 border-dashed border-primary rounded-3xl flex flex-col gap-3  p-3">
            <div className="flex flex-col gap-3">
              <h1 className="text-textColor text-2xl ">Total hours</h1>
              <h1 className="text-textColor2 text-5xl font-bold ">2H</h1>
            </div>
            <div className="flex justify-between text-primary text-lg">
              <p>Productive</p>
              <p>Middle</p>
              <p>Idle</p>
            </div>
          </div>
          <div className="w-full h-full bg-accents2 rounded-3xl flex flex-col justify-center p-3">
            <h1 className="text-textColor2 text-2xl font-semibold">
              Project Alpha
            </h1>
            <h1 className="text-primary text-sm">Revolutionizing ideas..</h1>
          </div>
          <div className="w-full h-full bg-green rounded-3xl flex flex-col justify-center p-3">
            <h1 className="text-textColor2 text-2xl font-semibold">
              Project Beta
            </h1>
            <h1 className="text-primary text-sm truncate">
              Innovating solutions for seamless task management efficiency.
            </h1>
          </div>
          <div className="w-full h-full bg-lemon rounded-3xl flex items-center p-3">
            <h1 className="text-textColor2 text-7xl font-semibold">1k</h1>
            <h1 className="text-primary text-sm">Team Members</h1>
          </div>
        </div>

        {/* 2*/}
        <div className="-500 h-[900px] lg:h-[430px] grid grid-cols-1 lg:grid-cols-2 gap-5">
          {growths.map((growth) => (
            <div className="border border-gray/20 rounded-lg bg-white flex flex-col justify-center items-center gap-3 p-5">
              <img
                src={growth.image}
                alt={growth.label}
                className="h-14 w-14 rounded-2xl"
              />
              <h1 className="font-bold text-xl">{growth.amount}</h1>
              <h1 className="font-bold text-[14px] text-gray/20">
                {growth.label}
              </h1>
            </div>
          ))}
        </div>

        {/* 3 */}
        <div className=" h-[900px] lg:h-[430px] grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          {SalesByCountries.map((SalesByCountry) => (
            <div className="border border-gray/20 rounded-lg bg-white flex flex-col gap-3 p-5 max-lg:items-center">
              <img
                src={SalesByCountry.countryImg}
                alt={SalesByCountry.country}
                className="h-20 w-30 rounded-2xl"
              />
              <h1>{SalesByCountry.country}</h1>
              <h1 className="font-bold text-2xl">
                {SalesByCountry.products}k{" "}
                <span className="text-gray/20 text-sm">products</span>
              </h1>
            </div>
          ))}
        </div>
        {/* 4 */}
        <div className="rounded-3xl h-[430px] flex flex-col justify-center gap-2 p-5 bg-white ">
          <div className="flex justify-center">
            {" "}
            <img
              className="h-40 w-40 object-center"
              src="https://phpstack-1384472-5121645.cloudwaysapps.com/template/html/axelit/assets/images/form/done.png"
              alt="marked"
            />
          </div>
          <h1 className="text-center">Thank you</h1>
          <h1 className="text-green text-center text-2xl">
            Transaction was successful
          </h1>
          <hr className="border-t border-dashed" />
          <div className="flex justify-between">
            <div className="flex flex-col ">
              <h1>Transaction ID</h1>
              <h1 className="font-bold text-2xl">568368657681</h1>
            </div>
            <div className="flex flex-col ">
              <h1>Amount</h1>
              <h1 className="font-bold text-2xl">$68.00</h1>
            </div>
          </div>
          <div className="flex flex-col ">
            <h1>Date & Time</h1>
            <h1 className="font-bold text-xl">15 Jun 2024 • 6:90PM</h1>
          </div>
        </div>
        {/* 5 */}
        <div className="w-full  h-[430px] lg:col-span-2">
          <div className="bg-white shadow-md w-full p-4 rounded-3xl">
            <div className="relative w-full h-[300px] md:h-[400px]">
              {" "}
              <Line data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
