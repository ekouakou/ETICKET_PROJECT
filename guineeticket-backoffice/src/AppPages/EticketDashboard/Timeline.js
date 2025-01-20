import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import { crudData } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';



const Timeline = () => {
  const apiUrl = "TicketManager.php";
  const paths = JSON.parse(localStorage.getItem("appPaths"));

  const today = moment();
  const [selectedDate, setSelectedDate] = useState(today.format('YYYY-MM-DD'));
  const [events, setEvents] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');
    const [eventData, setEventData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [user, setUser] = useState(null); // Add state for user
    const navigate = useNavigate();

    const convertDateFormat = (dateString) => {
      if (typeof dateString !== 'string') {
        console.error('Date string must be a string');
        return '';
      }
  
      const [day, month, year] = dateString.split('/');
      
      if (!day || !month || !year || isNaN(day) || isNaN(month) || isNaN(year)) {
        console.error('Invalid date format:', dateString);
        return '';
      }
      
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    };

  const fetchData = (params, url, setData) => {
    crudData(params, url)
        .then(response => {
            const events = response.data.data;
            setEventData(events);
            setEvents(events);;
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données:', error);
            //setLoading(false);
        });
};

useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userConnectedData'));
    if (!storedUser) {
        navigate(paths.signIn); // Redirige vers la page d'accueil si l'utilisateur est vide
    } else {
        setUser(storedUser); // Set user in state
        fetchData({ mode: 'listEvenement', STR_UTITOKEN: storedUser.STR_UTITOKEN, statistique:true,length:3, DT_BEGIN: today.format('YYYY-MM-DD'), DT_END: "2025-08-31" }, apiUrl, setEventData);
        //fetchData({ mode: 'listBanniere', STR_UTITOKEN: storedUser.STR_UTITOKEN, LG_AGEID: storedUser.LG_AGEID, DT_BEGIN: "2020-01-01", DT_END: "2027-08-31" }, apiUrl, setEventData);
    }
}, [navigate]);

  // Fonction pour récupérer les événements depuis l'API
  const fetchEvents = async (date) => {
    try {
      fetchData({ mode: 'listEvenement', STR_UTITOKEN: user.STR_UTITOKEN, DT_BEGIN: date, length:3, statistique:true, DT_END: "2025-08-31" }, apiUrl, setEventData);

      //const response = await axios.get(`https://example.com/api/events?date=${date}`);
      //setEvents(response.data); // Adapter selon la structure des données renvoyées par votre API
    } catch (error) {
      console.error('Erreur lors de la récupération des événements:', error);
    }
  };

  // Récupérer les événements pour la date par défaut (aujourd'hui) au montage du composant
  useEffect(() => {
    fetchEvents(selectedDate);
  }, [selectedDate]);

  // Fonction pour gérer le clic sur une date
  const handleDateClick = (date) => {
    fetchData({ mode: 'listEvenement', STR_UTITOKEN: user.STR_UTITOKEN, statistique:true, length:3, DT_BEGIN: date, DT_END: "2025-08-31" }, apiUrl, setEventData);

    console.log('Date sélectionnée:', date); // Affiche la date sélectionnée dans la console
    setSelectedDate(date); // Met à jour la date sélectionnée
    fetchEvents(date); // Récupère les événements pour la nouvelle date
  };

  // Générer les 10 jours (4 jours avant aujourd'hui et 5 jours après aujourd'hui)
  const last10Days = Array.from({ length: 10 }, (_, i) => today.clone().subtract(1, 'days').add(i, 'days').format('YYYY-MM-DD'));

  // Filtrer les événements pour la date sélectionnée
const filteredEvents = eventData.filter(event => {
  console.log('Event date from API:', event.DT_EVEBEGIN); // Vérifiez la valeur de DT_EVEBEGIN
  return convertDateFormat(event.DT_EVEBEGIN) === selectedDate;
});

  
  
  // console.log(filteredEvents);

  return (
    <div className="col-lg-12">
      <div className="card h-md-100">
        <div className="card-header border-0 pt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold text-gray-900">What’s up Today</span>
            <span className="text-muted mt-1 fw-semibold fs-7">Total 424,567 deliveries</span>
          </h3>
          <div className="card-toolbar">
            <a href="#" className="btn btn-sm btn-light">Report Center</a>
          </div>
        </div>

        <div className="card-body pt-7 px-0">
          <ul className="nav nav-stretch nav-pills nav-pills-custom nav-pills-active-custom d-flex justify-content-between mb-8 px-5" role="tablist">
            {last10Days.map((date, index) => (
              <li className="nav-item p-0 ms-0" role="presentation" key={index}>
                <a
                  className={`nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 ${selectedDate === date ? 'btn-active-danger active' : 'btn-active-danger'}`}
                  onClick={() => handleDateClick(date)}
                  role="tab"
                >
                  <span className="fs-7 fw-semibold">{moment(date).format('dd')}</span>
                  <span className="fs-6 fw-bold">{moment(date).format('DD')}</span>
                </a>
              </li>
            ))}
          </ul>

{/* 
          DT_EVEBEGIN
          DT_EVECREATED
          DT_EVEEND
          DT_EVEUPDATED
          HR_EVEBEGIN
          HR_EVEEND
          LG_AGEID
          LG_EVEID
          LG_LSTID
          LG_LSTPLACEID
          LG_UTICREATEDID
          STR_EVEANNONCEUR
          STR_EVEBANNER
          STR_EVEDESCRIPTION
          STR_EVEDISPLAYROOM
          STR_EVENAME
          STR_EVEPIC
          STR_EVESTATUT
          STR_EVESTATUTFREE
          STR_EVETOBANNER */}

          <div className="tab-content mb-2 px-9">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <div className="d-flex align-items-center mb-6" key={index}>
                  <span className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info" />
                  <div className="flex-grow-1 me-5">
                    <div className="text-gray-800 fw-semibold fs-2">
                      {event.HR_EVEBEGIN}  - {event.HR_EVEEND}
                      <span className="text-gray-500 fw-semibold fs-7"> {event.STR_EVENAME} </span>
                    </div>
                    <div className="text-gray-700 fw-semibold fs-6">{event.STR_EVENAME}</div>
                    <div className="text-gray-500 fw-semibold fs-7">
                      Lead by <a href="#" className="text-primary opacity-75-hover fw-semibold">{event.leader}</a>
                    </div>
                  </div>
                  <a href="#" className="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#kt_modal_create_project">
                    View
                  </a>
                </div>
              ))
            ) : (
              <div className="text-center">No events for this date</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
