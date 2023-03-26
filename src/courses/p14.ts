const p14 = () => {
  // ts会推断成never
  type A = string & number;
  // 在联合类型里never会被忽略
  type B = string | never;
  function xm(): never {
    // 并不是没有返回值, 只是说明这个函数有问题
    throw new Error("小满");
  }
  type C = "唱" | "跳" | "rap" | "篮球";
  function kun(value: C) {
    switch (value) {
      case "唱":
        break;
      case "跳":
        break;
      case "rap":
        break;
      case "篮球":
        break;
      // default兜底逻辑, value是已经确定的
      default:
        const error: never = value;
        break;
    }
  }
};
export { p14 };
