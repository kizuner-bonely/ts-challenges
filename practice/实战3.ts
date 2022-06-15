//* 烤肉串转驼峰
type KebabCaseToCamelCase<S extends string> =
  S extends `${infer Left}-${infer Right}${infer Rest}`
    ? `${Left}${Uppercase<Right>}${KebabCaseToCamelCase<Rest>}`
    : S
type KebabCaseToCamelCaseRes = KebabCaseToCamelCase<'KizunaAI-and-Love'> // KizunaAIAndLove

//* 驼峰转烤肉串
type CamelCaseToKebabCase<S extends string> =
  S extends `${infer First}${infer Rest}`
    ? First extends Lowercase<First>
      ? `${First}${CamelCaseToKebabCase<Rest>}`
      : `-${First}${CamelCaseToKebabCase<Rest>}`
    : S
type CamelCaseToKebabCaseRes = CamelCaseToKebabCase<'kizunaAi'> // kizuna-Ai

//* 数组分块
type Chunk<Arr extends unknown[], Res extends unknown[] = []> = Arr extends [
  infer First,
  infer Second,
  ...infer Rest,
]
  ? Chunk<Rest, [...Res, [First, Second]]>
  : Arr extends [infer First]
  ? [...Res, [First]]
  : Res
type ChunkRes = Chunk<[1, 2, 3, 4, 5]> // [[1, 2], [3, 4], [5]]

//* 数组转对象
type TupleToNestedObject<Arr extends unknown[], Value> = Arr extends [
  infer First,
  ...infer Rest,
]
  ? {
      [Key in First as Key extends keyof any
        ? Key
        : never]: TupleToNestedObject<Rest, Value>
    }
  : Value
type TupleToNestedObjectRes = TupleToNestedObject<
  ['Kizuna', 'AI', 'Love'],
  'love'
>
type TupleToNestedObjectRes2 = TupleToNestedObject<
  ['Kizuna', 'AI', number],
  'love'
>
type TupleToNestedObjectRes3 = TupleToNestedObject<
  ['Kizuna', 'AI', undefined, number],
  'love'
>

//* 将对象的特定属性转为可选
type PartialObjectPropByKeys<
  Obj extends Record<keyof any, any>,
  Keys extends keyof any,
> = Partial<Pick<Obj, Extract<keyof Obj, Keys>>> & Omit<Obj, Keys>

type Copy<O extends Record<keyof any, any>> = {
  [K in keyof O]: O[K]
}

const obj = {
  kizunaAI: 'kizunaAI',
  love: 'love',
  hh: 'hh',
}

type PartialObjectPropByKeysRes = Copy<
  PartialObjectPropByKeys<typeof obj, 'hh'>
>

export {}
