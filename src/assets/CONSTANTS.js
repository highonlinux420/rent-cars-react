export const API_URL =
  "https://rent-cars-express.onrender.com";

export function convertMiliseconds(miliseconds) {
    var days, hours, minutes, total_hours, total_minutes, total_seconds;
    total_seconds = parseInt(Math.floor(miliseconds / 1000));
    total_minutes = parseInt(Math.floor(total_seconds / 60));
    total_hours = parseInt(Math.floor(total_minutes / 60));
    days = parseInt(Math.floor(total_hours / 24));
    minutes = parseInt(total_minutes % 60);
    hours = parseInt(total_hours % 24);
    let result = "";
    if (days > 0) {
      result += `${days} day(s), `;
    }
    if (hours > 0) {
      result += `${hours} hour(s), `;
    }
    if (minutes > 0) {
      result += `${minutes} minute(s)`;
    }
    return result;
  }

export function availability(return_date, rental_date) {
  let time;
  if (return_date != null && rental_date != null) {
    const returnDate = new Date(return_date);
    const rentalDate = new Date(rental_date);
    const currentDate = new Date();
    let diff;
    if (rentalDate < currentDate < returnDate) {
      diff = returnDate - currentDate;
      time = "in " + convertMiliseconds(diff);
    } else if (currentDate < rentalDate < returnDate) {
      diff = rentalDate - currentDate;
      time = "until " + convertMiliseconds(diff);
    }
  } else {
    time = undefined;
  }
  return time;
}