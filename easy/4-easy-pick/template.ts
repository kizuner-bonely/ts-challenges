type MyPick<T extends Record<keyof any, any>, K extends keyof T> = {
  [P in keyof T as P extends K ? P : never]: T[P]
}
