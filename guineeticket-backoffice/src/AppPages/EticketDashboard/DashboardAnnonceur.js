import React, { useState, useEffect } from 'react';
// import AddNewAddressForm from './AddBannerForm';
import axios from 'axios';
// import AddNewAddressForm from './AddBannerForm';
import Timeline from './Timeline';
import SalesStatisticsCard from './SalesStatisticsCard';
import SalesStatisticsCard2 from './SalesStatisticsCard2';
import HighlightCard from './HighlightCard';
import TicketCard from './TicketCard';
import EventComponent from './EventComponent';
import useFetchData from "../../services/useFetchData";


import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Ticket, DollarSign, Users, Eye, TrendingUp, Clock, Star, Share2, CreditCard, Activity } from 'lucide-react';

import PageTitle from '../PageTitle';
import ActionButton from '../ActionButton';


// Données de performance par type d'événement
const performanceParType = [
    {
        type: "Concert",
        ventes: 450,
        vues: 1200,
        revenu: 22500,
        tauxConversion: 37.5,
        prixMoyen: 50,
        satisfaction: 4.8
    },
    {
        type: "Théâtre",
        ventes: 320,
        vues: 800,
        revenu: 12800,
        tauxConversion: 40,
        prixMoyen: 40,
        satisfaction: 4.6
    },
    {
        type: "Sport",
        ventes: 580,
        vues: 1500,
        revenu: 29000,
        tauxConversion: 38.7,
        prixMoyen: 50,
        satisfaction: 4.3
    },
    {
        type: "Festival",
        ventes: 750,
        vues: 2000,
        revenu: 45000,
        tauxConversion: 37.5,
        prixMoyen: 60,
        satisfaction: 4.7
    },
    {
        type: "Exposition",
        ventes: 420,
        vues: 1100,
        revenu: 8400,
        tauxConversion: 38.2,
        prixMoyen: 20,
        satisfaction: 4.5
    }
];


// Données de tendance par type
const tendanceParType = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'],
    data: [
        {
            mois: 'Jan',
            Concert: 120,
            Théâtre: 85,
            Sport: 150,
            Festival: 200,
            Exposition: 90
        },
        {
            mois: 'Fév',
            Concert: 150,
            Théâtre: 95,
            Sport: 170,
            Festival: 220,
            Exposition: 100
        },
        {
            mois: 'Mar',
            Concert: 140,
            Théâtre: 100,
            Sport: 160,
            Festival: 240,
            Exposition: 110
        },
        {
            mois: 'Avr',
            Concert: 160,
            Théâtre: 110,
            Sport: 180,
            Festival: 260,
            Exposition: 120
        },
        {
            mois: 'Mai',
            Concert: 180,
            Théâtre: 120,
            Sport: 200,
            Festival: 280,
            Exposition: 130
        },
        {
            mois: 'Jun',
            Concert: 200,
            Théâtre: 130,
            Sport: 220,
            Festival: 300,
            Exposition: 140
        }
    ]
};


const breadcrumbs = [
    { text: 'Dashboard', link: '/' },
    // { isBullet: true },
    // { text: "Enregistrement d'un évènements" },
];

