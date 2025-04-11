import format from 'date-fns/format';

// export const formatDate = (date) => {
//   return format(date, "yyyy-MM-dd");
// };

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

// Fonction pour formater une date en YYYY-MM-DD
export const reformatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
};


/**
 * Formate une date en chaîne de caractères au format YYYY-MM-DD
 * @param {Date} date - La date à formater
 * @returns {string} - La date formatée
 */
// export const formatDate = (date) => {
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const day = String(date.getDate()).padStart(2, '0');
//   return `${year}-${month}-${day}`;
// };

export const formatDate = (date) => {
  // Vérifier si date est un objet Date valide
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    // Si c'est une chaîne de caractères, essayer de la convertir
    if (typeof date === 'string') {
      date = new Date(date);
      
      // Vérifier si la conversion a fonctionné
      if (isNaN(date.getTime())) {
        console.error("Date invalide fournie:", date);
        return ""; // ou une valeur par défaut
      }
    } else {
      console.error("Argument invalide fourni à formatDate:", date);
      return ""; // ou une valeur par défaut
    }
  }
  
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Ajoute un nombre spécifié de semaines à une date
 * @param {Date} date - La date de référence
 * @param {number} weeks - Le nombre de semaines à ajouter
 * @returns {Date} - La nouvelle date
 */
export const addWeeks = (date, weeks) => {
  const result = new Date(date);
  result.setDate(result.getDate() + weeks * 7);
  return result;
};

/**
 * Soustrait un nombre spécifié de semaines d'une date
 * @param {Date} date - La date de référence
 * @param {number} weeks - Le nombre de semaines à soustraire
 * @returns {Date} - La nouvelle date
 */
export const subWeeks = (date, weeks) => {
  const result = new Date(date);
  result.setDate(result.getDate() - weeks * 7);
  return result;
};

/**
 * Ajoute un nombre spécifié de mois à une date
 * @param {Date} date - La date de référence
 * @param {number} months - Le nombre de mois à ajouter
 * @returns {Date} - La nouvelle date
 */
export const addMonths = (date, months) => {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
};

/**
 * Soustrait un nombre spécifié de mois d'une date
 * @param {Date} date - La date de référence
 * @param {number} months - Le nombre de mois à soustraire
 * @returns {Date} - La nouvelle date
 */
export const subMonths = (date, months) => {
  const result = new Date(date);
  result.setMonth(result.getMonth() - months);
  return result;
};

/**
 * Obtient la date du jour actuel
 * @param {boolean} formatResult - Si true, renvoie la date formatée en YYYY-MM-DD
 * @returns {Date|string} - La date actuelle ou sa représentation formatée
 */
export const getCurrentDate = (formatResult = false) => {
  const today = new Date();
  return formatResult ? formatDate(today) : today;
};

/**
 * Calcule une date future en ajoutant un nombre spécifié de semaines à une date donnée
 * @param {Date} date - La date de référence (par défaut: date actuelle)
 * @param {number} weeks - Le nombre de semaines à ajouter
 * @param {boolean} formatResult - Si true, renvoie la date formatée en YYYY-MM-DD
 * @returns {Date|string} - La date future ou sa représentation formatée
 */
export const getDateInFutureWeeks = (date = new Date(), weeks = 1, formatResult = false) => {
  const futureDate = addWeeks(date, weeks);
  return formatResult ? formatDate(futureDate) : futureDate;
};

/**
 * Calcule une date passée en soustrayant un nombre spécifié de semaines d'une date donnée
 * @param {Date} date - La date de référence (par défaut: date actuelle)
 * @param {number} weeks - Le nombre de semaines à soustraire
 * @param {boolean} formatResult - Si true, renvoie la date formatée en YYYY-MM-DD
 * @returns {Date|string} - La date passée ou sa représentation formatée
 */
export const getDateInPastWeeks = (date = new Date(), weeks = 1, formatResult = false) => {
  const pastDate = subWeeks(date, weeks);
  return formatResult ? formatDate(pastDate) : pastDate;
};

