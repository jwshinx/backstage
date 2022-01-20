import _ from 'lodash'

import { SortPropertyType } from '../types/item'

// TODO figure out any
// var replaceComma = function(str: string | number | symbol | null | undefined) {
const replaceComma = function (str: any): boolean {
  if (_.isNumber(str)) {
    return true
  }
  return str.replace(/[,]/g, '')
}

const isDigits = function (str: any): boolean {
  return /^\-?[0-9]+(e[0-9]+)?(\.[0-9]+)?$/.test(str)
}

export default function genericSort<T>(
  a: T,
  b: T,
  p: SortPropertyType<T>
): number {
  const { property, isDescending } = p

  const aNoComma = replaceComma(a[property])
  const bNoComma = replaceComma(b[property])

  const result = () => {
    if (
      isDigits(aNoComma) &&
      _.toNumber(aNoComma) &&
      isDigits(bNoComma) &&
      _.toNumber(bNoComma)
    ) {
      if (_.toNumber(aNoComma) > _.toNumber(bNoComma)) {
        return 1
      }
      if (_.toNumber(aNoComma) < _.toNumber(bNoComma)) {
        return -1
      }
      return 0
    } else {
      if (a[property] > b[property]) {
        return 1
      }
      if (a[property] < b[property]) {
        return -1
      }
      return 0
    }
  }

  return isDescending ? result() * -1 : result()
}
