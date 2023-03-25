const p06 = () => {
  /*
     // 定义类型和返回值
    // 函数参数的默认值, 默认值和可选参数不能同时用
    function add(a: number = 10, b?: number): number {
      // 在tsconfig.json关闭strictNullChecks
      return a + b;
    }
    //   箭头函数定义类型和返回值
    const add1 = (a: number, b: number): number => a + b;
    console.log(add(1));
    // 通过接口
    interface User {
      name: string;
      age: number;
    }
    function add2(user: User): User {
      return user;
    }
    console.log(add2({ name: "小满", age: 24 })); 
  */
  /*
     // ts可以定义this的类型 必须在第一个参数定义this的类型
    interface Obj {
      user: number[];
      // 疑: 小满没定义this的类型导致没提示, 但是我的却有
      add: (this: Obj, num: number) => void;
    }
    let obj: Obj = {
      user: [1, 2, 3],
      add(this: Obj, num: number) {
        this.user.push(num);
      },
    };
    obj.add(4);
    console.log(obj); 
  */
  /*
     //  函数重载
    let user: number[] = [1, 2, 3];
    function findNum(add: number[]): number[]; //如果传入number数组就做添加
    function findNum(id: number): number[]; //如果传入id就是单个查询
    function findNum(): number[]; //如果什么都没传就是查询全部
    // 函数实现
    function findNum(ids?: number | number[]): number[] {
      if (typeof ids == "number") {
        return user.filter((v) => v == ids);
      } else if (Array.isArray(ids)) {
        user.push(...ids);
        return user;
      } else {
        return user;
      }
    }
    console.log(findNum([4, 5, 6])); 
  */
};

export { p06 };
