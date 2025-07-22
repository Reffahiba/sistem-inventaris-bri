import React from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import { Hourglass, Loader2, Truck, CheckCircle2 } from 'lucide-react';

const icons = {
  waiting: <Hourglass className="w-6 h-6 text-red-500" />,
  processing: <Loader2 className="w-6 h-6 text-yellow-500 animate-spin" />,
  delivering: <Truck className="w-6 h-6 text-indigo-500" />,
  delivered: <CheckCircle2 className="w-6 h-6 text-green-500" />,
};

const SummaryCard = ({ title, count, icon, chartData }) => {
  return (
    <div className="w-full bg-gray-50 rounded-2xl shadow-md p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-sm text-gray-500">{title}</h4>
          <p className="text-2xl font-semibold">{count}</p>
        </div>
        <div className="p-2 bg-gray-100 rounded-full">
          {icons[icon]}
        </div>
      </div>

      <div className="w-full h-16">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Tooltip />
            <Line type="linear" dataKey="value" stroke="#6366F1" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SummaryCard;
