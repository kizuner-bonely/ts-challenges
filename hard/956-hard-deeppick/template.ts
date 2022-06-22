type DeepPick<
  Obj extends Record<string, any>,
  Key extends string,
> = UnionToIntersection<
  Key extends `${infer First}.${infer Rest}`
    ? UnionToIntersection<{ [K in First]: DeepPick<Obj[K & keyof Obj], Rest> }>
    : Key extends keyof Obj
    ? { [K in Key & keyof Obj]: Obj[K] }
    : never
>
