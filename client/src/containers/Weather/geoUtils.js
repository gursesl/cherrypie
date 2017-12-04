export function matchZipCode(input) {
  return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(input)
}

export default {
  matchZipCode,
}
