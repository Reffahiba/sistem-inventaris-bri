import React from 'react';
import Sidebar from '../navigations/Sidebar';
import Topbar from '../navigations/Topbar';
import BannerCarousel from '../../components/BannerCarousel';
import SummaryCard from '../../components/SummaryCard';

const dashboardData = [
  {
    title: "Menunggu",
    count: 1250,
    icon: "waiting",
    chartData: [
      { name: 'Jan', value: 400 },
      { name: 'Feb', value: 800 },
      { name: 'Mar', value: 650 },
      { name: 'Apr', value: 1200 },
    ]
  },
  {
    title: "Diproses",
    count: 745,
    icon: "processing",
    chartData: [
      { name: 'Jan', value: 200 },
      { name: 'Feb', value: 300 },
      { name: 'Mar', value: 600 },
      { name: 'Apr', value: 745 },
    ]
  },
  {
    title: "Diantar",
    count: 745,
    icon: "delivering",
    chartData: [
      { name: 'Jan', value: 200 },
      { name: 'Feb', value: 300 },
      { name: 'Mar', value: 600 },
      { name: 'Apr', value: 745 },
    ]
  },
  {
    title: "Diterima",
    count: 745,
    icon: "delivered",
    chartData: [
      { name: 'Jan', value: 200 },
      { name: 'Feb', value: 300 },
      { name: 'Mar', value: 600 },
      { name: 'Apr', value: 745 },
    ]
  }
];

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-[#F5F6FA] text-gray-800">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />

        <main className="flex-1 px-4 py-4 md:px-6 md:py-6 overflow-auto">
          {/* Header Section: Title + Breadcrumb */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-600">Dashboard</h1>
            <nav className="text-sm text-gray-500">
              <ol className="list-reset flex space-x-2">
                <li>
                  <a href="#" className="hover:underline text-gray-500">Home</a>
                </li>
                <li>/</li>
                <li className="text-gray-700 font-medium">Dashboard</li>
              </ol>
            </nav>
          </div>

          <BannerCarousel />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 mb-6">
            {dashboardData.map((item, index) => (
              <SummaryCard key={index} {...item} />
            ))}
          </div>
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;
