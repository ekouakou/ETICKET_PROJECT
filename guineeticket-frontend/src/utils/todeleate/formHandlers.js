import { toast } from 'react-toastify'; // Importation de la bibliothèque pour afficher des notifications
import Swal from 'sweetalert2'; // Importation de la bibliothèque pour afficher des boîtes de dialogue
import { crudData, doConnexion } from '../../services/apiUtils'; // Importation des fonctions pour effectuer des requêtes API
import { useNavigate } from 'react-router-dom';



// Fonction pour gérer la création d'une ressource
// Paramètres:
// formData: Les données du formulaire à envoyer.
// apiUrl: L'URL de l'API où envoyer les données.
// Description: Envoie les données du formulaire à l'API pour créer une nouvelle ressource et affiche des notifications de succès ou d'erreur.
export const handleCreate = (formData, apiUrl, resetForm, redirectUrl) => {
  // Envoi des données du formulaire à l'API
  crudData(formData, apiUrl, { headers: { 'Content-Type': 'multipart/form-data' } })
    .then(response => {
      const { desc_statut, code_statut } = response.data; // Extraction des informations de la réponse de l'API
      if (code_statut === "1") { // Vérification si l'opération a réussi
        toast.success(desc_statut); // Affichage d'une notification de succès
        resetForm()
        //navigate(redirectUrl);
        // refreshData(); // Optionnel : rafraîchir les données après la création
      } else {
        toast.error(desc_statut); // Affichage d'une notification d'erreur
      }
    })
    .catch(error => {
      console.error('Erreur lors de la création de la ressource:', error); // Affichage de l'erreur dans la console
      //toast.error('Erreur lors de la création de la ressource'); // Affichage d'une notification d'erreur
    });
};

// Fonction pour gérer la mise à jour d'une ressource
// Paramètres:
// formData: Les données du formulaire à envoyer.
// apiUrl: L'URL de l'API où envoyer les données.
// toggleModal: Fonction pour fermer la modal après la mise à jour.
// refreshData: Fonction pour rafraîchir les données après la mise à jour.
// Description: Envoie les données du formulaire à l'API pour mettre à jour une ressource existante, ferme la modal et rafraîchit les données en cas de succès, et affiche des notifications de succès ou d'erreur.
export const handleUpdate = (formData, apiUrl) => {
  // Envoi des données du formulaire à l'API
  crudData(formData, apiUrl, { headers: { 'Content-Type': 'multipart/form-data' } })
    .then(response => {
      const { desc_statut, code_statut } = response.data; // Extraction des informations de la réponse de l'API
      if (code_statut === "1") { // Vérification si l'opération a réussi
        toast.success(desc_statut); // Affichage d'une notification de succès
        //refreshData(); // Rafraîchir les données après la mise à jour
      } else {
        toast.error(desc_statut); // Affichage d'une notification d'erreur
      }
    })
    .catch(error => {
      console.error('Erreur lors de la mise à jour de la ressource:', error); // Affichage de l'erreur dans la console
      toast.error('Erreur lors de la mise à jour de la ressource'); // Affichage d'une notification d'erreur
    });
};



// Fonction pour gérer la suppression d'une ressource
// Paramètres:
// params: Les paramètres nécessaires pour la suppression.
// apiUrl: L'URL de l'API où envoyer les paramètres.
// refreshData: Fonction pour rafraîchir les données après la suppression.
// Description: Affiche une boîte de dialogue de confirmation avant de supprimer une ressource, puis envoie les paramètres de suppression à l'API et rafraîchit les données en cas de succès, et affiche des notifications de succès ou d'erreur.
export const handleDelete = (params, apiUrl, refreshData) => {
  // Affichage d'une boîte de dialogue de confirmation avant la suppression
  Swal.fire({
    title: 'Êtes-vous sûr?', // Titre de la boîte de dialogue
    text: "Vous ne pourrez pas revenir en arrière!", // Texte de la boîte de dialogue
    icon: 'warning', // Icône d'avertissement
    showCancelButton: true, // Afficher le bouton d'annulation
    confirmButtonColor: '#3085d6', // Couleur du bouton de confirmation
    cancelButtonColor: '#d33', // Couleur du bouton d'annulation
    confirmButtonText: 'Oui, supprimer!' // Texte du bouton de confirmation
  }).then((result) => {
    if (result.isConfirmed) { // Si l'utilisateur confirme la suppression
      // Envoi des paramètres de suppression à l'API
      crudData(params, apiUrl)
        .then(response => {
          toast.success('Ressource supprimée avec succès'); // Affichage d'une notification de succès
          refreshData(); // Rafraîchir les données après la suppression
        })
        .catch(error => {
          console.error('Erreur lors de la suppression de la ressource:', error); // Affichage de l'erreur dans la console
          toast.error('Erreur lors de la suppression de la ressource'); // Affichage d'une notification d'erreur
        });
    }
  });
};

