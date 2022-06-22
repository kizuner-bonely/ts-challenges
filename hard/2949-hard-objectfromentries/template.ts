type ObjectFromEntries<T extends [string, any]> = {
  [P in T as P[0]]: P[1]
}
