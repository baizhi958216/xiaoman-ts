const p31 = () => {
  //主类型
  interface A {
    name: string;
    age: number;
  }
  //子类型
  interface B {
    name: string;
    age: number;
    sex: string;
  }
  let a: A = {
    name: "老墨我想吃鱼了",
    age: 33,
  };
  let b: B = {
    name: "高启强",
    age: 33,
    sex: "男",
  };
  // 协变(鸭子类型)
  // 子类型要完全覆盖主类型
  a = b;

  // 逆变, 函数是逆变, 是协变颠倒过来
  let fna = (params: A) => {};
  let fnb = (params: B) => {};
  fnb = fna;

  // 双向协变(ts2.0后需开启structFunctionTypes)
  // fna = fnb
};
export { p31 };
