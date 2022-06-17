type Last<T extends any[]> = T extends [...infer _Rest, infer Last]
  ? Last
  : never
