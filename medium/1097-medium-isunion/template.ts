type IsUnion<T, U = T> = U extends U ? ([T] extends [U] ? false : true) : never
