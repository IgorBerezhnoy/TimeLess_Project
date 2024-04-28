export function pluralize(num: number) {
  if (num === 1) {
    return num + ' user'
  } else {
    return num + ' users'
  }
}