const DashboardAnnonceur = () => {

    const {
        data: statsCards,
        loading,
        error,
    } = useFetchData(process.env.REACT_APP_STATISTIQUE_MANAGER_API_URL, {
        mode: process.env.REACT_APP_DASHBOARD_MODE,
        LG_AGEID: "1",
    });

    // Ensure statsCards is an array before mapping
    const cards = Array.isArray(statsCards) ? statsCards : [];

    return (
        <>
            <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
                <div className="app-wrapper flex-column flex-row-fluid menu-gray-800 mt-5" id="kt_app_page">

                    <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack m-0 mb-5">
                        <PageTitle heading="Tableau de bord" breadcrumbs={breadcrumbs} />
                        {/* <ActionButton text="Liste bannière" link={process.env.REACT_APP_SAVE_BANNER} className="btn-primary" /> */}
                    </div>

                    <div className="app-main flex-column flex-row-fluid " id="kt_app_main">
                        <div className="d-flex flex-column flex-column-fluid">
                            <div id="kt_app_content" className="app-content  flex-column-fluid ">
                                <div id="kt_app_content_container" className="app-container  container-fluid " >
                                    <div className="row">
                                        <div className='col-lg-6'>
                                            <div className='row'>
                                                {cards.map((stat, index) => (
                                                    <div className='col-lg-6 col-xl-6  h-md-50 mb-xl-10'>
                                                        <div key={index} className="card card-flush">
                                                            {/*begin::Header*/}
                                                            <div className="card-header pt-5">
                                                                <div className="card-title d-flex flex-column">
                                                                    <div className="d-flex align-items-center">
                                                                        {/*begin::Amount*/}
                                                                        <span className="fs-2hx fw-bold text-gray-900 me-2 lh-1 ls-n2">
                                                                            {stat.value}
                                                                        </span>
                                                                        <span className="badge badge-light-danger fs-base">
                                                                            <i className="ki-duotone ki-arrow-down fs-5 text-danger ms-n1">
                                                                                <span className="path1" />
                                                                                <span className="path2" />
                                                                            </i>
                                                                            {stat.percentage}
                                                                        </span>
                                                                    </div>
                                                                    <span className="text-gray-500 pt-1 fw-semibold fs-6">
                                                                        {stat.title}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {/*end::Header*/}
                                                            <div className="card-body d-flex align-items-end pt-0">
                                                                <div className="d-flex align-items-center flex-column mt-3 w-100">
                                                                    <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                                                                        <span className="fw-bolder fs-6 text-gray-900">{stat.goal}</span>
                                                                        <span className="fw-bold fs-6 text-gray-500">{stat.percentage}%</span>
                                                                    </div>
                                                                    <div className="h-8px mx-3 w-100 bg-light-success rounded">
                                                                        <div
                                                                            className="bg-success rounded h-8px"
                                                                            role="progressbar"
                                                                            style={{ width: `${stat.percentage}%` }}
                                                                            aria-valuenow={stat.percentage}
                                                                            aria-valuemin={0}
                                                                            aria-valuemax={100}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                ))}

                                                <div className="col-lg-6 col-xl-6">
                                                    {/* <TicketCard totalTickets={79} pendingTickets={43} progressPercentage={10} /> */}
                                                </div>
                                                <div className="col-lg-6 col-xl-6">
                                                    {/* <HighlightCard /> */}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-lg-6'>
                                            <Timeline />
                                        </div>

                                        {/*end::Col*/}
                                    </div>

                                    <div className="row  mt-5">
                                        <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-10">

                                            <SalesStatisticsCard />
                                        </div>
                                        <EventComponent />
                                        <SalesStatisticsCard2 />

                                        <div className="col-xxl-6 d-none">
                                            <div className="card card-flush h-md-100">
                                                <div className="card-body py-9">
                                                    <h2 className="text-lg font-semibold mb-4">Comparaison des ventes et revenus</h2>
                                                    <ResponsiveContainer width="100%" height={400}>
                                                        <BarChart data={performanceParType}>
                                                            <CartesianGrid strokeDasharray="3 3" />
                                                            <XAxis dataKey="type" />
                                                            <YAxis yAxisId="left" />
                                                            <YAxis yAxisId="right" orientation="right" />
                                                            <Tooltip />
                                                            <Legend />
                                                            <Bar yAxisId="left" dataKey="ventes" name="Nombre de ventes" fill="#8884d8" />
                                                            <Bar yAxisId="right" dataKey="revenu" name="Revenu (€)" fill="#82ca9d" />
                                                        </BarChart>
                                                    </ResponsiveContainer>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xxl-6">
                                            <div className="card card-flush h-md-100">
                                                <div className="card-body py-9">
                                                    <h2 className="text-lg font-semibold mb-4">Évolution des ventes par type</h2>
                                                    <ResponsiveContainer width="100%" height={400}>
                                                        <LineChart data={tendanceParType.data}>
                                                            <CartesianGrid strokeDasharray="3 3" />
                                                            <XAxis dataKey="mois" />
                                                            <YAxis />
                                                            <Tooltip />
                                                            <Legend />
                                                            <Line type="monotone" dataKey="Concert" stroke="#8884d8" />
                                                            <Line type="monotone" dataKey="Théâtre" stroke="#82ca9d" />
                                                            <Line type="monotone" dataKey="Sport" stroke="#ffc658" />
                                                            <Line type="monotone" dataKey="Festival" stroke="#ff8042" />
                                                            <Line type="monotone" dataKey="Exposition" stroke="#8dd1e1" />
                                                        </LineChart>
                                                    </ResponsiveContainer>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xxl-6">
                                            <div className="card card-flush h-md-100">
                                                <div className="card-body py-9">
                                                    <h2 className="text-lg font-semibold mb-4">Récapitulatif par type d'événement</h2>
                                                    <div className="overflow-x-auto">
                                                        <div className="table-responsive">
                                                            <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                                                                <thead>
                                                                    <tr className="border-bottom-0">
                                                                        <th className="p-0 min-w-175px">Type</th>
                                                                        <th className="p-0 min-w-100px">Ventes</th>
                                                                        <th className="p-0 min-w-100px">Vues</th>
                                                                        <th className="p-0 min-w-100px">Revenu (€)</th>
                                                                        <th className="p-0 min-w-100px">Taux Conversion (%)</th>
                                                                        {/* <th className="p-0 min-w-100px">Prix Moyen (€)</th>
                                                                            <th className="p-0 min-w-100px">Satisfaction</th> */}
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {performanceParType.map((performance, index) => (
                                                                        <tr key={index}>
                                                                            <td>
                                                                                <span className="text-gray-900 fw-bold fs-6">
                                                                                    {performance.type}
                                                                                </span>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-gray-900 fw-bold fs-6">
                                                                                    {performance.ventes}
                                                                                </span>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-gray-900 fw-bold fs-6">
                                                                                    {performance.vues}
                                                                                </span>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-gray-900 fw-bold fs-6">
                                                                                    {performance.revenu.toLocaleString()}
                                                                                </span>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-gray-900 fw-bold fs-6">
                                                                                    {performance.tauxConversion}%
                                                                                </span>
                                                                            </td>
                                                                            {/* <td>
                                                                                    <span className="text-gray-900 fw-bold fs-6">
                                                                                        {performance.prixMoyen.toFixed(2)} €
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="text-gray-900 fw-bold fs-6">
                                                                                        {performance.satisfaction.toFixed(1)}
                                                                                    </span>
                                                                                </td> */}
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* footer */}
                        <div id="kt_app_footer" className="app-footer ">
                            <div className="app-container  container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3 ">
                                <div className="text-gray-900 order-2 order-md-1">
                                    <span className="text-muted fw-semibold me-1">2024©</span>
                                    <a
                                        href="../../../../keenthemes.com/index.html"
                                        target="_blank"
                                        className="text-gray-800 text-hover-primary"
                                    >
                                        Keenthemes
                                    </a>
                                </div>
                                {/*end::Copyright*/}
                                {/*begin::Menu*/}
                                <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                                    <li className="menu-item">
                                        <a
                                            href="../../../../keenthemes.com/index.html"
                                            target="_blank"
                                            className="menu-link px-2"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a
                                            href="../../../../devs.keenthemes.com/index.html"
                                            target="_blank"
                                            className="menu-link px-2"
                                        >
                                            Support
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a
                                            href="../../../../themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/index.html"
                                            target="_blank"
                                            className="menu-link px-2"
                                        >
                                            Purchase
                                        </a>
                                    </li>
                                </ul>
                                {/*end::Menu*/}{" "}
                            </div>
                            {/*end::Footer container*/}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default DashboardAnnonceur;