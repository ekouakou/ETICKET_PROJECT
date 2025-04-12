import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Enregistrer les composants nécessaires pour Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const performanceParType = [
  {
    type: "Concert",
    ventes: 450,
    vues: 1200,
    revenu: 22500,
    tauxConversion: 37.5,
    prixMoyen: 50,
    satisfaction: 4.8,
  },
  {
    type: "Théâtre",
    ventes: 320,
    vues: 800,
    revenu: 12800,
    tauxConversion: 40,
    prixMoyen: 40,
    satisfaction: 4.6,
  },
  {
    type: "Sport",
    ventes: 580,
    vues: 1500,
    revenu: 29000,
    tauxConversion: 38.7,
    prixMoyen: 50,
    satisfaction: 4.3,
  },
  {
    type: "Festival",
    ventes: 750,
    vues: 2000,
    revenu: 45000,
    tauxConversion: 37.5,
    prixMoyen: 60,
    satisfaction: 4.7,
  },
  {
    type: "Exposition",
    ventes: 420,
    vues: 1100,
    revenu: 8400,
    tauxConversion: 38.2,
    prixMoyen: 20,
    satisfaction: 4.5,
  },
];

const SalesStatisticsCard2 = () => {
  // Vérifier si performanceParType est vide ou indéfini
  if (!performanceParType || performanceParType.length === 0) {
    return (
      <div className="col-xxl-6">
        <div className="card card-flush h-md-100 ">
          <div className="card-body py-9">
            <h2 className="text-lg font-semibold mb-4">
              Comparaison des ventes et revenus
            </h2>
            <p>Aucune donnée disponible pour l'instant.</p>
          </div>
        </div>
      </div>
    );
  }

  // Créer des dégradés via Chart.js
  const createGradient = (chart) => {
    const ctx = chart.ctx;
    const gradientVentes = ctx.createLinearGradient(0, 0, 0, 400);
    gradientVentes.addColorStop(0, "rgb(103, 183, 220)");
    gradientVentes.addColorStop(1, "rgb(50, 150, 200)");

    const gradientRevenu = ctx.createLinearGradient(0, 0, 0, 400);
    gradientRevenu.addColorStop(0, "rgb(130, 202, 157)");
    gradientRevenu.addColorStop(1, "rgb(50, 170, 120)");

    const gradientConversion = ctx.createLinearGradient(0, 0, 0, 400);
    gradientConversion.addColorStop(0, "rgb(255, 159, 64)");
    gradientConversion.addColorStop(1, "rgb(255, 99, 132)");

    return { gradientVentes, gradientRevenu, gradientConversion };
  };

  // Préparer les données pour le graphique
  const data = {
    labels: performanceParType.map((item) => item.type), // Labels pour l'axe X (type d'événement)
    datasets: [
      {
        label: "Nombre de ventes",
        data: performanceParType.map((item) => item.ventes), // Données pour les ventes
        backgroundColor: (context) => {
          const chart = context.chart;
          const { gradientVentes } = createGradient(chart);
          return gradientVentes;
        },
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        borderRadius: { topLeft: 7, topRight: 7 },
      },
      {
        label: "Revenu (€)",
        data: performanceParType.map((item) => item.revenu), // Données pour les revenus
        backgroundColor: (context) => {
          const chart = context.chart;
          const { gradientRevenu } = createGradient(chart);
          return gradientRevenu;
        },
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        borderRadius: { topLeft: 7, topRight: 7 },
      },
      {
        label: "Taux de Conversion (%)",
        data: performanceParType.map((item) => item.tauxConversion), // Données pour le taux de conversion
        backgroundColor: (context) => {
          const chart = context.chart;
          const { gradientConversion } = createGradient(chart);
          return gradientConversion;
        },
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
        borderRadius: { topLeft: 7, topRight: 7 },
      },
    ],
  };

  // Options de configuration du graphique
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: false,
        text: "Comparaison des ventes, revenus et taux de conversion",
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { display: false }, beginAtZero: true },
    },
  };

  return (
    <div className="card card-flush h-md-100">
      <div class="card-header pt-7">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label fw-bold text-gray-900">
            Comparaison des ventes, revenus et taux de conversion
          </span>
        </h3>
      </div>
      <div className="card-body py-9">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesStatisticsCard2;
