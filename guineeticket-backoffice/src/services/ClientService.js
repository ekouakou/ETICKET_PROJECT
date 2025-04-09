// eventService.js
import axios from "axios";
import { authService } from "./AuthService";
import { crudData } from "./apiUtils";


class ClientService {
  constructor() {
    this.endPoint = process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL;
    this.TicketendPoint = process.env.REACT_APP_TICKET_MANAGER_API_URL;
  }

  async getEvents(navigate, dateRange = { start: "2020-01-01", end: "2025-08-31" }) {
    const user = authService.checkAuth(navigate);
    if (!user) return false;

    try {
      // fetchData({ mode: 'listUtilisateur', STR_UTITOKEN: user.STR_UTITOKEN, LG_PROID: user.LG_PROID}, apiUrl, setEventData);

      const response = await crudData(
        { mode: 'listClient', STR_UTITOKEN: user.STR_UTITOKEN, LG_PROID: user.LG_PROID, search_value: '', start: 1, length: 100 },
        this.endPoint
      );
      return response.data?.data || [];
    } catch (error) {
      console.error("Erreur lors de la récupération des événements:", error);
      return [];
    }
  }

  async getClientTickets(navigate, LG_CLIID, dateRange = { start: "2020-01-01", end: "2025-08-31" }) {

    const user = authService.checkAuth(navigate);
    if (!user) return false;
    try {

      // fetchData({ mode: 'listUtilisateur', STR_UTITOKEN: user.STR_UTITOKEN, LG_PROID: user.LG_PROID}, apiUrl, setEventData);
      //{ mode: 'listTicket', LG_CLIID: userData.STR_CLILOGIN, DT_BEGIN: "2024-01-01", DT_END: "2024-10-06" }
      const response = await crudData(
        { mode: 'listTicket', LG_CLIID: LG_CLIID, DT_BEGIN: "2024-01-01", DT_END: "2025-10-06" },
        process.env.REACT_APP_TICKET_MANAGER_API_URL
      );
      return response.data?.data || [];
    } catch (error) {
      console.error("Erreur lors de la récupération des événements:", error);
      return [];
    }
  }

  async sendTicket(navigate, eventId, status) {
    const user = authService.checkAuth(navigate);
    if (!user) return false;

    try {
      await crudData(
        {
          mode: "sendTicket",
          LG_TICID: eventId,
          STR_TICNAME: status,
          STR_UTITOKEN: user.STR_UTITOKEN,
        },
        this.TicketendPoint
      );
      return true;
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut:", error);
      return false;
    }
  }

  async deleteEvent(navigate, eventId) {
    return this.updateEventStatus(navigate, eventId, "delete");
  }


  // "LG_TICID": "0EmRR1RsnPHYNZ6aLT8h",
  //           "STR_TICNAME": "NRFQs",
  //           "STR_TICPHONE": "224621616417",
  //           "STR_TICMAIL": "",
  //           "STR_TICBARECODE": "images/product/0EmRR1RsnPHYNZ6aLT8h.png",
  //           "DT_TCICREATED": "16/01/2025 12:43:39",
  //           "DT_TCIVALIDATED": "11/02/2025",
  //           "STR_EVENAME": "Plus aucune livraison de gaz russe vers l'Europe via l'Ukraine • FRANCE 24",
  //           "STR_EVEDESCRIPTION": "Le géant public russe de l'énergie Gazprom a annoncé que les exportations de gaz à destination de l'Europe effectuées via l'Ukraine ont été suspendues mercredi à 8 h (5 h GMT)",
  //           "STR_EVEPIC": "images/product/1738438508.jpeg",
  //           "STR_EVEBANNER": "images/product/",
  //           "DT_EVECREATED": "01/01/2025 08:35:11",
  //           "DT_EVEUPDATED": "01/02/2025 19:35:08",
  //           "STR_EVEANNONCEUR": "edmond",
  //           "LG_LSTPLACEID": "0000000000000000000000000000000000000803",
  //           "str_ACTION": "<span class='text-primary' title='Consultation de l'evenement Plus aucune livraison de gaz russe vers l'Europe via l'Ukraine • FRANCE 24'></span>"

  getColumns() {
    return [
      /*{
        data: "STR_CLIFIRSTNAME",
        title: "Photo",
        render: (data, type, row) => `
          <div class="d-flex align-items-center">
            <img src="${process.env.REACT_APP_BASE_IMAGE_URL + row.STR_UTIPIC}" 
              alt="" 
              style="width: 40px; height: 40px; margin-right: 10px"/>
          </div>
        `,
      },*/
      { data: "STR_CLIFIRSTNAME", title: "Nom" },
      { data: "STR_CLILASTNAME", title: "Prenom" },
      { data: "STR_CLIPHONE", title: "Téléphone" },
      { data: "STR_CLIMAIL", title: "Email" },


      { data: "STR_CLILOGIN", title: "Login" },
      { data: "NOMBRE", title: "Nombre" },

      /* {
         data: "STR_UTISTATUT",
         title: "Statut",
         render: (data) => {
           const statusClass =
             data === "enable" ? "badge-light-success" : "badge-light-danger";
           const statusText = data === "enable" ? "Activé" : "Désactivé";
           return `<span class="badge ${statusClass}">${statusText}</span>`;
         },
       },*/
      {
        data: null,
        title: "Action",
        render: (data, type, row) => `
          <div class="d-flex justify-content-start">
            <button class="btn btn-warning btn-sm me-2 action-edit" data-id="${row.LG_CLIID}">
              <i class="fa fa-eye"></i>
            </button>
            <!--<button class="btn btn-danger btn-sm me-2 action-delete" data-id="${row.LG_CLIID}">
              <i class="fa fa-trash"></i>
            </button>
            <button class="btn btn-primary btn-sm action-toggle-status" 
              data-id="${row.LG_CLIID}" 
              data-status="${row.STR_UTISTATUT}">
              <i class="fa ${row.STR_UTISTATUT === "enable" ? "fa-ban" : "fa-check"}"></i>
            </button>-->
          </div>
        `,
      },
    ];
  }

  getTicketsColumns() {
    return [
      {
        data: "STR_EVEPIC",
        title: "Nom",
        render: (data, type, row) => `
          <div class="d-flex align-items-center">
            <img src="${process.env.REACT_APP_BASE_IMAGE_URL + row.STR_EVEPIC}" 
              alt="" 
              style="width: 40px; height: 40px; margin-right: 10px"/>
            <div>
              <div class="fw-bold">${row.STR_EVEPIC}</div>
              <div class="text-muted">${row.STR_EVEPIC?.substring(0, 100) || ""
          }</div>
            </div>
          </div>
        `,
      },
      { data: "DT_TCIVALIDATED", title: "Date Début" },
      { data: "DT_TCIVALIDATED", title: "Date Fin" },
      {
        data: null,
        title: "Action",
        render: (data, type, row) => `
          <div class="d-flex justify-content-start">
            <button class="btn btn-warning btn-sm me-2 send-ticket" data-id="${row.LG_TICID}" data-ticketname="${row.STR_TICNAME}">
              <i class="fa fa-share"></i>
            </button>
          
          </div>
        `,
      },
    ];
  }
}

export const eventService = new ClientService();
export default eventService;