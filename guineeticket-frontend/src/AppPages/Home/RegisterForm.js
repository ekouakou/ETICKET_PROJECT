import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const RegisterForm = ({ userId }) => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  // Effectuer une requête GET pour récupérer les données de l'utilisateur
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        const data = await response.json();

        // Initialiser les champs du formulaire avec les données récupérées
        setValue("username", data.username);
        setValue("email", data.email);
        setValue("role", data.role);
        setPreview(data.profilePicture); // Si l'image est déjà enregistrée
      } catch (error) {
        console.error("Erreur de récupération des données :", error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId, setValue]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("role", data.role);
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await fetch(`https://api.example.com/users/${userId}`, {
        method: "PUT", // Requête PUT pour la modification
        body: formData,
      });

      if (response.ok) {
        setUploadStatus("Modification réussie !");
      } else {
        setUploadStatus("Échec de la modification. Réessayez.");
      }
    } catch (error) {
      setUploadStatus("Erreur de connexion au serveur.");
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile)); // Générer un aperçu de l'image
    }
  };

  return (
    <div className="container">
      <h2>Modifier l'utilisateur</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Champ Nom d'utilisateur */}
        <div>
          <label>Nom d'utilisateur :</label>
          <input
            type="text"
            {...register("username", { required: "Ce champ est requis", minLength: { value: 3, message: "Minimum 3 caractères" } })}
          />
          {errors.username && <p className="error">{errors.username.message}</p>}
        </div>

        {/* Champ Email */}
        <div>
          <label>Email :</label>
          <input
            type="email"
            {...register("email", {
              required: "L'email est requis",
              pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Email invalide" },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        {/* Champ Mot de passe */}
        <div>
          <label>Mot de passe :</label>
          <input
            type="password"
            {...register("password", { required: "Mot de passe requis", minLength: { value: 6, message: "Minimum 6 caractères" } })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        {/* Champ Confirmation du mot de passe */}
        <div>
          <label>Confirmer le mot de passe :</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Veuillez confirmer le mot de passe",
              validate: (value) => value === watch("password") || "Les mots de passe ne correspondent pas",
            })}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
        </div>

        {/* Liste déroulante pour le rôle */}
        <div>
          <label>Rôle :</label>
          <select
            {...register("role", { required: "Veuillez sélectionner un rôle" })}
          >
            <option value="">-- Sélectionnez un rôle --</option>
            <option value="user">Utilisateur</option>
            <option value="admin">Admin</option>
            <option value="guest">Invité</option>
          </select>
          {errors.role && <p className="error">{errors.role.message}</p>}
        </div>

        {/* Champ d'upload de fichier */}
        <div>
          <label>Photo de profil :</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {/* Affichage de l'aperçu de l'image si sélectionnée */}
          {preview && <img src={preview} alt="Aperçu" width="100" style={{ marginTop: "10px", borderRadius: "10px" }} />}
        </div>

        {/* Message de statut */}
        {uploadStatus && <p className="status">{uploadStatus}</p>}

        {/* Bouton Soumettre */}
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
};

export default RegisterForm;
