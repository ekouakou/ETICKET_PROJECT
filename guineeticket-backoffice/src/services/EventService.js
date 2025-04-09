// eventService.js
import axios from "axios";
import { authService } from "./AuthService";
import { crudData } from "./apiUtils";
import Swal from "sweetalert2";
import { toast } from 'react-toastify';


class EventService {
  constructor() {
    this.endPoint = process.env.REACT_APP_TICKET_MANAGER_API_URL;
  }

  async getEvents(
    navigate,
    dateRange = { start: "2020-01-01", end: "2025-08-31" }
  ) {
    const user = authService.checkAuth(navigate);
    if (!user) return false;

    try {
      const response = await crudData(
        {
          mode: "listEvenement",
          STR_UTITOKEN: user.STR_UTITOKEN,
          DT_BEGIN: dateRange.start,
          DT_END: dateRange.end,
        },
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
          mode: "deleteEvenement",
          LG_EVEID: eventId,
          STR_EVESTATUT: status,
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

  async deleteEvent_(navigate, eventId) {
    const user = authService.checkAuth(navigate);
    if (!user) return false;

    try {
      await crudData(
        {
          mode: "deleteEvenement",
          LG_EVEID: eventId,
          STR_EVESTATUT: "delete",
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
    const user = authService.checkAuth(navigate);
    if (!user) return false;
    try {
      const result = await Swal.fire({
        title: "title",
        text: "Vous ne pourrez pas revenir en arrière!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Non",
        confirmButtonText: "Oui",
      });

      if (result.isConfirmed) {
        try {
          const response = await crudData(
            {
              mode: "deleteEvenement",
              LG_EVEID: eventId,
              STR_EVESTATUT: "delete",
              STR_UTITOKEN: user.STR_UTITOKEN,
            },
            this.endPoint
          );

          const { desc_statut, code_statut } = response.data;

          if (code_statut === "1") {
            toast.success(desc_statut, {
                position: "top-center",
                autoClose: 3000,
            });
            // resetForm();
          } else {
            toast.error(desc_statut, {
                position: "top-center",
                autoClose: 3000,
            });
          }
          return true;
        } catch (error) {
          console.error("Erreur lors de la récupération des données:", error);
          // toast.error('Une erreur est survenue', {
          //     position: "top-center",
          //     autoClose: 3000,
          // });
        }
      } else {
        console.log("Opération annulée");
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut:", error);
      return false;
    }
  }

  getColumns() {
    return [
      {
        data: "STR_EVENAME",
        title: "Nom",
        render: (data, type, row) => `
          <div class="d-flex align-items-center">
            <img src="${process.env.REACT_APP_BASE_IMAGE_URL + row.STR_EVEPIC}" 
              alt="" 
              style="width: 40px; height: 40px; margin-right: 10px"/>
            <div>
              <div class="fw-bold">${row.STR_EVENAME}</div>
              <div class="text-muted">${
                row.STR_EVEDESCRIPTION?.substring(0, 100) || ""
              }</div>
            </div>
          </div>
        `,
      },
      { data: "DT_EVEBEGIN", title: "Date Début" },
      { data: "DT_EVEEND", title: "Date Fin" },
      { data: "HR_EVEBEGIN", title: "Heure Début" },
      { data: "HR_EVEEND", title: "Heure Fin" },
      {
        data: "STR_EVESTATUT",
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
            <button class="btn btn-warning btn-sm me-2 action-edit" data-id="${
              row.LG_EVEID
            }">
              <i class="fa fa-edit"></i>
            </button>
            <button class="btn btn-danger btn-sm me-2 action-delete" data-id="${
              row.LG_EVEID
            }">
              <i class="fa fa-trash"></i>
            </button>
            <button class="btn btn-primary btn-sm action-toggle-status" 
              data-id="${row.LG_EVEID}" 
              data-status="${row.STR_EVESTATUT}">
              <i class="fa ${
                row.STR_EVESTATUT === "enable" ? "fa-ban" : "fa-check"
              }"></i>
            </button>
          </div>
        `,
      },
    ];
  }
}

export const eventService = new EventService();
export default eventService;
