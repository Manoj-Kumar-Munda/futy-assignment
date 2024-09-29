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
