export function destructureDate(date) {
  return {
    year: ("0" + date.getFullYear()).slice(-2),
    month: ("0" + (date.getMonth() + 1)).slice(-2),
    day: ("0" + date.getDate()).slice(-2),
    hour: ("0" + date.getHours()).slice(-2),
    minutes: ("0" + date.getMinutes()).slice(-2),
    seconds: ("0" + date.getSeconds()).slice(-2),
  };
}

export function isNight(date) {
  const date_dest = destructureDate(date);

  return parseInt(date_dest.hour, 10) > 20 || parseInt(date_dest.hour, 10) < 6;
}
