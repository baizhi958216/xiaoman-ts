var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* const p08 = () => {
  let canvas: HTMLCanvasElement = document.querySelector("canvas");
  let ctx = canvas.getContext("2d");
  canvas.width = screen.width;
  canvas.height = screen.height;
  let str: string[] = "XMZSWZX010101".split("");
  let Arr = Array(Math.ceil(canvas.width / 10)).fill(0);
  const rain = () => {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //   太卡了
    ctx.fillStyle = `#${Math.floor(Math.random() * 10)}${Math.floor(
      Math.random() * 10
    )}${Math.floor(Math.random() * 10)}`;
    //   ctx.fillStyle = "#0f0";
    Arr.forEach((item, index) => {
      ctx.fillText(
        str[Math.floor(Math.random() * str.length)],
        index * 10,
        item + 10
      );
      Arr[index] =
        item > canvas.height || item > 10000 * Math.random() ? 0 : item + 10;
    });
  };
  setInterval(rain, 40);
};
p08(); */
var p09 = function () {
    //  简单版虚拟DOM实现
    var Dom = /** @class */ (function () {
        function Dom() {
        }
        // 创建节点
        Dom.prototype.createElement = function (el) {
            return document.createElement(el);
        };
        // 填充文本
        Dom.prototype.setText = function (el, text) {
            el.textContent = text;
        };
        // 渲染函数
        Dom.prototype.render = function (data) {
            var _this = this;
            var root = this.createElement(data.tag);
            if (data.text) {
                this.setText(root, data.text);
            }
            // 如果存在children并且是数组则进入递归
            if (data.children && Array.isArray(data.children)) {
                data.children.forEach(function (item) {
                    var child = _this.render(item);
                    root.appendChild(child);
                });
                // 否则直接在节点内填充文本
            }
            else {
                this.setText(root, data.text);
            }
            return root;
        };
        return Dom;
    }());
    //   继承Dom
    var Vue = /** @class */ (function (_super) {
        __extends(Vue, _super);
        function Vue(options) {
            var _this = 
            // 父类的prototype.constructor.call
            _super.call(this) || this;
            _this.options = options;
            _this.init();
            return _this;
        }
        Vue.prototype.init = function () {
            // 虚拟Dom: 通过js渲染真实Dom
            var data = {
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
            var app = typeof this.options.el == "string"
                ? document.querySelector(this.options.el)
                : this.options.el;
            app.appendChild(this.render(data));
        };
        return Vue;
    }(Dom));
    new Vue({
        el: "#app",
    });
};
p09();
