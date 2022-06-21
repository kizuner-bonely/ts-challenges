declare function join<D extends string>(
  delimiter: D,
): <P extends string[]>(...parts: P) => GetJoinType<D, P>

type GetJoinType<D extends string, P extends string[], Res extends string = ''> =
  P extends [infer First extends string, ...infer Rest extends string[]]
    ? GetJoinType<D, Rest, `${Res}${First}${D}`>
    : RemoveLastEleByCondition<Res, D>

type RemoveLastEleByCondition<S extends string, D extends string> =
  ReverseStr<S> extends `${D}${infer Rest}`
    ? ReverseStr<Rest>
    : S
