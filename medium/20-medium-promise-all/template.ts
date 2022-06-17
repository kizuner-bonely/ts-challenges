declare function PromiseAll<T extends readonly unknown[] | []>(
  values: T,
): Promise<{
  -readonly [K in keyof T]: Awaited<Promise<T[K]>>
}>
