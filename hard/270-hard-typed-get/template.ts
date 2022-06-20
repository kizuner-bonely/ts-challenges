type Get<T extends Record<string, any>, K> = K extends `${infer A}.${infer B}`
  ? A extends keyof T
    ? Get<T[A], B>
    : never
  : K extends keyof T
  ? T[K]
  : never
