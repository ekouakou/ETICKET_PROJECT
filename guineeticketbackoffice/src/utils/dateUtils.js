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