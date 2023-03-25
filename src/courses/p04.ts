const p04 = () => {
  /* 
    // 定义类型
    // 规范: 第一个字母大写
    interface Axxsxs {
      name: string;
      // 可选值
      age?: number;
    }
    //   重名interface会重合
    interface Axxsxs {
      Ikun: string;
    }
    //   任意key(ts不会再校验定义的对象属性是否存在)
    interface Axxsxs {
      // 索引签名
      [propName: string]: any;
    }
    //   readonly(不允许修改)
    interface Axxsxs {
      readonly cb: () => boolean;
    }
    let a: Axxsxs = {
      name: "小满",
      age: 88,
      Ikun: "Ikun",
      a: 1,
      b: 2,
      cb: () => false,
    };
    //   a.cb = () => true;//readonly 
  */
  /* 
    //   接口继承 extends
    interface A extends B {
      yyy: string;
    }
    interface B {
      xxx: string;
    }
    let b: A = {
      xxx: "xxx",
      yyy: "yyy",
    }; 
  */
  /* 
    //  定义函数类型
    interface Fn {
      // (参数?):返回类型
      (name: string): number[];
    }
    //   对参数也进行约束
    const fn: Fn = function (name: string) {
      return [1];
    }; 
  */
};
export { p04 };
