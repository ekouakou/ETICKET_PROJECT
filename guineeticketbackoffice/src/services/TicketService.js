// eventService.js
import axios from "axios";
import { authService } from "./AuthService";
import { crudData } from "./apiService";


class TicketService {
  constructor() {
    this.endPoint = process.env.REACT_APP_TICKET_MANAGER_API_URL;
  }

  async getEvents(navigate, dateRange = { DT_BEGIN: "2020-01-01", DT_END: "2025-08-31" }) {
    const user = authService.checkAuth(navigate);
    if (!user) return false;

    try {
        // fetchData({ mode: 'listUtilisateur', STR_UTITOKEN: user.STR_UTITOKEN, LG_PROID: user.LG_PROID}, apiUrl, setEventData);

      const response = await crudData(
        { mode: 'listTicket', STR_UTITOKEN: user.STR_UTITOKEN, LG_AGEREQUESTID: 1, DT_BEGIN: "2020-01-01", DT_END: "2025-08-31"},
        this.endPoint
      );
      return response.data?.data || [];
    } catch (error) {
      console.error("Erreur lors de la récupération des événements:", error);
      return [];
    }
  }

  async updateEventStatus(navigate, eventId, status) {
    const user = authService.checkAuth(navigate);
    if (!user) return false;

    try {
      await crudData(
        {
          mode: "deleteUtilisateur",
          LG_UTIID: eventId,
          STR_UTISTATUT: status,
          STR_UTITOKEN: user.STR_UTITOKEN,
        },
        this.endPoint
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

  getColumns() {
    return [
      {
        data: "STR_TICNAME",
        title: "Nom",
        render: (data, type, row) => `
          <div class="d-flex align-items-center">
            <img src="${process.env.REACT_APP_BASE_IMAGE_URL + row.STR_TICBARECODE}" 
              alt="" 
              style="width: 40px; height: 40px; margin-right: 10px"/>
            <div>
              <div class="fw-bold">${row.STR_TICNAME}</div>
              <div class="text-muted">${
                row.STR_EVENAME?.substring(0, 100) || ""
              }</div>
            </div>
          </div>
        `,
      },
      // { data: "LG_PROID", title: "Date Début" },
      // { data: "STR_UTIMAIL", title: "Date Fin" },
      // {
      //   data: "STR_UTISTATUT",
      //   title: "Statut",
      //   render: (data) => {
      //     const statusClass =
      //       data === "enable" ? "badge-light-success" : "badge-light-danger";
      //     const statusText = data === "enable" ? "Activé" : "Désactivé";
      //     return `<span class="badge ${statusClass}">${statusText}</span>`;
      //   },
      // },
      {
        data: null,
        title: "Action",
        render: (data, type, row) => `
          <div class="d-flex justify-content-start">
            <button class="btn btn-warning btn-sm me-2 action-edit" data-id="${row.LG_TICID}">
              <i class="fa fa-edit"></i>
            </button>
            <!--<button class="btn btn-danger btn-sm me-2 action-delete" data-id="${row.LG_TICID}">
              <i class="fa fa-trash"></i>
            </button>
            <button class="btn btn-primary btn-sm action-toggle-status" 
              data-id="${row.LG_UTIID}" 
              data-status="${row.STR_UTISTATUT}">
              <i class="fa ${row.STR_UTISTATUT === "enable" ? "fa-ban" : "fa-check"}"></i>
            </button>-->
          </div>
        `,
      },
    ];
  }
}

export const eventService = new TicketService();
export default eventService;





