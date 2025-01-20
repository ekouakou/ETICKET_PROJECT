import React, { useState, useEffect } from 'react';
import AppHeader from '../../AppComponents/Header/AppHeader';
import Footer from '../../AppComponents/Footer/Footer';
import { useTheme } from '../../contexts/ThemeProvider';
import { useNavigate } from 'react-router-dom';
// import { Modal, Button } from 'react-bootstrap';
import {
    Modal,Button,Placeholder,Loader,ButtonToolbar,Divider,
} from "rsuite";
import { doConnexion, doDisConnexion, crudData } from '../../services/apiService';
import html2pdf from 'html2pdf.js';

import SkeletonGenericCardView from "../Skeleton/SkeletonGenericCardView";
import GenericCardView from "../../AppComponents/GenericCardView";
import useLoader from '../../utils/useLoader'




const MyAcount = () => {
    const { theme, toggleTheme } = useTheme(); // Hook pour le thème
    const [background, setBackground] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const urlBaseImage = localStorage.getItem("urlBaseImage");
    const [currentPage, setCurrentPage] = useState(1);
    const ticketsPerPage = 3;
    const [userData, setUserData] = useState(null);
    const [response, setResponse] = useState([]);
    const apiUrl = "TicketManager.php";
    const [showModal, setShowModal] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null); // Nouvel état pour l'élément sélectionné

    const [rows, setRows] = useState(0);
    const [open, setOpen] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);
    const isLoading = useLoader(response);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleEntered = () => setRows(3);
    const [selectedEvent, setSelectedEvent] = useState(null);


    const user = JSON.parse(localStorage.getItem('user'));


    useEffect(() => {

        console.log(user);

        if (!user) {
            navigate('/'); // Redirige vers la page d'accueil si l'utilisateur est vide
        } else {
            setUserData(user);
        }
    }, [navigate]);

    useEffect(() => {
        if (userData && userData.STR_CLILOGIN) { // Vérifiez que userData et UTITOKEN sont définis
            fetchData({ mode: 'listTicket', LG_CLIID: userData.STR_CLILOGIN, DT_BEGIN: "2024-01-01", DT_END: "2024-10-06" }, apiUrl, setResponse);
        }
    }, [userData, apiUrl]);

    const fetchData = (params, url, setData) => {
        crudData(params, url)
            .then(response => {
                setData(response.data.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données:', error);
            });
    };




    const handleEditClick = (ticket) => {
        setSelectedTicket(ticket); // Mettez à jour l'état avec l'élément cliqué
        setShowModal(true);
    };

    const handleExportPdf = () => {
        const element = document.getElementById('ticket-details');
        html2pdf(element);
    };


    const generateWhatsAppLink = () => {
        if (!selectedTicket) return '';
        const ticketName = encodeURIComponent(selectedTicket.STR_EVENAME);
        const ticketDate = encodeURIComponent(selectedTicket.DT_EVENT);
        const ticketUrl = encodeURIComponent("http://guineeticket.com/?id=" + ticketName); // Ou un lien direct vers l'affichage du ticket en ligne
        //const ticketUrl = encodeURIComponent(window.location.href+"?id="+selectedTicket.DT_EVENT); // Ou un lien direct vers l'affichage du ticket en ligne
        const message = `Check out this event: *${ticketName}* on ${ticketDate}. View your ticket here: ${ticketUrl}`;
        return `https://wa.me/?text=${message}`;
    };

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    useEffect(() => {
        // Met à jour le background selon le thème
        const newBackground =
            theme === 'light'
                ? "assets/media/bg/section__bg_blue.jpg"
                : "assets/media/bg/section__bg.jpg";
        setBackground(newBackground);
    }, [theme]); // Exécuter à chaque changement de `theme`

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const params = new URLSearchParams();
            params.append('mode', 'doConnexion');
            params.append('STR_UTILOGIN', email);
            params.append('STR_UTIPASSWORD', password);

            const response = await doConnexion(params);
            const userData = response.data;

            if (userData.code_statut === "1") {
                localStorage.setItem('user', JSON.stringify(userData));
                navigate('/mon-profile'); // Rediriger vers le tableau de bord
            } else {
                setError(userData.desc_statut);
            }
        } catch (error) {
            setError('Erreur de connexion. Veuillez réessayer.');
        }
    };


    


    return (
        <>
            <AppHeader />
            <>
                {/* page title */}
                <section className="section section--first">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section__wrap">
                                    {/* section title */}
                                    <h1 className="section__title section__title--head text-theme">Mon compte</h1>
                                    {/* end breadcrumbs */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end page title */}
                {/* content */}
                <div className="content">
                    {/* profile */}
                    <div className="profile">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="profile__content">
                                        <div className="profile__user">
                                            <div className="profile__avatar">
                                                <img src="img/user.svg" alt="" />
                                            </div>
                                            <div className="profile__meta ">
                                                <h3 className='text-theme'>John Doe</h3>
                                                <span>HOTFLIX ID: 78123</span>
                                            </div>
                                        </div>
                                        {/* content tabs nav */}
                                        <ul
                                            className="nav nav-tabs content__tabs content__tabs--profile"
                                            id="content__tabs"
                                            role="tablist"
                                        >
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    id="1-tab"
                                                    className="active"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#tab-1"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="tab-1"
                                                    aria-selected="true"
                                                >
                                                    Profile
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    id="4-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#tab-4"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="tab-4"
                                                    aria-selected="false"
                                                >
                                                    Settings
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end profile */}
                    <div className="container">
                        {/* content tabs */}
                        <div className="tab-content">
                            <div
                                className="tab-pane fade show active"
                                id="tab-1"
                                role="tabpanel"
                                aria-labelledby="1-tab"
                                tabIndex={0}
                            >
                                <div className="row">
                                    <div className="col-12 col-md-6 col-xl-3">
                                        <div className="stats">
                                            <span className='text-theme'>Nombre d'ticket</span>
                                            <p className='text-theme'>{response.length}</p>
                                            <i className="ti ti-movie" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {/* dashbox */}
                                    <div className="row gx-9 gy-6">
                                        {isLoading ? (
                                            <>
                                                <SkeletonGenericCardView rows={6} columns={4} />
                                            </>
                                        ) : (
                                            <>
                                                <GenericCardView
                                                    data={response}
                                                    columns={[
                                                        { data: "STR_TICNAME", title: "Réf. ticket" },
                                                        { data: "DT_TCIVALIDATED", title: "Date de validation" }
                                                    ]}
                                                    // onEdit={(id) => navigate(process.env.REACT_APP_SAVE_UTILISATEURS, { state: { LG_UTIID: id } })}
                                                    onView={true}
                                                    // onToggleStatus={true}
                                                    // deleteConfirmMessage={(id) => `Êtes-vous sûr de vouloir supprimer cet utilisateur? (${id}) ?`}
                                                    // toggleStatusConfirmMessage={(id, newStatus) =>
                                                    //   `Êtes-vous sûr de vouloir ${newStatus === "enable" ? "activer" : "désactiver"} cet utilisateur (${id}) ?`
                                                    // }
                                                    // handleApiCall={handleApiCall}
                                                    tableId="simpleTable"
                                                />
                                            </>
                                        )}

                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade d-none"
                                id="tab-2"
                                role="tabpanel"
                                aria-labelledby="2-tab"
                                tabIndex={0}
                            >
                                <div className="row">
                                    {/* plan */}
                                    <div className="col-12 col-md-6 col-lg-4 order-md-2 order-lg-1">
                                        <div className="plan plan--active">
                                            <h3 className="plan__title">Basic</h3>
                                            <span className="plan__price">Free</span>
                                            <ul className="plan__list">
                                                <li className="plan__item">
                                                    <i className="ti ti-circle-check" /> 7 days
                                                </li>
                                                <li className="plan__item">
                                                    <i className="ti ti-circle-check" /> 720p Resolution
                                                </li>
                                                <li className="plan__item plan__item--none">
                                                    <i className="ti ti-circle-minus" /> Limited Availability
                                                </li>
                                                <li className="plan__item plan__item--none">
                                                    <i className="ti ti-circle-minus" /> Desktop Only
                                                </li>
                                                <li className="plan__item plan__item--none">
                                                    <i className="ti ti-circle-minus" /> Limited Support
                                                </li>
                                            </ul>
                                            <a href="signin.html" className="plan__btn">
                                                Current plan
                                            </a>
                                        </div>
                                    </div>
                                    {/* end plan */}
                                    {/* plan */}
                                    <div className="col-12 col-md-12 col-lg-4 order-md-1 order-lg-2">
                                        <div className="plan plan--orange">
                                            <h3 className="plan__title">Premium</h3>
                                            <span className="plan__price">
                                                $34.99 <sub>/ month</sub>
                                            </span>
                                            <ul className="plan__list">
                                                <li className="plan__item">
                                                    <i className="ti ti-circle-check" /> 1 Month
                                                </li>
                                                <li className="plan__item">
                                                    <i className="ti ti-circle-check" /> Full HD
                                                </li>
                                                <li className="plan__item">
                                                    <i className="ti ti-circle-check" /> Limited Availability
                                                </li>
                                                <li className="plan__item plan__item--none">
                                                    <i className="ti ti-circle-minus" /> TV &amp; Desktop
                                                </li>
                                                <li className="plan__item plan__item--none">
                                                    <i className="ti ti-circle-minus" /> 24/7 Support
                                                </li>
                                            </ul>
                                            <button
                                                className="plan__btn"
                                                type="button"
                                                data-bs-toggle="modal"
                                                data-bs-target="#plan-modal"
                                            >
                                                Choose Plan
                                            </button>
                                        </div>
                                    </div>
                                    {/* end plan */}
                                    {/* plan */}
                                    <div className="col-12 col-md-6 col-lg-4 order-md-3">
                                        <div className="plan plan--red">
                                            <h3 className="plan__title">Cinematic</h3>
                                            <span className="plan__price">
                                                $49.99 <sub>/ month</sub>
                                            </span>
                                            <ul className="plan__list">
                                                <li className="plan__item">
                                                    <i className="ti ti-circle-check" /> 2 Months
                                                </li>
                                                <li className="plan__item">
                                                    <i className="ti ti-circle-check" /> Ultra HD
                                                </li>
                                                <li className="plan__item">
                                                    <i className="ti ti-circle-check" /> Limited Availability
                                                </li>
                                                <li className="plan__item">
                                                    <i className="ti ti-circle-check" /> Any Device
                                                </li>
                                                <li className="plan__item">
                                                    <i className="ti ti-circle-check" /> 24/7 Support
                                                </li>
                                            </ul>
                                            <button
                                                className="plan__btn"
                                                type="button"
                                                data-bs-toggle="modal"
                                                data-bs-target="#plan-modal"
                                            >
                                                Choose Plan
                                            </button>
                                        </div>
                                    </div>
                                    {/* end plan */}
                                </div>
                            </div>
                            <div
                                className="tab-pane fade d-none"
                                id="tab-3"
                                role="tabpanel"
                                aria-labelledby="3-tab"
                                tabIndex={0}
                            >
                                <div className="row">
                                    {/* item */}
                                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                        <div className="item">
                                            <div className="item__cover">
                                                <img src="img/covers/cover.jpg" alt="" />
                                                <a href="details.html" className="item__play">
                                                    <i className="ti ti-player-play-filled" />
                                                </a>
                                                <span className="item__rate item__rate--green">8.4</span>
                                                <button
                                                    className="item__favorite item__favorite--active"
                                                    type="button"
                                                >
                                                    <i className="ti ti-bookmark" />
                                                </button>
                                            </div>
                                            <div className="item__content">
                                                <h3 className="item__title">
                                                    <a href="details.html">I Dream in Another Language</a>
                                                </h3>
                                                <span className="item__category">
                                                    <a href="#">Action</a>
                                                    <a href="#">Triler</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end item */}
                                    {/* item */}
                                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                        <div className="item">
                                            <div className="item__cover">
                                                <img src="img/covers/cover2.jpg" alt="" />
                                                <a href="details.html" className="item__play">
                                                    <i className="ti ti-player-play-filled" />
                                                </a>
                                                <span className="item__rate item__rate--green">7.1</span>
                                                <button
                                                    className="item__favorite item__favorite--active"
                                                    type="button"
                                                >
                                                    <i className="ti ti-bookmark" />
                                                </button>
                                            </div>
                                            <div className="item__content">
                                                <h3 className="item__title">
                                                    <a href="details.html">Benched</a>
                                                </h3>
                                                <span className="item__category">
                                                    <a href="#">Comedy</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end item */}
                                    {/* item */}
                                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                        <div className="item">
                                            <div className="item__cover">
                                                <img src="img/covers/cover3.jpg" alt="" />
                                                <a href="details.html" className="item__play">
                                                    <i className="ti ti-player-play-filled" />
                                                </a>
                                                <span className="item__rate item__rate--red">6.3</span>
                                                <button
                                                    className="item__favorite item__favorite--active"
                                                    type="button"
                                                >
                                                    <i className="ti ti-bookmark" />
                                                </button>
                                            </div>
                                            <div className="item__content">
                                                <h3 className="item__title">
                                                    <a href="details.html">Whitney</a>
                                                </h3>
                                                <span className="item__category">
                                                    <a href="#">Romance</a>
                                                    <a href="#">Drama</a>
                                                    <a href="#">Music</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end item */}
                                    {/* item */}
                                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                        <div className="item">
                                            <div className="item__cover">
                                                <img src="img/covers/cover4.jpg" alt="" />
                                                <a href="details.html" className="item__play">
                                                    <i className="ti ti-player-play-filled" />
                                                </a>
                                                <span className="item__rate item__rate--yellow">6.9</span>
                                                <button
                                                    className="item__favorite item__favorite--active"
                                                    type="button"
                                                >
                                                    <i className="ti ti-bookmark" />
                                                </button>
                                            </div>
                                            <div className="item__content">
                                                <h3 className="item__title">
                                                    <a href="details.html">Blindspotting</a>
                                                </h3>
                                                <span className="item__category">
                                                    <a href="#">Comedy</a>
                                                    <a href="#">Drama</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end item */}
                                    {/* item */}
                                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                        <div className="item">
                                            <div className="item__cover">
                                                <img src="img/covers/cover5.jpg" alt="" />
                                                <a href="details.html" className="item__play">
                                                    <i className="ti ti-player-play-filled" />
                                                </a>
                                                <span className="item__rate item__rate--green">8.4</span>
                                                <button
                                                    className="item__favorite item__favorite--active"
                                                    type="button"
                                                >
                                                    <i className="ti ti-bookmark" />
                                                </button>
                                            </div>
                                            <div className="item__content">
                                                <h3 className="item__title">
                                                    <a href="details.html">I Dream in Another Language</a>
                                                </h3>
                                                <span className="item__category">
                                                    <a href="#">Action</a>
                                                    <a href="#">Triler</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end item */}
                                    {/* item */}
                                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                        <div className="item">
                                            <div className="item__cover">
                                                <img src="img/covers/cover6.jpg" alt="" />
                                                <a href="details.html" className="item__play">
                                                    <i className="ti ti-player-play-filled" />
                                                </a>
                                                <span className="item__rate item__rate--green">7.1</span>
                                                <button
                                                    className="item__favorite item__favorite--active"
                                                    type="button"
                                                >
                                                    <i className="ti ti-bookmark" />
                                                </button>
                                            </div>
                                            <div className="item__content">
                                                <h3 className="item__title">
                                                    <a href="details.html">Benched</a>
                                                </h3>
                                                <span className="item__category">
                                                    <a href="#">Comedy</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end item */}
                                    {/* item */}
                                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                        <div className="item">
                                            <div className="item__cover">
                                                <img src="img/covers/cover7.jpg" alt="" />
                                                <a href="details.html" className="item__play">
                                                    <i className="ti ti-player-play-filled" />
                                                </a>
                                                <span className="item__rate item__rate--green">7.1</span>
                                                <button
                                                    className="item__favorite item__favorite--active"
                                                    type="button"
                                                >
                                                    <i className="ti ti-bookmark" />
                                                </button>
                                            </div>
                                            <div className="item__content">
                                                <h3 className="item__title">
                                                    <a href="details.html">Benched</a>
                                                </h3>
                                                <span className="item__category">
                                                    <a href="#">Comedy</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end item */}
                                    {/* item */}
                                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                        <div className="item">
                                            <div className="item__cover">
                                                <img src="img/covers/cover8.jpg" alt="" />
                                                <a href="details.html" className="item__play">
                                                    <i className="ti ti-player-play-filled" />
                                                </a>
                                                <span className="item__rate item__rate--red">5.5</span>
                                                <button
                                                    className="item__favorite item__favorite--active"
                                                    type="button"
                                                >
                                                    <i className="ti ti-bookmark" />
                                                </button>
                                            </div>
                                            <div className="item__content">
                                                <h3 className="item__title">
                                                    <a href="details.html">I Dream in Another Language</a>
                                                </h3>
                                                <span className="item__category">
                                                    <a href="#">Action</a>
                                                    <a href="#">Triler</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end item */}
                                    {/* item */}
                                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                        <div className="item">
                                            <div className="item__cover">
                                                <img src="img/covers/cover9.jpg" alt="" />
                                                <a href="details.html" className="item__play">
                                                    <i className="ti ti-player-play-filled" />
                                                </a>
                                                <span className="item__rate item__rate--yellow">6.7</span>
                                                <button
                                                    className="item__favorite item__favorite--active"
                                                    type="button"
                                                >
                                                    <i className="ti ti-bookmark" />
                                                </button>
                                            </div>
                                            <div className="item__content">
                                                <h3 className="item__title">
                                                    <a href="details.html">Blindspotting</a>
                                                </h3>
                                                <span className="item__category">
                                                    <a href="#">Comedy</a>
                                                    <a href="#">Drama</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end item */}
                                    {/* item */}
                                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                        <div className="item">
                                            <div className="item__cover">
                                                <img src="img/covers/cover10.jpg" alt="" />
                                                <a href="details.html" className="item__play">
                                                    <i className="ti ti-player-play-filled" />
                                                </a>
                                                <span className="item__rate item__rate--red">5.6</span>
                                                <button
                                                    className="item__favorite item__favorite--active"
                                                    type="button"
                                                >
                                                    <i className="ti ti-bookmark" />
                                                </button>
                                            </div>
                                            <div className="item__content">
                                                <h3 className="item__title">
                                                    <a href="details.html">Whitney</a>
                                                </h3>
                                                <span className="item__category">
                                                    <a href="#">Romance</a>
                                                    <a href="#">Drama</a>
                                                    <a href="#">Music</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end item */}
                                    {/* item */}
                                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                        <div className="item">
                                            <div className="item__cover">
                                                <img src="img/covers/cover11.jpg" alt="" />
                                                <a href="details.html" className="item__play">
                                                    <i className="ti ti-player-play-filled" />
                                                </a>
                                                <span className="item__rate item__rate--green">9.2</span>
                                                <button
                                                    className="item__favorite item__favorite--active"
                                                    type="button"
                                                >
                                                    <i className="ti ti-bookmark" />
                                                </button>
                                            </div>
                                            <div className="item__content">
                                                <h3 className="item__title">
                                                    <a href="details.html">Benched</a>
                                                </h3>
                                                <span className="item__category">
                                                    <a href="#">Comedy</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end item */}
                                    {/* item */}
                                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                        <div className="item">
                                            <div className="item__cover">
                                                <img src="img/covers/cover12.jpg" alt="" />
                                                <a href="details.html" className="item__play">
                                                    <i className="ti ti-player-play-filled" />
                                                </a>
                                                <span className="item__rate item__rate--green">8.4</span>
                                                <button
                                                    className="item__favorite item__favorite--active"
                                                    type="button"
                                                >
                                                    <i className="ti ti-bookmark" />
                                                </button>
                                            </div>
                                            <div className="item__content">
                                                <h3 className="item__title">
                                                    <a href="details.html">I Dream in Another Language</a>
                                                </h3>
                                                <span className="item__category">
                                                    <a href="#">Action</a>
                                                    <a href="#">Triler</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end item */}
                                    {/* item */}
                                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                        <div className="item">
                                            <div className="item__cover">
                                                <img src="img/covers/cover13.jpg" alt="" />
                                                <a href="details.html" className="item__play">
                                                    <i className="ti ti-player-play-filled" />
                                                </a>
                                                <span className="item__rate item__rate--green">8.0</span>
                                                <button
                                                    className="item__favorite item__favorite--active"
                                                    type="button"
                                                >
                                                    <i className="ti ti-bookmark" />
                                                </button>
                                            </div>
                                            <div className="item__content">
                                                <h3 className="item__title">
                                                    <a href="details.html">I Dream in Another Language</a>
                                                </h3>
                                                <span className="item__category">
                                                    <a href="#">Action</a>
                                                    <a href="#">Triler</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end item */}
                                    {/* item */}
                                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                        <div className="item">
                                            <div className="item__cover">
                                                <img src="img/covers/cover14.jpg" alt="" />
                                                <a href="details.html" className="item__play">
                                                    <i className="ti ti-player-play-filled" />
                                                </a>
                                                <span className="item__rate item__rate--green">7.2</span>
                                                <button
                                                    className="item__favorite item__favorite--active"
                                                    type="button"
                                                >
                                                    <i className="ti ti-bookmark" />
                                                </button>
                                            </div>
                                            <div className="item__content">
                                                <h3 className="item__title">
                                                    <a href="details.html">Benched</a>
                                                </h3>
                                                <span className="item__category">
                                                    <a href="#">Comedy</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end item */}
                                    {/* item */}
                                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                        <div className="item">
                                            <div className="item__cover">
                                                <img src="img/covers/cover15.jpg" alt="" />
                                                <a href="details.html" className="item__play">
                                                    <i className="ti ti-player-play-filled" />
                                                </a>
                                                <span className="item__rate item__rate--yellow">5.9</span>
                                                <button
                                                    className="item__favorite item__favorite--active"
                                                    type="button"
                                                >
                                                    <i className="ti ti-bookmark" />
                                                </button>
                                            </div>
                                            <div className="item__content">
                                                <h3 className="item__title">
                                                    <a href="details.html">Whitney</a>
                                                </h3>
                                                <span className="item__category">
                                                    <a href="#">Romance</a>
                                                    <a href="#">Drama</a>
                                                    <a href="#">Music</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end item */}
                                    {/* item */}
                                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                        <div className="item">
                                            <div className="item__cover">
                                                <img src="img/covers/cover16.jpg" alt="" />
                                                <a href="details.html" className="item__play">
                                                    <i className="ti ti-player-play-filled" />
                                                </a>
                                                <span className="item__rate item__rate--green">8.3</span>
                                                <button
                                                    className="item__favorite item__favorite--active"
                                                    type="button"
                                                >
                                                    <i className="ti ti-bookmark" />
                                                </button>
                                            </div>
                                            <div className="item__content">
                                                <h3 className="item__title">
                                                    <a href="details.html">Blindspotting</a>
                                                </h3>
                                                <span className="item__category">
                                                    <a href="#">Comedy</a>
                                                    <a href="#">Drama</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end item */}
                                    {/* item */}
                                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                        <div className="item">
                                            <div className="item__cover">
                                                <img src="img/covers/cover17.jpg" alt="" />
                                                <a href="details.html" className="item__play">
                                                    <i className="ti ti-player-play-filled" />
                                                </a>
                                                <span className="item__rate item__rate--green">8.0</span>
                                                <button
                                                    className="item__favorite item__favorite--active"
                                                    type="button"
                                                >
                                                    <i className="ti ti-bookmark" />
                                                </button>
                                            </div>
                                            <div className="item__content">
                                                <h3 className="item__title">
                                                    <a href="details.html">I Dream in Another Language</a>
                                                </h3>
                                                <span className="item__category">
                                                    <a href="#">Action</a>
                                                    <a href="#">Triler</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end item */}
                                    {/* item */}
                                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                                        <div className="item">
                                            <div className="item__cover">
                                                <img src="img/covers/cover18.jpg" alt="" />
                                                <a href="details.html" className="item__play">
                                                    <i className="ti ti-player-play-filled" />
                                                </a>
                                                <span className="item__rate item__rate--green">7.1</span>
                                                <button
                                                    className="item__favorite item__favorite--active"
                                                    type="button"
                                                >
                                                    <i className="ti ti-bookmark" />
                                                </button>
                                            </div>
                                            <div className="item__content">
                                                <h3 className="item__title">
                                                    <a href="details.html">Benched</a>
                                                </h3>
                                                <span className="item__category">
                                                    <a href="#">Comedy</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end item */}
                                </div>
                                <div className="row">
                                    {/* paginator */}
                                    <div className="col-12">
                                        {/* paginator mobile */}
                                        <div className="paginator-mob">
                                            <span className="paginator-mob__pages">18 of 1713</span>
                                            <ul className="paginator-mob__nav">
                                                <li>
                                                    <a href="#">
                                                        <i className="ti ti-chevron-left" />
                                                        <span>Prev</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span>Next</span>
                                                        <i className="ti ti-chevron-right" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* end paginator mobile */}
                                        {/* paginator desktop */}
                                        <ul className="paginator">
                                            <li className="paginator__item paginator__item--prev">
                                                <a href="#">
                                                    <i className="ti ti-chevron-left" />
                                                </a>
                                            </li>
                                            <li className="paginator__item">
                                                <a href="#">1</a>
                                            </li>
                                            <li className="paginator__item paginator__item--active">
                                                <a href="#">2</a>
                                            </li>
                                            <li className="paginator__item">
                                                <a href="#">3</a>
                                            </li>
                                            <li className="paginator__item">
                                                <a href="#">4</a>
                                            </li>
                                            <li className="paginator__item">
                                                <span>...</span>
                                            </li>
                                            <li className="paginator__item">
                                                <a href="#">87</a>
                                            </li>
                                            <li className="paginator__item paginator__item--next">
                                                <a href="#">
                                                    <i className="ti ti-chevron-right" />
                                                </a>
                                            </li>
                                        </ul>
                                        {/* end paginator desktop */}
                                    </div>
                                    {/* end paginator */}
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="tab-4"
                                role="tabpanel"
                                aria-labelledby="4-tab"
                                tabIndex={0}
                            >
                                <div className="row">
                                    {/* details form */}
                                    <div className="col-12 col-lg-6">
                                        <form action="#" className="sign__form sign__form--full">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h4 className="sign__title">Profile details</h4>
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="username">
                                                            Username
                                                        </label>
                                                        <input
                                                            id="username"
                                                            type="text"
                                                            name="username"
                                                            className="sign__input"
                                                            placeholder="User 123"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="email">
                                                            Email
                                                        </label>
                                                        <input
                                                            id="email"
                                                            type="text"
                                                            name="email"
                                                            className="sign__input"
                                                            placeholder="email@email.com"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="fname">
                                                            Name
                                                        </label>
                                                        <input
                                                            id="fname"
                                                            type="text"
                                                            name="fname"
                                                            className="sign__input"
                                                            placeholder="John Doe"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label
                                                            className="sign__label"
                                                            htmlFor="sign__gallery-upload"
                                                        >
                                                            Avatar
                                                        </label>
                                                        <div className="sign__gallery">
                                                            <label id="gallery1" htmlFor="sign__gallery-upload">
                                                                Upload (40x40)
                                                            </label>
                                                            <input
                                                                data-name="#gallery1"
                                                                id="sign__gallery-upload"
                                                                name="gallery"
                                                                className="sign__gallery-upload"
                                                                type="file"
                                                                accept=".png, .jpg, .jpeg"
                                                                multiple=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button
                                                        className="sign__btn sign__btn--small"
                                                        type="button"
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* end details form */}
                                    {/* password form */}
                                    <div className="col-12 col-lg-6">
                                        <form action="#" className="sign__form sign__form--full">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h4 className="sign__title">Change password</h4>
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="oldpass">
                                                            Old password
                                                        </label>
                                                        <input
                                                            id="oldpass"
                                                            type="password"
                                                            name="oldpass"
                                                            className="sign__input"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="newpass">
                                                            New password
                                                        </label>
                                                        <input
                                                            id="newpass"
                                                            type="password"
                                                            name="newpass"
                                                            className="sign__input"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="confirmpass">
                                                            Confirm new password
                                                        </label>
                                                        <input
                                                            id="confirmpass"
                                                            type="password"
                                                            name="confirmpass"
                                                            className="sign__input"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" htmlFor="select">
                                                            Select
                                                        </label>
                                                        <select
                                                            name="select"
                                                            id="select"
                                                            className="sign__select"
                                                        >
                                                            <option value={0}>Option</option>
                                                            <option value={1}>Option 2</option>
                                                            <option value={2}>Option 3</option>
                                                            <option value={3}>Option 4</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button
                                                        className="sign__btn sign__btn--small"
                                                        type="button"
                                                    >
                                                        Change
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* end password form */}
                                </div>
                            </div>
                        </div>
                        {/* end content tabs */}
                    </div>
                </div>
                {/* end content */}
            </>

            {/* <Footer /> */}
        </>
    );
};

export default MyAcount;
