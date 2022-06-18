//? 这种解法无法通过 1101
// type MinusOne<T extends number, Res extends any[] = []> = [
//   ...Res,
//   '',
// ]['length'] extends T
//   ? Res['length']
//   : MinusOne<T, [...Res, '']>

type MinusOne<T extends number, A extends any[] = []> = [
  ...A,
  any,
  any,
]['length'] extends T
  ? [...A, any]['length']
  : [...A, any]['length'] extends T
  ? A['length']
  : MinusOne<T, [...A, any, any]>
