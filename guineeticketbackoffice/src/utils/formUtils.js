export const createCategoryChangeHandler = (setCategories) => {
  return (value, index, field) => {
    setCategories((prev) =>
      prev.map((cat, i) => (i === index ? { ...cat, [field]: value } : cat))
    );
  };
};

export const handleFormChange = (e, formData, setFormData) => {
  setFormData({
      ...formData,
      [e.target.name]: e.target.value,
  });
};


export const handleSelectChange = (setFormData, formData) => (value, name) => {
  setFormData({
    ...formData,
    [name]: value || "", // Met à jour la clé correspondante
  });
};

export const convertTimeToFullDate = (timeString) => {
  const [hours, minutes] = timeString.split(":").map(Number);
  const currentDate = new Date(); // Utilisez la date actuelle ou une autre date spécifique
  currentDate.setHours(hours, minutes, 0, 0); // Réglez les heures et les minutes

  return currentDate;
};


export const formatDate = (date) => date ? new Date(date).toISOString().split("T")[0] : "";