/**
 * Calcule une date future en ajoutant un nombre spécifié de mois à une date donnée
 * @param {Date} date - La date de référence (par défaut: date actuelle)
 * @param {number} months - Le nombre de mois à ajouter
 * @param {boolean} formatResult - Si true, renvoie la date formatée en YYYY-MM-DD
 * @returns {Date|string} - La date future ou sa représentation formatée
 */
export const getDateInFutureMonths = (date = new Date(), months = 1, formatResult = false) => {
  const futureDate = addMonths(date, months);
  return formatResult ? formatDate(futureDate) : futureDate;
};

/**
 * Calcule une date passée en soustrayant un nombre spécifié de mois d'une date donnée
 * @param {Date} date - La date de référence (par défaut: date actuelle)
 * @param {number} months - Le nombre de mois à soustraire
 * @param {boolean} formatResult - Si true, renvoie la date formatée en YYYY-MM-DD
 * @returns {Date|string} - La date passée ou sa représentation formatée
 */
export const getDateInPastMonths = (date = new Date(), months = 1, formatResult = false) => {
  const pastDate = subMonths(date, months);
  return formatResult ? formatDate(pastDate) : pastDate;
};
























// import format from 'date-fns/format';

// // export const formatDate = (date) => {
// //   return format(date, "yyyy-MM-dd");
// // };

// export const formatTime = (date) => {
//   const hours = date.getHours().toString().padStart(2, "0");
//   const minutes = date.getMinutes().toString().padStart(2, "0");
//   return `${hours}:${minutes}`;
// };

// export const convertTimeToFullDate = (timeString) => {
//   if (!timeString) return null;
//   const [hours, minutes] = timeString.split(":").map(Number);
//   const currentDate = new Date();
//   currentDate.setHours(hours, minutes, 0, 0);
//   return currentDate;
// };

// export const convertToFullDate = (dateString, timeString = "00:00") => {
//   if (!dateString || !timeString) return null;
//   const [day, month, year] = dateString.split("/").map(Number);
//   const [hours, minutes] = timeString.split(":").map(Number);
//   return new Date(year, month - 1, day, hours, minutes, 0);
// };

// // Fonction pour formater une date en YYYY-MM-DD
// export const reformatDate = (date) => {
//   if (!date) return "";
//   const d = new Date(date);
//   let month = '' + (d.getMonth() + 1);
//   let day = '' + d.getDate();
//   const year = d.getFullYear();

//   if (month.length < 2)
//     month = '0' + month;
//   if (day.length < 2)
//     day = '0' + day;

//   return [year, month, day].join('-');
// };


// /**
//  * Formate une date en chaîne de caractères au format YYYY-MM-DD
//  * @param {Date} date - La date à formater
//  * @returns {string} - La date formatée
//  */
// // export const formatDate = (date) => {
// //   const year = date.getFullYear();
// //   const month = String(date.getMonth() + 1).padStart(2, '0');
// //   const day = String(date.getDate()).padStart(2, '0');
// //   return `${year}-${month}-${day}`;
// // };

// export const formatDate = (date) => {
//   // Vérifier si date est un objet Date valide
//   if (!(date instanceof Date) || isNaN(date.getTime())) {
//     // Si c'est une chaîne de caractères, essayer de la convertir
//     if (typeof date === 'string') {
//       date = new Date(date);
      
//       // Vérifier si la conversion a fonctionné
//       if (isNaN(date.getTime())) {
//         console.error("Date invalide fournie:", date);
//         return ""; // ou une valeur par défaut
//       }
//     } else {
//       console.error("Argument invalide fourni à formatDate:", date);
//       return ""; // ou une valeur par défaut
//     }
//   }
  
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const day = String(date.getDate()).padStart(2, '0');
//   return `${year}-${month}-${day}`;
// };

// /**
//  * Ajoute un nombre spécifié de semaines à une date
//  * @param {Date} date - La date de référence
//  * @param {number} weeks - Le nombre de semaines à ajouter
//  * @returns {Date} - La nouvelle date
//  */
// export const addWeeks = (date, weeks) => {
//   const result = new Date(date);
//   result.setDate(result.getDate() + weeks * 7);
//   return result;
// };

