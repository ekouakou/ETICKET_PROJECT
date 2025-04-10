import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import { crudData } from "../../services/apiUtils";
import { useNavigate } from 'react-router-dom';


const Timeline = () => {
  const apiUrl = "TicketManager.php";
  const paths = JSON.parse(localStorage.getItem("appPaths")) || {};

  const today = moment();
  const [selectedDate, setSelectedDate] = useState(today.format('YYYY-MM-DD'));
  const [events, setEvents] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [eventData, setEventData] = useState([]); // Initialize as empty array
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const convertDateFormat = (dateString) => {
    if (!dateString || typeof dateString !== 'string') {
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
        const events = response.data?.data || []; // Add safeguard here
        setEventData(events);
        setEvents(events);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
        setEventData([]); // Set to empty array on error
        setEvents([]);
        setLoading(false);
      });
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userConnectedData'));
    if (!storedUser) {
      navigate(paths.signIn); // Redirect if user is empty
    } else {
      setUser(storedUser);
      fetchData({
        mode: 'listEvenement',
        STR_UTITOKEN: storedUser.STR_UTITOKEN,
        statistique: true,
        length: 3,
        DT_BEGIN: today.format('YYYY-MM-DD'),
        DT_END: "2025-08-31"
      }, apiUrl, setEventData);
    }
  }, [navigate, paths.signIn]);

  // Function to fetch events from the API
  const fetchEvents = async (date) => {
    try {
      if (user && user.STR_UTITOKEN) {
        fetchData({
          mode: 'listEvenement',
          STR_UTITOKEN: user.STR_UTITOKEN,
          DT_BEGIN: date,
          length: 3,
          statistique: true,
          DT_END: "2025-08-31"
        }, apiUrl, setEventData);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des événements:', error);
      setEventData([]);
      setEvents([]);
    }
  };

  // Fetch events for default date (today) when component mounts
  useEffect(() => {
    if (user && user.STR_UTITOKEN) {
      fetchEvents(selectedDate);
    }
  }, [selectedDate, user]);

  // Handle date click
  const handleDateClick = (date) => {
    setSelectedDate(date);
    if (user && user.STR_UTITOKEN) {
      fetchEvents(date);
    }
  };

  // Generate 10 days (1 day before today and 9 days after)
  const last10Days = Array.from({ length: 10 }, (_, i) =>
    today.clone().subtract(1, 'days').add(i, 'days').format('YYYY-MM-DD')
  );

  // Filter events for selected date - with a safety check
  const filteredEvents = Array.isArray(eventData)
    ? eventData.filter(event => {
      if (!event || !event.DT_EVEBEGIN) return false;
      return convertDateFormat(event.DT_EVEBEGIN) === selectedDate;
    })
    : [];

  return (
    <div className="col-lg-12">
      <div className="card h-md-100">
        <div className="card-header border-0 pt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold text-gray-900">Evenement du jour</span>
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
                <a className={`nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 ${selectedDate === date ? 'btn-active-danger active' : 'btn-active-danger'}`}
                  onClick={() => handleDateClick(date)}
                  role="tab"
                >
                  <span className="fs-7 fw-semibold">{moment(date).format('dd')}</span>
                  <span className="fs-6 fw-bold">{moment(date).format('DD')}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="tab-content mb-2 px-9">
            {loading ? (
              <div className="text-center">Loading...</div>
            ) : filteredEvents.length > 0 ? (
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
                      Lead by <a href="#" className="text-primary opacity-75-hover fw-semibold">{event.leader || 'Unknown'}</a>
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
