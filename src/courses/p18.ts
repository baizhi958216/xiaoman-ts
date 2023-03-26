const p18 = () => {
  /* 
    // 泛型约束 extends
    function add<T extends number>(a: T, b: T) {
        return a + b;
    }
    add(2, 3);

    //
    interface Len {
        length: number;
    }
    function fn<T extends Len>(a: T) {
        console.log(a.length);
    }
    fn("11111");
    fn([1, 2, 3, 4, 5]);

    // 对象泛型约束 keyof
    let obj = {
        name: "小满",
        sex: "女",
    };
    //keyof 会把对象的key推断成联合类型
    type Key = keyof typeof obj;
    function ob<T extends object, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }
    ob(obj, "name");

    //
    interface Data {
        name: string;
        age: number;
        sex: string;
    }
    //for in for(let key in obj)
    type Options<T extends object> = {
        // 相当于遍历了一遍Data对象
        [Key in keyof T]: T[Key];
    };
    type B = Options<Data>;

    // 使用Partial
    type Options1 = Partial<Data>;
  */
};
export { p18 };
