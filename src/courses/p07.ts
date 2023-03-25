const p07 = () => {
  /*
     // 联合类型
    let fn = function (type: number | boolean): boolean {
        return !!type;
    };
    let result = fn(1);
    console.log(result);
    result = fn(true);
    console.log(result); 
  */
  /*
     //  交叉类型
    interface People {
        name: string;
        age: number;
    }
    interface Man {
        sex: number;
    }
    const xiaoman = (man: People & Man): void => {
        console.log(man);
    };
    xiaoman({
        name: "小满今天坏掉了",
        age: 108,
        sex: 1,
    }); 
  */
  /* 
    //  类型断言
    let fn = function (num: number | string): void {
        console.log((num as string).length);
    };
    fn("12345");
    // 类型断言只能确保编译时正确, 但是可能会导致运行时错误
    fn(12345);
    interface A {
        run: string;
    }
    interface B {
        build: string;
    }
    let fn1 = (type: A | B): void => {
        console.log((<A>type).run);
    };
    fn1({
        build: "123",
    });
    //   (window as any).abc = 123;
    const fn2 = (type: boolean): boolean => {
        return type as boolean;
    };
    //   并没有返回boolean
    console.log(fn2(1 as unknown as boolean)); 
  */
};
export { p07 };
