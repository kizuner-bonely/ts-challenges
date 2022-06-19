type LastIndexOf<
  T extends number[],
  U extends number,
  Ind extends any[] = T,
> = Reverse<T> extends [infer Last, ...infer Rest]
  ? Last extends U
    ? MinusOne<Ind['length']>
    : LastIndexOf<Reverse<Rest>, U, Pop<Ind>>
  : -1
