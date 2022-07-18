
export const addSpan = (str: string): string => {
  const strArr = str.split(' ')
  strArr.splice(1, 0, '<span>')
  strArr.push('</span>')
  return strArr.join(' ')
}
