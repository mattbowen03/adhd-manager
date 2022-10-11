export default function displayTime(h, m) {
  let hours;
  let minutes;

  if (h) {
    hours = parseInt(h, 10);
  } else {
    hours = 0;
  }

  if (m && m < 10) {
    minutes = parseInt(m, 10);
    minutes = "0" + minutes;
  }

  if (m && m >= 10) {
    minutes = parseInt(m, 10);
  }

  if (hours === 0) {
    minutes = parseInt(m, 10);
    return minutes + `${minutes < 2 ? " min" : " mins"}`;
  }

  return hours + ":" + minutes;
}
