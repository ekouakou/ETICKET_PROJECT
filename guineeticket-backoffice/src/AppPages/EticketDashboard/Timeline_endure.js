import React, { useState } from 'react';
import moment from 'moment';

const Timeline = () => {
  // Générer les 10 jours avec 4 jours avant et 5 jours après aujourd'hui
  const today = moment();
  const daysAround = Array.from({ length: 10 }, (_, i) => today.clone().subtract(3 - i, 'days').format('YYYY-MM-DD'));

  // Définir la date sélectionnée par défaut (aujourd'hui)
  const [selectedDate, setSelectedDate] = useState(today.format('YYYY-MM-DD'));

  // Exemple de tableau d'événements
  const events = [
    { date: '2024-09-07', time: '16:30 - 17:00', description: '9 Dashboard UI/UX Design Review', leader: 'Mark Morris' },
    { date: '2024-09-07', time: '10:20 - 11:00', description: 'Marketing Campaign Discussion', leader: 'Peter Marcus' },
    // Ajoutez d'autres événements ici
  ];

  // Filtrer les événements pour la date sélectionnée
  const filteredEvents = events.filter(event => event.date === selectedDate);

  return (
    <div className="col-lg-12 col-xl-12 col-xxl-6 mb-10 mb-xl-0">
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
            {daysAround.map((date, index) => (
              <li className="nav-item p-0 ms-0" role="presentation" key={index}>
                <a className={`nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px py-4 px-3 ${selectedDate === date ? 'btn-active-danger active' : 'btn-active-danger'}`} onClick={() => setSelectedDate(date)} role="tab">
                  <span className="fs-7 fw-semibold">{moment(date).format('dd')}</span>
                  <span className="fs-6 fw-bold">{moment(date).format('DD')}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="tab-content mb-2 px-9">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <div className="d-flex align-items-center mb-6" key={index}>
                  <span className="bullet bullet-vertical d-flex align-items-center min-h-70px mh-100 me-4 bg-info" />
                  <div className="flex-grow-1 me-5">
                    <div className="text-gray-800 fw-semibold fs-2">
                      {event.time}
                      <span className="text-gray-500 fw-semibold fs-7"> PM </span>
                    </div>
                    <div className="text-gray-700 fw-semibold fs-6">{event.description}</div>
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
