const p23 = () => {
  // 对象混入
  interface Name {
    name: string;
  }
  interface Age {
    age: number;
  }
  interface Sex {
    sex: number;
  }
  let a: Name = { name: "小满" };
  let b: Age = { age: 22 };
  let c: Sex = { sex: 1 };

  let obj = Object.assign(a, b, c);

  // 类混入
  class A {
    type!: boolean;
    changeType(): void {
      this.type = !this.type;
    }
  }
  class B {
    name!: string;
    getName(): string {
      return this.name;
    }
  }
  class C implements A, B {
    type: boolean = false;
    name: string = "小满";
    getName(): string {
      return this.name;
    }
    changeType(): void {}
  }
  mixins(C, [A, B]);
  function mixins(curCls: any, itemCls: any[]) {
    itemCls.forEach((item) => {
      Object.getOwnPropertyNames(item.prototype).forEach((name) => {
        curCls.prototype[name] = item.prototype[name];
      });
    });
  }

  let ccc = new C();
  ccc.type = true;
  console.log(ccc.type);
  ccc.changeType();
  console.log(ccc.type);
};
export { p23 };
