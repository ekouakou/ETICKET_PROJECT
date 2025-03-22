import { toast } from 'react-toastify';
import { crudData } from '../services/apiService';
import Swal from 'sweetalert2';

export const confirmAction = (title, actionType, formDataToSend, resetForm, endPoint, navigate, redirectRoot, setLoading) => {
    return Swal.fire({
        title: title,
        text: actionType === 'update' ? "Vous ne pourrez pas revenir en arrière!" : '',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Non',
        confirmButtonText: actionType === 'update' ? 'Oui, Modifier!' : 'Oui, Enregistrer!',
    }).then((result) => {
        if (result.isConfirmed) {
            setLoading(true); // Activer le loader UNIQUEMENT si l'utilisateur a confirmé
            
            return crudData(formDataToSend, endPoint)
                .then(response => {
                    const { desc_statut, code_statut } = response.data;
                    setLoading(false); // Cache le loader après la réponse
                    if (code_statut === "1") {
                        toast.success(desc_statut, {
                            position: "top-center",
                            autoClose: 3000,
                        });
                        setTimeout(() => {
                            navigate(redirectRoot);
                        }, 4000);
                        resetForm();
                    } else {
                        toast.error(desc_statut, {
                            position: "top-center",
                            autoClose: 3000,
                        });
                    }
                })
                .catch(error => {
                    setLoading(false); // Cache le loader en cas d'erreur
                    console.error('Erreur lors de la récupération des données:', error);
                    toast.error('Une erreur est survenue', {
                        position: "top-center",
                        autoClose: 3000,
                    });
                });
        }
        // Si l'utilisateur annule, on ne fait rien et le loader ne s'active pas
    });
};