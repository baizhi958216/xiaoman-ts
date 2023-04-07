const p32 = () => {
  let set: Set<number> = new Set([1, 2, 3, 4, 5, 6, 7, 7, 7, 7]);
  console.log(set.has(7));
  console.log(set.delete(7));
  console.log(set);
  set.clear();
  console.log(set);

  let obj = { name: "小满" };
  let map: Map<object, any> = new Map();
  map.set(obj, "小满");

  let obj1: any = { name: "孙亚龙" }; //第一次引用
  let aahph: any = obj1; //第二次引用
  // weakmap的key只能是引用类型, 弱引用不会被计入垃圾回收机制(V8 GC需要200毫秒)
  // 也不允许遍历(不稳定)
  let weakmap: WeakMap<object, any> = new WeakMap();
  weakmap.set(obj1, "saasas"); //第二次
  obj1 = null; //-1次
  aahph = null; //-2次
  setTimeout(() => {
    console.log(weakmap); //有时候有(未回收), 有时候没有(已经回收)
    console.log(weakmap.get(obj1)); //收始终无法取出
  }, 800);

  //也是引用类型, 跟weakmap一样
  let weakset = new WeakSet([obj1]);
};
export { p32 };
