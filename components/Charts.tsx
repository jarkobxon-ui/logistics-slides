import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  AreaChart,
  Area,
  LabelList
} from 'recharts';

// Theme colors
const colors = {
  cyan: '#22d3ee', // cyan-400
  green: '#4ade80', // green-400
  yellow: '#facc15', // yellow-400
  red: '#f87171', // red-400
  grid: '#334155', // slate-700
  text: '#94a3b8', // slate-400
  tooltipBg: '#1e293b', // slate-800
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 border border-slate-700 p-3 rounded shadow-lg text-sm z-50">
        <p className="font-bold text-slate-200">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const EcommerceGrowthChart: React.FC = () => {
  const data = [
    { year: '2024', value: 0.543 },
    { year: '2025', value: 0.72 },
    { year: '2026', value: 0.97 },
    { year: '2027', value: 1.7 },
    { year: '2028', value: 2.3 },
    { year: '2029', value: 3.1 },
    { year: '2030', value: 4.3 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colors.cyan} stopOpacity={0.3}/>
            <stop offset="95%" stopColor={colors.cyan} stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} vertical={false} />
        <XAxis dataKey="year" stroke={colors.text} />
        <YAxis stroke={colors.text} />
        <Tooltip content={<CustomTooltip />} />
        <Area 
          type="monotone" 
          dataKey="value" 
          stroke={colors.cyan} 
          fillOpacity={1} 
          fill="url(#colorValue)" 
          strokeWidth={3}
          name="Объем (млрд $)"
        >
          <LabelList 
            dataKey="value" 
            position="top" 
            offset={10} 
            fill={colors.cyan} 
            fontSize={14} 
            fontWeight="bold"
            formatter={(val: number) => `$${val}`} 
          />
        </Area>
      </AreaChart>
    </ResponsiveContainer>
  );
};

export const SpeedComparisonChart: React.FC = () => {
  const data = [
    { name: 'Бумага', hours: 72, fill: colors.red },
    { name: 'EDI', hours: 8, fill: colors.yellow },
    { name: 'Cloud', hours: 4, fill: colors.cyan },
    { name: 'AI', hours: 2, fill: colors.green },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart layout="vertical" data={data} margin={{ top: 5, right: 50, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} horizontal={false} />
        <XAxis type="number" stroke={colors.text} hide />
        <YAxis dataKey="name" type="category" stroke={colors.text} width={60} tick={{fill: '#e2e8f0', fontSize: 14}} />
        <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
        <Bar dataKey="hours" name="Часы" radius={[0, 4, 4, 0]}>
          <LabelList 
            dataKey="hours" 
            position="right" 
            fill="#fff" 
            fontSize={14} 
            fontWeight="bold"
            formatter={(val: number) => `${val} ч`}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export const ErrorComparisonChart: React.FC = () => {
  const data = [
    { name: 'Бумага', percent: 12, fill: colors.red },
    { name: 'EDI', percent: 1, fill: colors.yellow },
    { name: 'Cloud', percent: 0.5, fill: colors.cyan },
    { name: 'AI', percent: 0.1, fill: colors.green },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart layout="vertical" data={data} margin={{ top: 5, right: 60, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} horizontal={false} />
        <XAxis type="number" stroke={colors.text} hide />
        <YAxis dataKey="name" type="category" stroke={colors.text} width={60} tick={{fill: '#e2e8f0', fontSize: 14}} />
        <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
        <Bar dataKey="percent" name="Ошибки (%)" radius={[0, 4, 4, 0]}>
          <LabelList 
            dataKey="percent" 
            position="right" 
            fill="#fff" 
            fontSize={14} 
            fontWeight="bold"
            formatter={(val: number) => `${val}%`}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export const UzumMetricsChart: React.FC = () => {
  const data = [
    { name: 'Inv Acc', Before: 80, After: 96 },
    { name: 'On-Time', Before: 82, After: 97 },
    { name: 'Forecast', Before: 65, After: 84 },
    { name: 'Del Time (d)', Before: 3.5, After: 2.2 },
    { name: 'Pick Err', Before: 7, After: 1 },
    { name: 'CSAT', Before: 72, After: 88 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 25, right: 10, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} vertical={false} />
        <XAxis dataKey="name" stroke={colors.text} fontSize={12} tick={{fill: '#94a3b8'}} interval={0} />
        <YAxis stroke={colors.text} hide />
        <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
        <Legend wrapperStyle={{paddingTop: '20px'}} />
        <Bar dataKey="Before" fill="#64748b" radius={[4, 4, 0, 0]}>
          <LabelList dataKey="Before" position="top" fill="#94a3b8" fontSize={12} />
        </Bar>
        <Bar dataKey="After" fill={colors.green} radius={[4, 4, 0, 0]}>
          <LabelList dataKey="After" position="top" fill={colors.green} fontSize={12} fontWeight="bold" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
