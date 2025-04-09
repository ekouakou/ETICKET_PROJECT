import React, { useState, useEffect } from "react";
import { Dropdown, Button, Form, Spinner } from 'react-bootstrap';
import { FaChartBar, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import axios from 'axios';
import { crudData } from "../../services/apiUtils";
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const HighlightCard = () => {
  const apiUrl = "TicketManager.php";
  const paths = JSON.parse(localStorage.getItem("appPaths"));

  const today = moment();
  const [selectedDate, setSelectedDate] = useState(today.format('YYYY-MM-DD'));
  const [selectedEvent, setSelectedEvent] = useState('');
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false); // Pour afficher le spinner
  const navigate = useNavigate();

  // Fonction de récupération des données
  const fetchData = (params) => {
    console.log('Paramètres de la requête:', params); // Log pour débogage
    setLoading(true); // Démarrer le spinner
    crudData(params, apiUrl)
      .then(response => {
        console.log('Réponse API:', response); // Log pour débogage
        const events = response.data;
        setEventData(events);
        setLoading(false); // Arrêter le spinner
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
        setLoading(false); // Arrêter le spinner même en cas d'erreur
      });
  };

  // Fonction pour calculer les totaux basés sur les paramètres de date et d'événement sélectionnés
  const calculateTotals = () => {
    const storedUser = JSON.parse(localStorage.getItem('userConnectedData'));
    if (storedUser) {
      fetchData({
        mode: 'totalVenteTicket',
        STR_UTITOKEN: storedUser.STR_UTITOKEN,
        statistique: true,
        DT_BEGIN: selectedDate,
        DT_END: "2025-08-31",
        LG_EVEID: selectedEvent,
        LG_AGEREQUESTID: ''
      });
    }
  };

  // Récupérer les données à la première exécution
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userConnectedData'));
    if (!storedUser) {
      navigate(paths.signIn);
    } else {
      fetchData({
        mode: 'totalVenteTicket',
        STR_UTITOKEN: storedUser.STR_UTITOKEN,
        statistique: true,
        DT_BEGIN: today.format('YYYY-MM-DD'),
        DT_END: "2025-08-31",
        LG_EVEID: '',
        LG_AGEREQUESTID: ''
      });
    }
  }, [navigate, paths.signIn]); // Enlever `today` pour éviter les appels répétitifs

  // Timeout pour éviter un chargement infini
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (loading) {
        setLoading(false);
        console.error('La requête a pris trop de temps.');
      }
    }, 10000); // Timeout après 10 secondes

    return () => clearTimeout(timeout); // Nettoyage du timeout
  }, [loading]);

  const data = eventData[0] || {};

  return (
    <div className="card card-flush">
      {/* Header */}
      <div className="card-header pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold text-gray-900">Highlights</span>
          <span className="text-gray-500 mt-1 fw-semibold fs-6">
            Latest social statistics
          </span>
        </h3>

        {/* Toolbar */}
        <div className="card-toolbar">
          <Dropdown>
            <Dropdown.Toggle variant="" className="btn btn-sm btn-light">
              Sélectionner
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-100 p-4" style={{ minWidth: '300px' }}>
              <Form>
                <Form.Group className="mb-3" controlId="date">
                  <Form.Label>Sélectionner une date</Form.Label>
                  <Form.Control
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="event">
                  <Form.Label>Sélectionner un événement</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedEvent}
                    onChange={(e) => setSelectedEvent(e.target.value)}
                  >
                    <option value="">Sélectionner un événement</option>
                    <option value="event1">Événement 1</option>
                    <option value="event2">Événement 2</option>
                  </Form.Control>
                </Form.Group>

                <Button
                  variant="primary"
                  onClick={() => {
                    calculateTotals();
                    document.querySelector('.dropdown-toggle').click(); // Fermer le dropdown
                  }}
                >
                  {loading ? (
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/>
                  ) : (
                    'Afficher les statistiques'
                  )}
                </Button>
              </Form>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {/* Body */}
      <div className="card-body pt-5">
        {/* Total client */}
        <div className="d-flex flex-stack">
          <div className="text-gray-700 fw-semibold fs-6 me-2">Total client</div>
          <div className="d-flex align-items-center">
            <FaArrowUp className="text-success me-2" />
            <span className="text-gray-900 fw-bolder fs-6">{data.NOMBRE || '0'}</span>
            <span className="text-gray-500 fw-bold fs-6">/10</span>
          </div>
        </div>

        <div className="separator separator-dashed my-3" />

        {/* Montant total event */}
        <div className="d-flex flex-stack">
          <div className="text-gray-700 fw-semibold fs-6 me-2">Montant total event</div>
          <div className="d-flex align-items-center">
            <FaArrowDown className="text-danger me-2" />
            <span className="text-gray-900 fw-bolder fs-6">{data.MONTANT || '0'}</span>
          </div>
        </div>

        <div className="separator separator-dashed my-3" />

        {/* Total evenement */}
        <div className="d-flex flex-stack">
          <div className="text-gray-700 fw-semibold fs-6 me-2">Total evenement</div>
          <div className="d-flex align-items-center">
            <FaArrowUp className="text-success me-2" />
            <span className="text-gray-900 fw-bolder fs-6">{data.NOMBRE || '0'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
