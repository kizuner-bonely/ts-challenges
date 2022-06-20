declare function SimpleVue<D, M, C>(options: VueInstance<D, M, C>): any

type VueInstance<D, M, C> = {
  data(this: {}): D
  computed: C & ThisType<D & C>
  methods: M & ThisType<D & Computed<C> & M>
}

type Computed<T> = {
  [K in keyof T]: Return<T[K]>
}

type Return<T> = T extends (...args: any[]) => any ? ReturnType<T> : never
