const p02 = () => {
  // any任意类型 unknown不知道的类型
  //   1.top type 顶级类型 any unknown
  //   2.Object
  //   3.Number String Boolean
  //   4.number string boolean
  //   5. 1 '小满' false
  //   6. never
  //   any可以随便赋值
  //   let a: any = [];
  //   a = 1;
  //   a = "123";
  //   a = false;
  //   a = Symbol(1)
  //   console.log(a);
  //   unknown比较特殊, 不可以赋值给别的类型, 只能赋值给自身或者any
  //   let a: unknown = 1;
  //   let b: number = 5;
  //   a = b;
  //   b = a;
  //   unknown没办法读任何属性，方法也不可以调用
  //   unknown更加安全, 遇到不知道是什么类型的优先使用unknown
  //   let xiaoman: unknown = { 帅: true,open:()=>123 };
  //   xiaoman.帅
};
export { p02 };
