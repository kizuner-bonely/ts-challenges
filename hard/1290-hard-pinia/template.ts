declare function defineStore<S, G, A>(
  store: StoreOptions<S, G, A>,
): S & A & Computed<G>

type StoreOptions<S, G, A> = {
  id: string
  state: () => S
  getters?: G & ThisType<Readonly<S> & Computed<G>>
  actions?: A & ThisType<S & Readonly<Computed<G>> & Copy<A>>
}
