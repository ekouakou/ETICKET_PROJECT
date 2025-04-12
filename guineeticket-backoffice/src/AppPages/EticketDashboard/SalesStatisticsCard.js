import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import useFetchData from "../../services/useFetchData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalesStatisticsCard = () => {
  const [chartData, setChartData] = useState(null);

  const {
    data: fetchedData,
    error: fetchError,
    loading: fetchLoading,
    refetch,
  } = useFetchData("StatistiqueManager.php", {
    mode: "statistiqueTicket",
    LG_AGEID: 1,
  });

  useEffect(() => {
    if (fetchedData && fetchedData.length > 0) {
      // Transformation des données
      const salesData = transformApiData(fetchedData[0]);
      setChartData(salesData);
    }
  }, [fetchedData]);

  // Fonction pour transformer les données de l'API
  const transformApiData = (apiData) => {
    // Ignorer les deux premiers éléments (LG_AGEID et STR_STIYEAR)
    // et extraire seulement les valeurs mensuelles
    const monthlyData = [];

    // Parcourir les propriétés de l'objet pour extraire les données mensuelles
    for (let i = 1; i <= 12; i++) {
      const monthKey = `DBL_STIMONTH${i}`;
      if (monthKey in apiData) {
        // Convertir les valeurs de string en nombre
        // et enlever les espaces et les séparateurs de milliers
        const rawValue = apiData[monthKey];
        const numericValue =
          rawValue === "0"
            ? 0
            : parseFloat(rawValue.replace(/\s/g, "").replace(",", "."));
        monthlyData.push(numericValue);
      }
    }

    return {
      labels: [
        "Jan",
        "Fév",
        "Mars",
        "Avr",
        "Mai",
        "Juin",
        "Juil",
        "Août",
        "Sept",
        "Oct",
        "Nov",
        "Déc",
      ],
      datasets: [
        {
          label: "Ventes",
          data: monthlyData,
          backgroundColor: [
            "rgb(103 183 220)",
            "rgb(103 148 220)",
            "rgb(103 113 220)",
            "rgb(128 103 220)",
            "rgb(162 103 220)",
            "rgb(220 103 206)",
            "rgb(220 103 171)",
            "rgb(220 103 206)",
            "rgb(220 103 136)",
            "rgb(219 106 103)",
            "rgb(219 140 102)",
            "rgb(220 175 102)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(199, 199, 199, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderRadius: { topLeft: 7, topRight: 7 },
        },
      ],
    };
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      // title: {
      //   display: true,
      //   text: "Statistiques de vente",
      // },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="card card-flush h-100">
      {/* Header */}
      <div className="card-header pt-7">
        {/* Title */}
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold text-gray-900">
            Suivi des ventes de tickets
          </span>
        </h3>
        {/* Toolbar */}
        <div className="card-toolbar">
          <button className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end">
            <i className="ki-duotone ki-dots-square fs-1 text-gray-500 me-n1"></i>
            <span class="badge badge-light-primary flex-shrink-0 align-self-center py-3 px-4 fs-7">
              {fetchedData && fetchedData.length > 0
                ? fetchedData[0].STR_STIYEAR
                : "Chargement..."}
            </span>
          </button>
          {/* Menu */}
          <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-100px py-4">
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3">
                Remove
              </a>
            </div>
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3">
                Mute
              </a>
            </div>
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3">
                Settings
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="card-body pt-5">
        {fetchLoading ? (
          <div>Chargement des données...</div>
        ) : fetchError ? (
          <div>Erreur lors du chargement des données</div>
        ) : (
          <div>{chartData && <Bar data={chartData} options={options} />}</div>
        )}
      </div>
    </div>
  );
};

export default SalesStatisticsCard;
