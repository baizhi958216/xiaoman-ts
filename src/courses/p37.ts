const p37 = () => {
  type Arr = [1, 2, 3, 4];
  // 拿到第一个元素, 解构其它元素
  type ReverseArr<T extends any[]> = T extends [infer First, ...infer other]
    ? // 第一个元素放在后面, 递归其它元素
      [...ReverseArr<other>, First]
    : T;
  // [4,3,2,1]
  type Arr1 = ReverseArr<Arr>;
};
export { p37 };
