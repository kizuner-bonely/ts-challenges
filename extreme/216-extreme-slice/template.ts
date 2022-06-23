type Slice<
  Arr extends number[],
  Start extends number = 0,
  End extends number = Arr['length'],
  Ind extends number[] = [],
  Res extends number[] = [],
> = Ind['length'] extends End
  ? Res
  : GreaterThan<Ind['length'], Start> extends true
  ? Slice<Arr, Start, End, [...Ind, 0], [...Res, Arr[Start]]>
  : Slice<Arr, Start, End, [...Ind, 0], Res>
