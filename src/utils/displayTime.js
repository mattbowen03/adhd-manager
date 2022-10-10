export default function displayTime(h, m) {
  let minutes = m + " mins.";
  if (m < 10 && h > 0) {
    minutes = "0" + m + " mins.";
  }
  if (m === undefined && h === undefined) {
    return "0 mins.";
  }

  if (h === "" || h === 0) {
    return minutes;
  } else {
    return h + ":" + minutes;
  }
}
