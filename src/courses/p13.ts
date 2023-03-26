const p13 = () => {
  /* 
    let str = "小满zs";
    // 变成了any
    let str1;
    str1 = 456;
    str1 = null;
    // 类型别名
    type a1 = string | null;
    type a2 = (name: string) => void;
    type a3 = { name: string };
    type a4 = number[];
    let str2: a1 = "小满zs";
    // 不能像interface那样用extends把类型合起来, 用&
    // interface不能直接声明联合类型(a1)
    // type同名不会合并
    interface B {}
    interface A extends B {}
    type a5 = number[] & B;
    // 此处的extends是包含的意思, 左边的值会作为右边类型的子类型
    // unknow any
    // Object
    // Number String Boolean
    // number strig boolean
    // 1 'test' true
    // never
    type num = 1 extends string ? 1 : 0;
    type num1 = 1 extends never ? 1 : 0;  
  */
};
export { p13 };
