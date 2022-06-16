//* Parameters
type MyParameters<T extends (...p: any[]) => any> = T extends (
  ...p: infer Params
) => any
  ? Params
  : never
type MyParametersResult = MyParameters<(name: string, age: number) => void>

//* ReturnType
type MyReturnType<T extends (...p: any[]) => any> = T extends (
  ...p: any[]
) => infer R
  ? R
  : never
type MyReturnTypeRes = MyReturnType<(name: string, age: number) => number>

//* ConstructorParameters
type MyConstructorParameters<T extends abstract new (...p: any[]) => any> =
  T extends abstract new (...p: infer P) => any ? P : never

interface Person {
  name: string
  age: number
}
interface PersonConstructor {
  new (name: string, age: number): Person
}

type MyConstructorParametersRes = MyConstructorParameters<PersonConstructor>

//* InstanceType
type MyInstanceType<T extends abstract new (...p: any[]) => any> =
  T extends abstract new (...p: any[]) => infer R ? R : never
type MyInstanceTypeRes = MyInstanceType<PersonConstructor>

//* ThisParameterType
type MyThisParameterType<T> = T extends (
  this: infer ThisType,
  ...p: any[]
) => any
  ? ThisType
  : never

function hello(this: Person) {
  console.log(this.name)
}

type MyThisParameterTypeRes = MyThisParameterType<typeof hello>

//* OmitThisParameter
type MyOmitThisParameter<T> = unknown extends MyThisParameterType<T>
  ? T
  : T extends (this: any, ...args: infer A) => infer R
  ? (...args: A) => R
  : T

function say(this: Person, age: number) {
  console.log(this.name)
  return this.name + ' ' + age
}

type MyOmitThisParameterRes = MyOmitThisParameter<typeof say>

//* Partial
type MyPartial<T extends Record<keyof any, any>> = {
  [K in keyof T]?: T[K]
}

type KizunaAI = { name: string; age: number }
type MyPartialRes = MyPartial<KizunaAI>

//* Required
type MyRequired<T extends Record<keyof any, any>> = {
  [K in keyof T]-?: T[K]
}
type PartialKizunaAI = { name?: string; age?: number }
type MyRequiredRes = MyRequired<PartialKizunaAI>

//* Readonly
type MyReadonly<T extends Record<keyof any, any>> = {
  readonly [K in keyof T]: T[K]
}
type MyReadonlyRes = MyReadonly<KizunaAI>

//* Pick
type MyPick<T extends Record<keyof any, any>, K extends keyof T> = {
  [P in K]: T[K]
}
type MyPickRes = MyPick<KizunaAI, 'name'>

//* Record
type MyRecord<K extends keyof any, V> = {
  [P in K]: V
}
type MyRecordRes = MyRecord<string, any>

//* Exclude
type MyExclude<T extends Record<keyof any, any>, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}
type MyExcludeRes = MyExclude<KizunaAI, 'age'>

//* Extract
type MyExtract<T, K> = T extends K ? T : never
type MyExtractRes = MyExtract<
  'kizunaAI' | 'love' | 'hh',
  'kizunaAI' | 'hh' | 'aa'
>

//* Omit
type MyOmit<T, K> = T extends K ? never : T
type MyOmitRes = MyOmit<'kizunaAI' | 'love' | 'hh', 'hh'>

//* Awaited
type MyAwaited<P> = P extends null | undefined
  ? P
  : P extends object & { then(onfulfilled: infer F): any }
  ? F extends (v: infer V, ...args: any[]) => any
    ? MyAwaited<V>
    : never
  : P
type MyAwaitedRes = MyAwaited<Promise<Promise<Promise<number>>>>

//* NonNullable
type MyNonNullable<T> = T extends null | undefined ? never : T
type NonNullableRes = NonNullable<'kizunaAI'>

export {}
