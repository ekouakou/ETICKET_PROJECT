import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesStatisticsCard = () => {
    const data = {
        labels: ['Jan', 'Fév', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'],
        datasets: [
          {
            label: 'Sales',
            data: [625, 500, 400, 350, 300, 450, 520, 610, 690, 740, 680, 730], // Sales data for 12 months
            backgroundColor: [
              'rgb(103 183 220)',  // Red for Jan
              'rgb(103 148 220)',  // Blue for Feb
              'rgb(103 113 220)',  // Yellow for Mar
              'rgb(128 103 220)',  // Green for Apr
              'rgb(162 103 220)', // Purple for May
              
              'rgb(220 103 206)',  // Orange for Jun
              'rgb(220 103 171)', // Grey for Jul
              'rgb(220 103 206)',  // Red for Aug
              
              'rgb(220 103 136)',  // Blue for Sept
              
              'rgb(219 106 103)',  // Yellow for Oct
              'rgb(219 140 102)',  // Green for Nov
              'rgb(220 175 102)', // Purple for Dec
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',   // Border red for Jan
              'rgba(54, 162, 235, 1)',   // Border blue for Feb
              'rgba(255, 206, 86, 1)',   // Border yellow for Mar
              'rgba(75, 192, 192, 1)',   // Border green for Apr
              'rgba(153, 102, 255, 1)',  // Border purple for May
              'rgba(255, 159, 64, 1)',   // Border orange for Jun
              'rgba(199, 199, 199, 1)',  // Border grey for Jul
              'rgba(255, 99, 132, 1)',   // Border red for Aug
              'rgba(54, 162, 235, 1)',   // Border blue for Sept
              'rgba(255, 206, 86, 1)',   // Border yellow for Oct
              'rgba(75, 192, 192, 1)',   // Border green for Nov
              'rgba(153, 102, 255, 1)',  // Border purple for Dec
            ],
            // borderWidth: 1,
            borderRadius: { topLeft: 7, topRight: 7 }, // Rounded top corners
          },
        ],
      };
      

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Top Selling Countries',
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Disable the grid on the x-axis
        },
      },
      y: {
        grid: {
          display: false, // Disable the grid on the y-axis
        },
        beginAtZero: true, // Ensures the y-axis starts at 0
      },
    },
  };

  return (
    <div className="card card-flush h-xl-100">
      {/* Header */}
      <div className="card-header pt-7">
        {/* Title */}
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold text-gray-900">Suivi des vente de ticket</span>
          <span className="text-gray-500 pt-2 fw-semibold fs-6">Top Selling Countries</span>
        </h3>
        {/* Toolbar */}
        <div className="card-toolbar">
          <button className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end">
            <i className="ki-duotone ki-dots-square fs-1 text-gray-500 me-n1"></i>
          </button>
          {/* Menu */}
          <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-100px py-4">
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3">Remove</a>
            </div>
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3">Mute</a>
            </div>
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3">Settings</a>
            </div>
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="card-body pt-5">
        <div style={{ position: 'relative', width: '100%', height: '350px' }}>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SalesStatisticsCard;
