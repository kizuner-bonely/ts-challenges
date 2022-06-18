type Diff<O extends Record<string, any>, O1 extends Record<string, any>> = {
  [K in keyof O | keyof O1 as UnionIncludes<keyof O, K> extends true
    ? UnionIncludes<keyof O1, K> extends true
      ? never
      : K
    : K]: K extends keyof O ? O[K] : K extends keyof O1 ? O1[K] : never
}

type UnionIncludes<T, U> = U extends T ? true : false
