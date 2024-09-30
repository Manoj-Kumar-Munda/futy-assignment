export function formatDate(dateString) {
  const date = new Date(dateString);

  // Using Intl.DateTimeFormat for formatting the date
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);

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
