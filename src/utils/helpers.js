export function formatDate(dateString) {
  const date = new Date(dateString);

  // Using Intl.DateTimeFormat for formatting the date
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return formattedDate;
}

export function formateTime(date) {
  let hour = new Date(date).getHours();
  if (hour < 10) {
    hour += "0";
  }
  let minutes = new Date(date).getMinutes();
  if (minutes < 10) {
    minutes += "0";
  }
  return hour + ":" + minutes;
}
