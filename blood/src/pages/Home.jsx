import { Gauge } from "@mui/x-charts/Gauge";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";

function Home() {
  return (
    <div>
      <div className="flex justify-between h-[100vh]">
        <div className="flex flex-col">
          <div className="flex flex-wrap">
            <div className="bg-gray-100 h-[280px] m-[30px] w-[270px] shadow-xl">
              <div className="h-[180px] w-[200px]">
                <Gauge
                  value={75}
                  startAngle={0}
                  endAngle={360}
                  innerRadius="84%"
                  outerRadius="100%"
                />
              </div>
              <h2 className="font-semibold text-[20px] m-[40px] text-center">
                Prospects
              </h2>
            </div>
            <div className="bg-gray-100 h-[280px] m-[30px] w-[270px] shadow-xl">
              <div className="h-[176px] w-[176px] m-[30px] border-[13px] border-red-400 border-solid rounded-full">
                <div className="flex items-center justify-center m-[30px]">
                  <h2 className="font-bold text-[25px] m-[40px]">100</h2>
                </div>
                <h2 className="font-semibold text-[20px] m-[40px] text-center">
                  Donors
                </h2>
              </div>
            </div>
          </div>

          <div>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              width={700}
              height={300}
            />
          </div>
        </div>

        <div className="flex flex-col bg-gray-100 m-[20px] h-[600px] w-[270px] shadow-xl">
          <div className="m-[40px]">
            <h3 className="font-bold">Recent Donors</h3>
            <ul>
              <li>1. James Lisley</li>
              <li>2. Jon Doe</li>
              <li>3. Liz Dolby</li>
              <li>4. Marun Tomany</li>
            </ul>
          </div>

          <PieChart
  series={[
    {
      data: [
        { id: 0, value: 10, label: 'series A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
      ],
    
    },
  ]}
  width={400}
  height={200}
/>
        </div>
      </div>
    </div>
  );
}

export default Home;
