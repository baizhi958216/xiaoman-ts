import axios from "axios";
import "reflect-metadata";
const p24 = () => {
  /**
   *
   * @param target 类的构造函数
   */
  const Base: ClassDecorator = (target) => {
    console.log(target);
    target.prototype.xiaoman = "小满";
    target.prototype.fn = () => {
      console.log("我是憨憨");
    };
  };
  /**
   * profile(原理) Base(Http)
   */
  // 类装饰器
  @Base
  class Http {}
  const http = new Http() as any;
  http.fn();
  console.log(http.xiaoman);

  // 柯里化/闭包/装饰器工厂(传参)
  const Base1 = (name: string) => {
    const fn: ClassDecorator = (target) => {
      console.log(target);
      target.prototype.xiaoman = name;
      target.prototype.fn = () => {
        console.log("我是憨憨");
      };
    };
    return fn;
  };

  const Get = (url: string) => {
    const fn: MethodDecorator = (
      target,
      _key: any,
      descriptor: PropertyDescriptor
    ) => {
      // 通过反射拿到Result指定的key
      const key = Reflect.getMetadata("key", target);
      console.log(target, key, descriptor);
      axios.get(url).then((res) => {
        // 回传
        descriptor.value(key ? res.data[key] : res.data);
      });
    };
    return fn;
  };

  const Result = () => {
    const fn: ParameterDecorator = (target, key, index) => {
      console.log(target, key, index);
      Reflect.defineMetadata("key", "result", target);
    };
    return fn;
  };

  const Name: PropertyDecorator = (target, key) => {
    console.log(target, key);
  };

  @Base1("xiao yu")
  class Http1 {
    // 属性装饰器
    @Name
    xiaoman: string;
    constructor() {
      this.xiaoman = "小满";
    }
    // 方法装饰器
    @Get("http://api.apiopen.top/api/getHaoKanVideo?page=0&size=10")
    // 参数装饰器, 将data.result.list简化, 直接data就可以直接读到.result.list
    getList(@Result() data: any) {
      //   console.log(data);
    }

    create() {}
  }
  const http1 = new Http1() as any;
  console.log(http1.xiaoman);
};
export { p24 };
