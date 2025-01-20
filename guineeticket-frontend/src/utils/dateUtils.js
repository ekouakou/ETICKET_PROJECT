import format from 'date-fns/format';

export const formatDate = (date) => {
  return format(date, "yyyy-MM-dd");
};

export const formatTime = (date) => {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const convertTimeToFullDate = (timeString) => {
  if (!timeString) return null;
  const [hours, minutes] = timeString.split(":").map(Number);
  const currentDate = new Date();
  currentDate.setHours(hours, minutes, 0, 0);
  return currentDate;
};

export const convertToFullDate = (dateString, timeString = "00:00") => {
  if (!dateString || !timeString) return null;
  const [day, month, year] = dateString.split("/").map(Number);
  const [hours, minutes] = timeString.split(":").map(Number);
  return new Date(year, month - 1, day, hours, minutes, 0);
};


export const getYearRange = () => {
  const today = new Date();
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  const oneYearLater = new Date(today);
  oneYearLater.setFullYear(today.getFullYear() + 1);

  return {
      oneYearAgo: oneYearAgo.toISOString().split('T')[0], // Format YYYY-MM-DD
      oneYearLater: oneYearLater.toISOString().split('T')[0]
  };
};

export const getWeekRange = (weeksBefore = 0, weeksAfter = 0) => {
  const today = new Date();

  // Calcul de la date en soustrayant le nombre de semaines avant
  const pastDate = new Date(today);
  pastDate.setDate(today.getDate() - weeksBefore * 7);

  // Calcul de la date en ajoutant le nombre de semaines après
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + weeksAfter * 7);

  return {
      pastDate: pastDate.toISOString().split('T')[0], // Format YYYY-MM-DD
      futureDate: futureDate.toISOString().split('T')[0]
  };
};
