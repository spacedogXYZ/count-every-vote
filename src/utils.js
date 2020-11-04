export function parseFromString(numString) {
  if (!numString) { return 0 }
  if (typeof numString.replaceAll !== "function") { return 0}
  let VALUE = numString.replaceAll(',', '')
  let INT = parseInt(VALUE, 10)
  return INT || 0
}

export function pctFormat(num) {
  return Number(num).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}); 
}
