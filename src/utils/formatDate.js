export function formatDate(date) {
  if (!date) {
    return ''
  }

  const d = new Date(date.toDate())

  const pad = (num) => num.toString().padStart(2, '0')

  const day = pad(d.getDate())
  const month = pad(d.getMonth() + 1)
  const year = d.getFullYear()

  return `${day}/${month}/${year}`
}
