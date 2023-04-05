const p30 = () => {
  /* let person = { name: "小满", age: 24 };
//   let personProxy = new Proxy(person, {
//     // 取值
//     get() {},
//     // 赋值
//     set(target, key, value, receiver) {
//       return true;
//     },
//     // 拦截函数调用
//     apply() {},
//     //拦截in操作符
//     has() {
//       return true;
//     },
//     // 拦截forin
//     ownKeys(target) {
//       return true;
//     },
//     //拦截new
//     construct(){},
//     //拦截delete
//     deleteProperty(){}
//   });
  // ES6推荐使用Reflact取对象值
  // 第三个参数可以保证上下文的一致性
  console.log(Reflect.get(person, "name", person));
  Reflect.set(person, "name", "大满", person);
  console.log(Reflect.get(person, "name", person));
  // 代理
  let personProxy = new Proxy(person, {
    // 无论取什么都经过get
    get(target, key, receiver) {
      if (target.age <= 18) {
        return Reflect.get(target, key, receiver);
      } else {
        return "小满成年啦";
      }
    },
  });
  console.log(personProxy.name); */
  // 观察者模式

  const list: Set<Function> = new Set();

  const autorun = (cb: Function) => {
    if (!list.has(cb)) {
      list.add(cb);
    }
  };
  // 可观测数据
  const observable = <T extends object>(params: T) => {
    return new Proxy(params, {
      set(target, key, value, receiver) {
        const result = Reflect.set(target, key, value, receiver);
        list.forEach((fn) => fn());
        return result;
      },
    });
  };
  const perProxy = observable({ name: "小满", attr: "威猛先生" });

  autorun(() => {
    console.log("有变化啦");
  });

  perProxy.attr = "不威猛";
};
export { p30 };
