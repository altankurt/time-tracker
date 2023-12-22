export function formatTime(milliseconds) {
  const pad = (num) => num.toString().padStart(2, '0')
  const hours = pad(Math.floor(milliseconds / 3600000))
  const minutes = pad(Math.floor((milliseconds / 60000) % 60))
  const seconds = pad(Math.floor((milliseconds / 1000) % 60))

  return `${hours}:${minutes}:${seconds}`
}