// /**
//  * Soustrait un nombre spécifié de semaines d'une date
//  * @param {Date} date - La date de référence
//  * @param {number} weeks - Le nombre de semaines à soustraire
//  * @returns {Date} - La nouvelle date
//  */
// export const subWeeks = (date, weeks) => {
//   const result = new Date(date);
//   result.setDate(result.getDate() - weeks * 7);
//   return result;
// };

// /**
//  * Ajoute un nombre spécifié de mois à une date
//  * @param {Date} date - La date de référence
//  * @param {number} months - Le nombre de mois à ajouter
//  * @returns {Date} - La nouvelle date
//  */
// export const addMonths = (date, months) => {
//   const result = new Date(date);
//   result.setMonth(result.getMonth() + months);
//   return result;
// };

// /**
//  * Soustrait un nombre spécifié de mois d'une date
//  * @param {Date} date - La date de référence
//  * @param {number} months - Le nombre de mois à soustraire
//  * @returns {Date} - La nouvelle date
//  */
// export const subMonths = (date, months) => {
//   const result = new Date(date);
//   result.setMonth(result.getMonth() - months);
//   return result;
// };

// /**
//  * Obtient la date du jour actuel
//  * @param {boolean} formatResult - Si true, renvoie la date formatée en YYYY-MM-DD
//  * @returns {Date|string} - La date actuelle ou sa représentation formatée
//  */
// export const getCurrentDate = (formatResult = false) => {
//   const today = new Date();
//   return formatResult ? formatDate(today) : today;
// };

// /**
//  * Calcule une date future en ajoutant un nombre spécifié de semaines à une date donnée
//  * @param {Date} date - La date de référence (par défaut: date actuelle)
//  * @param {number} weeks - Le nombre de semaines à ajouter
//  * @param {boolean} returnDateObject - Si true, renvoie l'objet Date au lieu du format YYYY-MM-DD
//  * @returns {string|Date} - La date future formatée en YYYY-MM-DD par défaut ou objet Date
//  */
// export const getDateInFutureWeeks = (date = new Date(), weeks = 1, returnDateObject = false) => {
//   const futureDate = addWeeks(date, weeks);
//   return returnDateObject ? futureDate : formatDate(futureDate);
// };

// /**
//  * Calcule une date passée en soustrayant un nombre spécifié de semaines d'une date donnée
//  * @param {Date} date - La date de référence (par défaut: date actuelle)
//  * @param {number} weeks - Le nombre de semaines à soustraire
//  * @param {boolean} returnDateObject - Si true, renvoie l'objet Date au lieu du format YYYY-MM-DD
//  * @returns {string|Date} - La date passée formatée en YYYY-MM-DD par défaut ou objet Date
//  */
// export const getDateInPastWeeks = (date = new Date(), weeks = 1, returnDateObject = false) => {
//   const pastDate = subWeeks(date, weeks);
//   return returnDateObject ? pastDate : formatDate(pastDate);
// };

// /**
//  * Calcule une date future en ajoutant un nombre spécifié de mois à une date donnée
//  * @param {Date} date - La date de référence (par défaut: date actuelle)
//  * @param {number} months - Le nombre de mois à ajouter
//  * @param {boolean} returnDateObject - Si true, renvoie l'objet Date au lieu du format YYYY-MM-DD
//  * @returns {string|Date} - La date future formatée en YYYY-MM-DD par défaut ou objet Date
//  */
// export const getDateInFutureMonths = (date = new Date(), months = 1, returnDateObject = false) => {
//   const futureDate = addMonths(date, months);
//   return returnDateObject ? futureDate : formatDate(futureDate);
// };

// /**
//  * Calcule une date passée en soustrayant un nombre spécifié de mois d'une date donnée
//  * @param {Date} date - La date de référence (par défaut: date actuelle)
//  * @param {number} months - Le nombre de mois à soustraire
//  * @param {boolean} returnDateObject - Si true, renvoie l'objet Date au lieu du format YYYY-MM-DD
//  * @returns {string|Date} - La date passée formatée en YYYY-MM-DD par défaut ou objet Date
//  */
// export const getDateInPastMonths = (date = new Date(), months = 1, returnDateObject = false) => {
//   const pastDate = subMonths(date, months);
//   return returnDateObject ? pastDate : formatDate(pastDate);
// };