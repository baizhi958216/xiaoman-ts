const p29 = () => {
  interface Event {
    on: (name: string, fn: Function) => void;
    emit: (name: string, ...args: Array<any>) => void;
    off: (name: string, fn: Function) => void;
    once: (name: string, fn: Function) => void;
  }
  interface List {
    [key: string]: Array<Function>;
  }
  class Dispatch implements Event {
    list: List;
    constructor() {
      this.list = {};
    }
    // 监听
    on(name: string, fn: Function) {
      const callback = this.list[name] || [];
      callback.push(fn);
      this.list[name] = callback;
    }
    // 派发
    emit(name: string, ...args: Array<any>) {
      let eventName = this.list[name];
      if (eventName) {
        eventName.forEach((fn) => {
          fn.apply(this, args);
        });
      } else {
        console.warn(`名称错误${name}`);
      }
    }
    // 卸载监听器
    off(name: string, fn: Function) {
      let eventName = this.list[name];
      if (eventName && fn) {
        let index = eventName.findIndex((fns) => fns === fn);
        eventName.splice(index, 1);
        console.log(eventName);
      } else {
        console.warn(`名称错误${name}`);
      }
    }
    // 只调用一次
    once(name: string, fn: Function) {
      let de = (...args: Array<any>) => {
        fn.apply(this, args);
        // 用完就删掉
        this.off(name, de);
      };
      this.on(name, de);
    }
  }
  const o = new Dispatch();
  // 监听
  const fn = (...args: Array<any>) => {
    // 拿到派发的参数
    console.log(args, args[0]);
  };
  o.on("post", fn);
  o.on("get", fn);
  // 派发
  o.emit("post", 1, false, () => {});
  o.emit("get", 2, true, () => {});
  // 卸载监听器
  o.off("post", fn);
  // 不会触发再触发post监听器
  o.emit("post", 3, false, () => {});
  // 只有一次
  o.once("del", () => {
    console.log("执行完del就没了");
  });
  o.emit("del");
  o.emit("del");
};
export { p29 };