// Fonction pour gérer le changement de fichier dans un formulaire
// Paramètres:
// e: L'événement déclenché par le changement de fichier.
// setItem: Fonction pour mettre à jour l'état de l'élément.
// item: L'élément actuel.
// field: Le champ à mettre à jour avec le fichier.
// setPreview: Fonction pour mettre à jour l'aperçu du fichier.
// Description: Met à jour l'état de l'élément avec le fichier sélectionné et met à jour l'aperçu du fichier.
export const handleFileChangez = (e, setItem, item, field, setPreview) => {
  const file = e.target.files[0]; // Récupération du fichier sélectionné
  setItem({ ...item, [field]: file }); // Mise à jour de l'état avec le fichier sélectionné
  setPreview(URL.createObjectURL(file)); // Mise à jour de l'aperçu du fichier
};

export const handleFileChange = (event, setFormData, formData, fieldName, setPreview) => {
  const file = event.target.files[0];
  if (file) {
    setFormData({
      ...formData,
      [fieldName]: file,
    });
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  } else {
    // Handle case where no file is selected or uploaded
    setFormData({
      ...formData,
      [fieldName]: null, // Ensure to reset or handle as needed
    });
    setPreview(''); // Reset preview if no file selected
  }
};


// Fonction pour gérer le changement de valeur des champs de formulaire
// Paramètres:
// e: L'événement déclenché par le changement de valeur d'un champ.
// setItem: Fonction pour mettre à jour l'état de l'élément.
// item: L'élément actuel.
// Description: Met à jour l'état de l'élément avec la nouvelle valeur du champ modifié.
export const handleInputChange = (e, setItem, item) => {
  const { name, value } = e.target; // Récupération du nom et de la valeur du champ modifié
  setItem(prevItem => ({
    ...prevItem,
    [name]: value // Mise à jour de l'état avec la nouvelle valeur
  }));
};

// Fonction pour gérer la connexion de l'utilisateur
// Paramètres:
// e: L'événement déclenché par la soumission du formulaire.
/* @email: L'email de l'utilisateur.
   @password: Le mot de passe de l'utilisateur.
setError: Fonction pour afficher un message d'erreur.
// navigate: Fonction pour rediriger l'utilisateur vers une autre page.*/
// Description: Envoie les paramètres de connexion à l'API, stocke les données utilisateur dans le localStorage et redirige l'utilisateur vers le tableau de bord en cas de succès, ou affiche un message d'erreur en cas d'échec.
export const handleLogin = async (e, params, setError, navigate, redirectPath) => {
  e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)
  try {
    const response = await doConnexion(params); // Envoi des paramètres de connexion à l'API
    const userData = response.data; // Extraction des données utilisateur de la réponse de l'API

    if (userData.code_statut === "1") { // Vérification si la connexion a réussi
      localStorage.setItem('userConnectedData', JSON.stringify(userData)); // Stockage des données utilisateur dans le localStorage
      
      console.log( JSON.stringify(userData));

      navigate(redirectPath); // Redirection vers le chemin spécifié
    } else {
      setError(userData.desc_statut); // Affichage du message d'erreur
    }
  } catch (error) {
    setError('Erreur de connexion. Veuillez réessayer.'); // Affichage d'un message d'erreur en cas d'exception
  }
};



export const handleToggleSwitch = (setterFunction, formData, setFormData, field, value) => {
  setterFunction(value);
  setFormData({
    ...formData,
    [field]: value ? 1 : 0,
  });
};

