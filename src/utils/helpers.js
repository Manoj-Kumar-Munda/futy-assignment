import data from "../../data/data.json";

export function formatDate(dateString) {
  const date = new Date(dateString);
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

export function findMatchesByTeam(teamName) {
  const matchesForTeam = [];
  data?.matches?.forEach((matchDay) => {
    matchDay?.games?.forEach((game) => {
      if (
        game.team1.toLowerCase().includes(teamName?.toLowerCase()) ||
        game.team2.toLowerCase().includes(teamName?.toLowerCase())
      ) {
        matchesForTeam.push({
          date: matchDay.date,
          team1: game.team1,
          team2: game.team2,
          time: game.time,
        });
      }
    });
  });

  return matchesForTeam;
}
