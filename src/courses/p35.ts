const p35 = () => {
  // 添加约束, 是数组就返回类型数组的每个元素类型, 否则直接返回类型
  // 始终返回非数组, 数组的话需要T[number][]
  type TYPE<T> = T extends Array<any> ? T[number] : T;

  type A = TYPE<string[]>;

  const a: A = "1";

  type B = TYPE<(string | number)[]>;

  const b: B = "1";

  // 使用infer提取类型进行简化, U充当占位符, 读取Array的元素
  type TYPE1<T> = T extends Array<infer U> ? U : T;

  // 将元组变成联合类型, 约束非的never对类型进行限制只能传元组(非元组返回均never)
  type TYPE2<T> = T extends Array<infer U> ? U : never;
  type T = [string | number];
  type uni = TYPE2<T>;
};
export { p35 };
