const p03 = () => {
  /* 
    原型链顶端就是Object或者Function, 所有的原始类型以及对象类型都指向Object, 可以等于任何值
  */
  //   let a: Object = 123;
  //   let a1: Object = "123";
  //   let a2: Object = [];
  //   let a3: Object = {};
  //   let a4: Object = () => 123;
  /*  
    常用于泛型约束
    function A<T extends {a:string,b:number}>
    支持所有引用类型
  */
  //   let a: object = "123"; //错误 原始类型
  //   let a1: object = 123; //错误 原始类型
  //   let a2: object = false; //错误 原始类型
  //   let a3: object = []; //正确 引用类型
  //   let a4: object = {}; //正确 引用类型
  //   let a5: object = () => 123; //正确 引用类型
  /*  
    空对象 字面量模式, 可以赋值任何类型(像Object)
  */
  //   let a: {} = 123;
  //   let a1: {} = "123";
  //   let a2: {} = [];
  //   let a3: {} = { name: 1 };
  //   但是无法对变量进行赋值
  //   a3.age = 2;
};
export { p03 };
