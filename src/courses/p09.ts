const p09 = () => {
  interface Options {
    /**
     * @param el 实例挂载的页面节点
     */
    el: string | HTMLElement;
  }

  interface VueCls {
    /**
     * @param options 实例化Vue的参数
     */
    options: Options;
    /**
     * @function init 创建虚拟DOM节点, 渲染真实DOM
     */
    init(): void;
  }

  interface Vnode {
    /**
     * @param tag 标签: div,span,p等
     */
    tag: string;
    /**
     * @param text 标签里的文字
     */
    text?: string;
    /**
     * @param children 子节点, 参与render()递归
     */
    children?: Vnode[];
  }
  /* 
  //  简单版虚拟DOM实现
  class Dom {
    private name: string;
    // 给子类super
    constructor(name: string) {
      this.name = name;
    }
    // 创建节点
    // private 只能自己调用, 不允许子类也不允许在外部使用
    private createElement(el: string) {
      return document.createElement(el);
    }
    // 填充文本
    private setText(el: HTMLElement, text: string | null) {
      el.textContent = text;
    }
    // 渲染函数
    //protected 给子类和内部使用
    protected render(data: Vnode): Node {
      let root = this.createElement(data.tag);
      if (data.text) {
        this.setText(root, data.text);
      }
      // 如果存在children并且是数组则进入递归
      if (data.children && Array.isArray(data.children)) {
        data.children.forEach((item) => {
          let child = this.render(item);
          root.appendChild(child);
        });
        // 否则直接在节点内填充文本
      } else {
        this.setText(root, data.text);
      }
      return root;
    }
  }

  //   继承Dom
  class Vue extends Dom implements VueCls {
    options: Options;
    constructor(options: Options) {
      // super指向父类的prototype.constructor.call
      super("小满");
      this.options = options;
      this.init();
    }

    static xxx() {}

    static version() {
      // 静态方法的this指向该类下的静态方法, 没加static无法相互调用
      this.xxx;
      return "1.0.0";
    }

    // public 默认的都是public, 内部、子类、外部都允许使用
    public init(): void {
      // 虚拟Dom: 通过js渲染真实Dom
      let data: Vnode = {
        tag: "div",
        children: [
          {
            tag: "section",
            text: "子节点1",
          },
          {
            tag: "section",
            text: "子节点2",
          },
          {
            tag: "ul",
            text: "子节点3",
            children: [
              {
                tag: "li",
                text: "子子节点1",
              },
            ],
          },
        ],
      };
      // 获取挂载节点
      let app =
        typeof this.options.el == "string"
          ? document.querySelector(this.options.el)
          : this.options.el;
      app.appendChild(this.render(data));
    }
  }

  new Vue({
    el: "#app",
  });

  //如果不使用new, 直接使用的实例本身的方法就是静态方法
  Vue.version();
 */

  /* 
  // get set
  // 自定义读取跟设置操作, 做拦截器
  class Ref {
    _value: any;
    constructor(value: any) {
      this._value = value;
    }

    get value() {
      return this._value + "vvv";
    }

    set value(newVal) {
      this._value = newVal + "小满";
    }
  }
  const ref = new Ref("哈哈哈");
  ref.value = "坏人";
  console.log(ref.value);
   */
};
export { p09 };
