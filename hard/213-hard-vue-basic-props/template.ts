declare function VueBasicProps<P, D, C, M>(
  options: VueInstancePlus<P, D, C, M>,
): any

type VueInstancePlus<P, D, C, M> = {
  props: P
  data(this: Props<P>): D
  computed: C
  methods: M
} & ThisType<
  Props<P> &
    D & {
      [K in keyof C]: C[K] extends () => infer R ? R : any
    } & M
>

type TupleToUnionPlus<T> = T extends (infer A)[] ? A : T

type Props<P> = {
  [K in keyof P]: MyReturnTypePlus<
    TupleToUnionPlus<P[K] extends { type: infer Type } ? Type : P[K]>
  >
}

type MyReturnTypePlus<T> = T extends () => infer A
  ? A
  : T extends new (...args: any[]) => infer A
  ? A
  : any
