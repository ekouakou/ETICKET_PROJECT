// statusUtils.js
import { notification, Modal } from 'antd';
import axios from 'axios';
import { rootUrl } from "./urlUtils";

/**
 * Crée des fonctions pour gérer le statut des éléments
 * 
 * Cette fonction doit être appelée à l'intérieur d'un composant React
 * car elle utilise le Hook usePostData via la fonction postData passée en paramètre
 * 
 * @param {Object} params - Paramètres de la fonction
 * @param {Function} params.setItems - Fonction setState pour mettre à jour la liste d'éléments
 * @param {Array} params.items - Liste actuelle des éléments
 * @param {Object} params.user - Informations de l'utilisateur courant
 * @param {string} params.idField - Nom du champ contenant l'identifiant de l'élément (ex: 'LG_BANID')
 * @param {string} params.statusField - Nom du champ contenant le statut de l'élément (ex: 'STR_BANSTATUT')
 * @param {string} params.mode - Mode de la requête API (ex: 'updateBanniereStatut')
 * @param {string} params.entityName - Nom de l'entité pour les messages (ex: 'Bannière')
 * @param {Function} params.postData - Fonction postData retournée par le Hook usePostData
 */
export const createStatusManager = ({
  setItems,
  items,
  user,
  idField,
  statusField,
  mode,
  entityName,
  postData
}) => {
  return {
    // Fonction pour basculer entre enable/disable
    toggleStatus: async (itemId, currentStatus) => {
      try {

        alert("currentStatus---" + currentStatus);
        const newStatus = currentStatus === "enable" ? "disable" : "enable";
        alert("newStatus---" + newStatus);
        const userData = await postData({
          mode: mode,
          [statusField]: newStatus,  // This line is fixed
          STR_UTITOKEN: user.STR_UTITOKEN,
          [idField]: itemId,
        });
    
        if (userData?.code_statut === "1") {
          // Mise à jour locale des données
          const updatedItems = items.map((item) =>
            item[idField] === itemId
              ? { ...item, [statusField]: newStatus }
              : item
          );
    
          setItems(updatedItems);
    
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
    
    // Fonction pour supprimer un élément
    deleteItem: (item) => {
      return new Promise((resolve) => {
        Modal.confirm({
          title: `Êtes-vous sûr de vouloir supprimer cet ${entityName}?`,
          content: `${entityName} "${item.STR_BANNAME || item.nom || item.title || item[idField]}" sera supprimé définitivement.`,
          okText: "Supprimer",
          okType: "danger",
          cancelText: "Annuler",
          onOk: async () => {
            try {
              const userData = await postData({
                mode: mode,
                STR_BANSTATUT: "delete",
                STR_UTITOKEN: user.STR_UTITOKEN,
                [idField]: item[idField],
              });
              
              if (userData?.code_statut === "1") {
                // Mise à jour locale des données
                const updatedItems = items.filter(currentItem => currentItem[idField] !== item[idField]);
                setItems(updatedItems);
                
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