const p16 = () => {
  /* 
    // 生成器
    function* gen() {
        yield Promise.resolve("小满");
        yield "大满";
        yield "超大满";
        yield "塞满了";
    }
    const man = gen();
    // 返回value done
    console.log(man.next());
    console.log(man.next());
    console.log(man.next());
    console.log(man.next());
    // done为true说明已经不可迭代了
    console.log(man.next());

    // 迭代器 iterator
    // ES6: set map
    let set: Set<number> = new Set([1, 1, 2, 2, 3, 3]); // 天然去重
    console.log(set);
    let map: Map<any, any> = new Map();
    let Arr = [1, 2, 3];
    map.set(Arr, "小满");
    console.log(map.get(Arr));
    function args() {
        //伪数组, 没有数组的方法像forEach
        console.log(arguments);
        // let list = document.querySelectorAll('div')
    }
    const each = (value: any) => {
        let It: any = value[Symbol.iterator]();
        let next: any = { done: false };
        while (!next.done) {
        next = It.next();
        if (!next.done) {
            console.log(next.value);
        }
        }
    };
    each(map);
    //5. 迭代器语法糖
    for (const value of set) {
        console.log(value);
    }
    //6. 对象身上没有Symbol.iterator, 对象不可迭代
    //7. 解构底层也是调用iterator
    let a = [4, 5, 6];
    let copy = [...a];
    console.log(a);
    //8. 让对象也支持for of以及数组的解构(手动实现)
    let obj = {
        max: 5,
        current: 0,
        [Symbol.iterator]() {
        return {
            max: this.max,
            current: this.current,
            next() {
            if (this.current == this.max) {
                return {
                value: undefined,
                done: true,
                };
            } else {
                return {
                value: this.current++,
                done: false,
                };
            }
            },
        };
        },
    };
    for (const value of obj) {
        console.log(value);
    }
    let x = [...obj];
    console.log(x); 
  */
};
export { p16 };
