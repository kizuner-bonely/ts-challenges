type Chainable<T = {}> = {
  option<Key extends string, V>(
    key: Key,
    value: V,
  ): Chainable<T & { [K in Key]: typeof value }>
  get(): T
}
