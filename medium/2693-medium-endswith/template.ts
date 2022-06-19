type EndsWith<
  T extends string,
  U extends string,
> = T extends `${infer _Rest}${U}` ? true : false
