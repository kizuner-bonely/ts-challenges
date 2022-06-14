type IsAny<T> = 1 extends 2 & T ? true : false
type IsAnyResult = IsAny<any> // true
type IsAnyResult2 = IsAny<1> // false

type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
  ? 1
  : 2
  ? true
  : false
type IsEqualResult = IsEqual<1, any> // false

type IsUnion<A, B = A> = A extends A ? ([B] extends [A] ? false : true) : never
type IsUnionResult = IsUnion<'a' | 'b'> // true
type IsUnionResult2 = IsUnion<['a' | 'b']> // false

type IsNever<T> = [T] extends [never] ? true : false
type IsNeverResult = IsNever<never> // true
type IsNeverResult2 = IsNever<any> // false

type IsTuple<T> = T extends readonly [...params: infer Eles]
  ? IsEqual<Eles['length'], number> extends true // 此处 Eles 换成 T 亦可
    ? false
    : true
  : false
type IsTupleResult = IsTuple<[1, 2, 3]> // true
type IsTupleResult2 = IsTuple<number[]> // false

type UnionToIntersection<U> = (
  U extends U ? (x: U) => unknown : never
) extends (x: infer R) => unknown
  ? R
  : never
// { Kizuna: 1 } & {AI: 2}
type UnionToIntersectionResult = UnionToIntersection<{ Kizuna: 1 } | { AI: 2 }>

type GetOptional<O extends Record<string, any>> = {
  [K in keyof O as {} extends Pick<O, K> ? K : never]: O[K]
}
// { b?: 2 | undefined, c?: 3 | }
type GetOptionalResult = GetOptional<{ a: 1; b?: 2; c?: 3 }>

type GetRequired<O extends Record<string, any>> = {
  [K in keyof O as {} extends Pick<O, K> ? never : K]: O[K]
}
// { a: 1 }
type GetRequiredResult = GetRequired<{ a: 1; b?: 2; c?: 3 }>

type RemoveIndexSignature<O extends Record<string, any>> = {
  [K in keyof O as K extends `${infer Str}` ? Str : never]: O[K]
}
// { KizunaAI: () => void }
type RemoveIndexSignatureResult = RemoveIndexSignature<{
  KizunaAI: () => void
  [key: string]: any
}>

type ClassPublicProps<O extends Record<string, any>> = {
  [Attr in keyof O]: O[Attr]
}
class KizunaAI {
  public name: string
  protected age: number
  private hobbies: string[]

  constructor() {
    this.name = 'KizunaAI'
    this.age = 5
    this.hobbies = ['singing', 'dancing']
  }
}
// { name: string }
type ClassPublicPropsResult = ClassPublicProps<KizunaAI>

export {}
