// eventService.js
import axios from "axios";
import { authService } from "./AuthService";
import { crudData } from "./apiUtils";

class PrivilegeService {
  constructor() {
    this.endPoint = process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL;
  }

  async getPrivilege(
    navigate,
    dateRange = { start: "2020-01-01", end: "2025-08-31" }
  ) {
    const user = authService.checkAuth(navigate);
    if (!user) return false;

    try {
      // fetchData({ mode: 'listUtilisateur', STR_UTITOKEN: user.STR_UTITOKEN, LG_PROID: user.LG_PROID}, apiUrl, setEventData);

      const response = await crudData(
        {
          mode: "listPrivilege",
          STR_UTITOKEN: user.STR_UTITOKEN,
          LG_PROID: user.LG_PROID,
        },
        this.endPoint
      );
      return response.data?.data || [];
    } catch (error) {
      console.error("Erreur lors de la récupération des événements:", error);
      return [];
    }
  }

  //   async updatePrivilegeStatus(navigate, eventId, status) {
  //     const user = authService.checkAuth(navigate);
  //     if (!user) return false;

  //     try {
  //       await crudData(
  //         {
  //           mode: "deleteUtilisateur",
  //           LG_UTIID: eventId,
  //           STR_UTISTATUT: status,
  //           STR_UTITOKEN: user.STR_UTITOKEN,
  //         },
  //         this.endPoint
  //       );
  //       return true;
  //     } catch (error) {
  //       console.error("Erreur lors de la mise à jour du statut:", error);
  //       return false;
  //     }
  //   }

  //   async deleteEvent(navigate, eventId) {
  //     return this.updatePrivilegeStatus(navigate, eventId, "delete");
  //   }

  getColumns() {
    return [
      {
        data: "checked", // Remplacez par le champ qui contient le statut
        title: "Etat",
        width: "10%",
        render: (data, type, row) => {
          //   const isChecked = data === "enable" ? "checked" : "";
          const isChecked = data === true || data === 1 ? "checked" : "";
          return `
                <input 
                  type="checkbox" 
                  class="form-check-input privilege-checkbox ms-5" 
                  data-id="${row.LG_UTIID}" 
                  ${isChecked}
                />
              `;
        },
      },
      { data: "STR_PRIDESCRIPTION", title: "Description", width: "80%" },
    ];
  }
}

export const privilegeService = new PrivilegeService();
export default privilegeService;
