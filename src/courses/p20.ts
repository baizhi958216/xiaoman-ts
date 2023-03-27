// 如果不使用import/export定义的变量会视为全局变量, 造成污染
// 避免全局变量造成的污染, 在顶层使用namespace
namespace A {
  export const D = 1;
}
// 嵌套命名空间
namespace B {
  export namespace C {
    export const D = 2;
  }
}
// 抽离命名空间
import { C } from "./p20_1";

// 简化命名空间
import AAA = B.C.D;

// 命名空间合并
namespace D {
  export const a = 4;
}
namespace D {
  export const b = 5;
}
const p20 = () => {
  console.log(A.D);

  console.log(B.C.D);

  console.log(C.A);

  console.log(AAA);

  console.log(D.a, D.b);
};
export { p20 };
