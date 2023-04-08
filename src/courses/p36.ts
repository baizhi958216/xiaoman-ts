const p36 = () => {
  type Arr = ["a", "b", "c"];
  // 取第一个元素, 也可以直接解构[infer one,...any[]], 不care除第一个元素以外的元素
  type First<T extends any[]> = T extends [infer one, infer two, infer three]
    ? one
    : [];
  type a = First<Arr>;
  // 取最后一个元素
  type Last<T extends any[]> = T extends [...any[], infer last] ? last : [];
  type b = Last<Arr>;
  // 元素剔除(pop, push)
  type Pop<T extends any[]> = T extends [...infer Rest, unknown] ? Rest : [];
  type Shift<T extends any[]> = T extends [unknown, ...infer Rest] ? Rest : [];
  type c = Pop<Arr>;
  type d = Shift<Arr>;
  // 删掉某个下标元素
  type Delete<T extends any[], U extends number> = T[U];
  type e = Delete<Arr, 1>;
};
export { p36 };
