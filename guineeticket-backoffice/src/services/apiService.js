// src/services/apiService.js

import axios from 'axios';

const getRootUrl = (port) => {
  const originWithoutPort = window.location.protocol + '//' + window.location.hostname;
  const defaultPort = "80";
  const baseUrl = "/eticketbackend/backoffice/webservices/";
  //const baseUrl = "/backoffice/webservices/";
  // const baseUrl = "/webservices/";
  const finalPort = port ? port : defaultPort;
  return `https://192.168.1.4:${finalPort}/`;
  //return `${originWithoutPort}:${finalPort}${baseUrl}`;
};


const getFullUrl = () => {
  const { protocol, hostname, port } = window.location;
  const portPart = port ? `:${port}` : '';
  // return `https://www.guineeticket.com/`;
  // return `http://192.168.1.5/`;
  return `${protocol}//${hostname}/`;
};

const fullUrl = getFullUrl();

// +++++++++++++++ FONCTION +++++++++++++++++++

//const urlBaseImage = "eticketbackend/backoffice/"//alert(fullUrl+urlBaseImage); backoffice
const rootUrl = fullUrl + "eticketbackend/backoffice/webservices/"; //Production //eticketbackend/


const fetchEvenements = (params) => {
  return axios.post(`${rootUrl}TicketManager.php`, params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
};

// Vous pouvez ajouter d'autres fonctions pour d'autres appels API ici
// Par exemple, une fonction pour obtenir les détails d'un événement

const doConnexion = (params) => {
  return axios.post(`${rootUrl}Authentification.php`, params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
};


const fetchHomesectionProduct = (params) => {
  return axios.post(`${rootUrl}SectionProductManager.php`, params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
};


// GLOBAL CRUD

const crudData = (params, apiUrl) => {
  return axios.post(`${rootUrl}${apiUrl}`, params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
};





// paths.js (si vous voulez un fichier séparé)
// const paths = {
//   signIn: "/",
//   saveEvent: "/save-event",
//   eventDetails: "/event-details",
//   eventList: "/liste-evenement",
//   saveBanner: "/save-banner",
//   clientList: "/liste-client",
//   ticketList: "/liste-ticket",
//   detailClient: "/detail-client",


//   dashboard: "/tableau-bord",
//   saveEventData: "/save-event-data",
//   listeEventData: "/liste-event-data",
//   saveEventBanner: "/save-event-banner",
//   listeEventBanner: "/liste-event-banniere",
//   listeUtilisateurs: "/liste-utilisateurs",
//   saveUtilisateurs: "/save-utilisateurs",
//   notFound: "*",

// };

// localStorage.setItem("appPaths", JSON.stringify(paths));

export { fetchHomesectionProduct, crudData, fetchEvenements, doConnexion };
