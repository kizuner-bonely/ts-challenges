type Enum<T extends readonly string[], N extends boolean = false> = {
  readonly [K in T[number] as Capitalize<K>]: N extends true ? GetIndex<T, K> : K
}

type GetIndex<T extends readonly string[], K extends T[number], U extends unknown[] = []> =
  T extends readonly [infer First, ...infer Rest extends string[]]
    ? K extends First
      ? U['length']
      : GetIndex<Rest, K, [...U, unknown]>
    : U['length']
