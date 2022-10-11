export default function displayTime(h, m) {
  let hours;
  let minutes;

  if (h) {
    hours = parseInt(h, 10);
  } else {
    hours = 0;
  }

  if (m) {
    minutes = parseInt(m, 10);
  } else {
    minutes = 0;
  }

  if (m && m < 10) {
    minutes = parseInt(m, 10);
    minutes = "0" + minutes;
  }

  if (m && m >= 10) {
    minutes = parseInt(m, 10);
  }

  if (hours === 0 && m) {
    minutes = parseInt(m, 10);
    return minutes + `${minutes < 2 ? " min" : " mins"}`;
  }

  if (hours === 0 && minutes === 0) {
    return "0 mins";
  }

  return hours + ":" + minutes + `${minutes < 2 ? " min" : " mins"}`;
}
