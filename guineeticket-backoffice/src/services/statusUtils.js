import { notification, Modal } from 'antd';
import axios from 'axios';
import { rootUrl } from "./urlUtils";

/**
 * Crée des fonctions pour gérer le statut et la suppression des éléments
 *
 * @param {Object} params
 * @param {Function} params.setItems - Fonction pour actualiser les données
 * @param {Array} params.items
 * @param {Object} params.user
 * @param {string} params.idField
 * @param {string} params.statusField
 * @param {string} params.activateMode
 * @param {string} params.deleteMode
 * @param {string} params.entityName
 * @param {Function} params.postData
 */
export const createStatusManager = ({
  setItems,
  items,
  user,
  idField,
  statusField,
  activateMode,
  deleteMode,
  entityName,
  postData
}) => {
  return {
    // Changement de statut
    toggleStatus: async (itemId, currentStatus) => {
      try {
        const newStatus = currentStatus === "enable" ? "disable" : "enable";

        const userData = await postData({
          mode: activateMode,
          [statusField]: newStatus,
          STR_UTITOKEN: user.STR_UTITOKEN,
          [idField]: itemId,
        });

        if (userData?.code_statut === "1") {
          // Rafraîchir les données plutôt que modifier localement
          setItems();
          
          notification.success({
            message: "Succès",
            description: `Statut mis à jour avec succès`
          });

          return true;
        } else {
          notification.error({
            message: "Erreur",
            description: `Échec de la mise à jour du statut`
          });
          return false;
        }
      } catch (error) {
        console.error(`Erreur lors de la mise à jour du statut:`, error);
        notification.error({
          message: "Erreur",
          description: `Impossible de mettre à jour le statut`
        });
        return false;
      }
    },

    // Suppression
    deleteItem: (item) => {
      return new Promise((resolve) => {
        Modal.confirm({
          title: `Êtes-vous sûr de vouloir supprimer cet ${entityName}?`,
          content: `Sera supprimé définitivement.`,
          okText: "Supprimer",
          okType: "danger",
          cancelText: "Annuler",
          onOk: async () => {
            try {
              const userData = await postData({
                mode: deleteMode,
                STR_UTITOKEN: user.STR_UTITOKEN,
                [idField]: item[idField],
              });

              if (userData?.code_statut === "1") {
                // Rafraîchir les données plutôt que modifier localement
                setItems();
                
                notification.success({
                  message: "Succès",
                  description: `${entityName} supprimé(e) avec succès`
                });
                resolve(true);
              } else {
                notification.error({
                  message: "Erreur",
                  description: `Échec de la suppression`
                });
                resolve(false);
              }
            } catch (error) {
              console.error(`Erreur lors de la suppression:`, error);
              notification.error({
                message: "Erreur",
                description: `Impossible de supprimer ${entityName.toLowerCase()}`
              });
              resolve(false);
            }
          },
          onCancel: () => {
            resolve(false);
          }
        });
      });
    }
  };
};