function time() {
  let date = new Date()
  let hours = zero(date.getHours())
  let minutes = zero(date.getMinutes())
  let seconds = zero(date.getSeconds())
  let clock = `${hours}:${minutes}:${seconds}`
  console.log(clock);
  document.getElementById('clock').innerHTML = clock
  setTimeout(time, 1000)
}
function zero(val) { return val < 10 ? `0${val}` : val }