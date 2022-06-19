type ObjectEntries<T extends Record<keyof any, any>> = {
  [K in keyof T]-?: [K, RemoveUndefined<T[K]>]
}[keyof T]

type RemoveUndefined<T> = [T] extends [undefined] ? T : Exclude<T, undefined>
