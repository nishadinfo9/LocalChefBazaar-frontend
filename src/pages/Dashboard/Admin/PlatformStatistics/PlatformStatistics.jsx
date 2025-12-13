import React from "react";
import useFetch from "../../../../hooks/useFetch";
import Loader from "../../../../utils/Loader";
import {
  FaUsers,
  FaDollarSign,
  FaCheckCircle,
  FaHourglassHalf,
} from "react-icons/fa";
import {
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const PlatformStatistics = () => {
  const { data, isLoading, isError, error } = useFetch({
    url: "/admin/dashboard-stats",
    queryKey: ["stats"],
  });

  if (isLoading) return <Loader />;
  if (isError) return <div>{error.message}</div>;

  const stats = data?.stats || {};

  const cards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: <FaUsers size={24} className="text-blue-500" />,
      bg: "bg-blue-100",
    },
    {
      title: "Total Payments",
      value: stats.totalPaymentAmount,
      icon: <FaDollarSign size={24} className="text-green-500" />,
      bg: "bg-green-100",
    },
    {
      title: "Pending Orders",
      value: stats.pendingOrder,
      icon: <FaHourglassHalf size={24} className="text-yellow-500" />,
      bg: "bg-yellow-100",
    },
    {
      title: "Delivered Orders",
      value: stats.deliveredOrders,
      icon: <FaCheckCircle size={24} className="text-purple-500" />,
      bg: "bg-purple-100",
    },
  ];

  const chartData = [
    { name: "Pending Orders", value: stats.pendingOrder || 0 },
    { name: "Delivered Orders", value: stats.deliveredOrders || 0 },
  ];

  const COLORS = ["#F0B100", "#AD46FF"];

  return (
    <div className="p-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6 mb-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`flex flex-col p-5 rounded-xl shadow-lg bg-white`}
          >
            <div
              className={`w-12 h-12 flex ${card.bg} items-center justify-center rounded-full mb-3`}
            >
              {card.icon}
            </div>
            <p className="text-gray-500 text-sm font-medium">{card.title}</p>
            <p className="text-2xl font-bold mt-1 text-gray-800">
              {card.value}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white p-4  rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Orders Status</h3>
        <div className="md:w-full h-70">
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PlatformStatistics;
