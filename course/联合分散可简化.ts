//* 对联合字符串作驼峰处理
type CamelCaseUnion<item extends string> =
  item extends `${infer Left}_${infer Right}${infer Rest}`
    ? `${Left}${Uppercase<Right>}${CamelCaseUnion<Rest>}`
    : item

type CameCaseUnionResult = CamelCaseUnion<'aa_aa_aa' | 'bb_bb_bb'> // 'aaAaAa' | 'bbBbBb'

type IsUnion<A, B = A> = A extends A ? ([B] extends [A] ? false : true) : never

type IsUnionResult1 = IsUnion<'a' | 'b'> // true
type IsUnionResult2 = IsUnion<['a' | 'b']> // false

//* BEM
type BEM<
  Block extends string,
  Element extends string[],
  Modifiers extends string[],
> = `${Block}-${Element[number]}-${Modifiers[number]}`

// "KizunaAI-Love-Warning" | "KizunaAI-Love-Success" | "KizunaAI-HH-Warning" | "KizunaAI-HH-Success"
type BEMResult = BEM<'KizunaAI', ['Love', 'HH'], ['Warning', 'Success']>

//* 全组合
type Combination<A extends string, B extends string> =
  | A
  | B
  | `${A}${B}`
  | `${B}${A}`

type AllCombinations<A extends string, B extends string = A> = A extends A
  ? Combination<A, Exclude<B, A>>
  : never

// "a" | "b" | "c" | "ab" | "ac" | "ba" | "ca" | "bc" | "cb"
type AllCombinationsResult = AllCombinations<'a' | 'b' | 'c'>

export {}
