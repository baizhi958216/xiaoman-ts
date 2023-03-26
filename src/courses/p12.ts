const p12 = () => {
  /* 
    const fn = (type: string) => {
        if (type === "red") {
        return 0;
        }
        if (type === "green") {
        return 1;
        }
        if (type === "blue") {
        return 2;
        }
    };
    let fn1 = {
        red: 0,
        green: 1,
        blue: 2,
    };
    // enum枚举, 默认从0开始
    enum Color {
        red,
        green,
        blue,
    }
    console.log(Color.red);
    console.log(Color.green);
    console.log(Color.blue);
    // 增长枚举
    enum Color1 {
        red = 3,
        green,
        blue,
    }
    console.log(Color1.red);
    console.log(Color1.green);
    console.log(Color1.blue);
    // 字符串枚举
    enum Color2 {
        red = "red",
        green = "green",
        yellow = "yellow",
    }
    // 异构枚举
    enum Color3 {
        aa,
        no = "no",
        yes = 1,
    }
    // 接口枚举
    interface A {
        red: Color3.yes;
    }
    let obj: A = {
        red: Color3.yes,
    };
    // const枚举
    // const枚举会编译成常量, 而非对象形式的[值-键,键-值]之间的映射关系
    // 如果枚举值是字符串且较长，使用的地方多，那么生成的代码会很多
    const enum Types {
        success,
        fail,
    }
    let code: number = 0;
    if (code === Types.success) {
    }
    // 反向映射, 从值读到键(字符串不支持)
    // Types[Types['success']=0]='success'(仅数字会进行反向绑定)
    enum Types1 {
        success = 456,
    }
    let success1: number = Types1.success;
    let key = Types1[success1];
    console.log(key);
  */
};
export { p12 };
