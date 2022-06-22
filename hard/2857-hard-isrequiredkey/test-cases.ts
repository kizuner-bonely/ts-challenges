import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'a'>, true>>,
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'b'>, false>>,
  Expect<Equal<IsRequiredKey<{ a: number; b?: string }, 'b' | 'a'>, false>>,
]

type TT = IsRequiredKey<{ a: number; b?: string }, 'a' | 'b'>

type Test = 'a' | 'b' extends GetRequired<{ a: number; b?: string }>
  ? true
  : false
