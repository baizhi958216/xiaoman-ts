const p15 = () => {
  /* 
    let a1: symbol = Symbol(1);
    let a2: symbol = Symbol(1);
    // 会返回false, Symbol内存地址是唯一的
    console.log(a1 == a2);
    // 让Symbol返回true, for会全局寻找是否注册过key, 直接拿来用
    //
    // Returns a Symbol object from the global symbol registry matching the given key if found.
    // Otherwise, returns a new symbol with this key.
    // @param key key to search for.
    //
    //   for(key: string): symbol;
    console.log(Symbol.for("xiaoman") === Symbol.for("xiaoman"));
    // 用Symbol解决对象键名唯一
    let obj = {
        name: 1,
        // 对象键名唯一
        // name: 90
        [a1]: 111,
        [a2]: 222,
    };
    console.log(obj);
    // for in 不能读到symbol
    for (const key in obj) {
        console.log(key);
    }
    // keys不能读到symbol
    console.log(Object.keys(obj));
    // getOwnPropertyNames不能读到symbol
    console.log(Object.getOwnPropertyNames(obj));
    // 可以用getOwnPropertySymbols, 但是非Symbols的就丢了
    console.log(Object.getOwnPropertySymbols(obj));
    // ES6新增反射Reflect
    console.log(Reflect.ownKeys(obj)); 
  */
};
export { p15 };
