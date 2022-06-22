type Camelize<T extends Record<string, any>> = {
  [K in keyof T as CamelizeStr<K & string>]: T[K] extends Record<string, any>
    ? Camelize<T[K]>
    : T[K]
}

type CamelizeStr<S extends string> = S extends `${infer Left}_${infer Right}`
  ? `${Left}${Capitalize<Right>}`
  : S
