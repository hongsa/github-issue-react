export function getTotalPage(headers) {
  if (headers.hasOwnProperty('link')) {
    if (headers.link.includes('rel="last"')) {
      return parseInt(headers.link.split(',')[1].match(/page=(\d+).*$/)[1], 10)
    } else {
      return false
    }
  } else {
    return false
  }
}