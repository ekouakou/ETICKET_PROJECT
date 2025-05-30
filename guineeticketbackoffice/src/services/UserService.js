// eventService.js
import axios from "axios";
import { authService } from "./AuthService";
import { crudData } from "./apiService";


class UserService {
  constructor() {
    this.endPoint = process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL;
  }

  async getEvents(navigate, dateRange = { start: "2020-01-01", end: "2025-08-31" }) {
    const user = authService.checkAuth(navigate);
    if (!user) return false;

    try {
        // fetchData({ mode: 'listUtilisateur', STR_UTITOKEN: user.STR_UTITOKEN, LG_PROID: user.LG_PROID}, apiUrl, setEventData);

      const response = await crudData(
        { mode: 'listUtilisateur', STR_UTITOKEN: user.STR_UTITOKEN, LG_PROID: user.LG_PROID},
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
        data: "STR_UTIFIRSTLASTNAME",
        title: "Nom",
        render: (data, type, row) => `
          <div class="d-flex align-items-center">
            <img src="${process.env.REACT_APP_BASE_IMAGE_URL + row.STR_UTIPIC}" 
              alt="" 
              style="width: 40px; height: 40px; margin-right: 10px"/>
            <div>
              <div class="fw-bold">${row.STR_UTIFIRSTLASTNAME}</div>
              <div class="text-muted">${
                row.STR_UTIFIRSTLASTNAME?.substring(0, 100) || ""
              }</div>
            </div>
          </div>
        `,
      },
      { data: "LG_PROID", title: "Date Début" },
      { data: "STR_UTIMAIL", title: "Date Fin" },
      {
        data: "STR_UTISTATUT",
        title: "Statut",
        render: (data) => {
          const statusClass =
            data === "enable" ? "badge-light-success" : "badge-light-danger";
          const statusText = data === "enable" ? "Activé" : "Désactivé";
          return `<span class="badge ${statusClass}">${statusText}</span>`;
        },
      },
      {
        data: null,
        title: "Action",
        render: (data, type, row) => `
          <div class="d-flex justify-content-start">
            <button class="btn btn-warning btn-sm me-2 action-edit" data-id="${row.LG_UTIID}">
              <i class="fa fa-edit"></i>
            </button>
            <button class="btn btn-danger btn-sm me-2 action-delete" data-id="${row.LG_UTIID}">
              <i class="fa fa-trash"></i>
            </button>
            <button class="btn btn-primary btn-sm action-toggle-status" 
              data-id="${row.LG_UTIID}" 
              data-status="${row.STR_UTISTATUT}">
              <i class="fa ${row.STR_UTISTATUT === "enable" ? "fa-ban" : "fa-check"}"></i>
            </button>
          </div>
        `,
      },
    ];
  }
}

export const eventService = new UserService();
export default eventService;





