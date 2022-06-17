type Pop<T extends any[]> = T extends [...infer Rest, infer _Last]
  ? Rest
  : never
