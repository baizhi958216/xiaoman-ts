// const p08 = () => {
//   let canvas: HTMLCanvasElement = document.querySelector("canvas");
//   let ctx = canvas.getContext("2d");
//   canvas.width = screen.width;
//   canvas.height = screen.height;
//   let str: string[] = "XMZSWZX010101".split("");
//   let Arr = Array(Math.ceil(canvas.width / 10)).fill(0);
//   const rain = () => {
//     ctx.fillStyle = "rgba(0,0,0,0.05)";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     //   太卡了
//     ctx.fillStyle = `#${Math.floor(Math.random() * 10)}${Math.floor(
//       Math.random() * 10
//     )}${Math.floor(Math.random() * 10)}`;
//     //   ctx.fillStyle = "#0f0";
//     Arr.forEach((item, index) => {
//       ctx.fillText(
//         str[Math.floor(Math.random() * str.length)],
//         index * 10,
//         item + 10
//       );
//       Arr[index] =
//         item > canvas.height || item > 10000 * Math.random() ? 0 : item + 10;
//     });
//   };
//   setInterval(rain, 40);
// };
// p08();
// const p09 = () => {
//   interface Options {
//     /**
//      * @param el 实例挂载的页面节点
//      */
//     el: string | HTMLElement;
//   }
//   interface VueCls {
//     /**
//      * @param options 实例化Vue的参数
//      */
//     options: Options;
//     /**
//      * @function init 创建虚拟DOM节点, 渲染真实DOM
//      */
//     init(): void;
//   }
//   interface Vnode {
//     /**
//      * @param tag 标签: div,span,p等
//      */
//     tag: string;
//     /**
//      * @param text 标签里的文字
//      */
//     text?: string;
//     /**
//      * @param children 子节点, 参与render()递归
//      */
//     children?: Vnode[];
//   }
//   //  简单版虚拟DOM实现
//   class Dom {
//     // 创建节点
//     createElement(el: string) {
//       return document.createElement(el);
//     }
//     // 填充文本
//     setText(el: HTMLElement, text: string | null) {
//       el.textContent = text;
//     }
//     // 渲染函数
//     render(data: Vnode): Node {
//       let root = this.createElement(data.tag);
//       if (data.text) {
//         this.setText(root, data.text);
//       }
//       // 如果存在children并且是数组则进入递归
//       if (data.children && Array.isArray(data.children)) {
//         data.children.forEach((item) => {
//           let child = this.render(item);
//           root.appendChild(child);
//         });
//         // 否则直接在节点内填充文本
//       } else {
//         this.setText(root, data.text);
//       }
//       return root;
//     }
//   }
//   //   继承Dom
//   class Vue extends Dom implements VueCls {
//     options: Options;
//     constructor(options: Options) {
//       // 父类的prototype.constructor.call
//       super();
//       this.options = options;
//       this.init();
//     }
//     init(): void {
//       // 虚拟Dom: 通过js渲染真实Dom
//       let data: Vnode = {
//         tag: "div",
//         children: [
//           {
//             tag: "section",
//             text: "子节点1",
//           },
//           {
//             tag: "section",
//             text: "子节点2",
//           },
//           {
//             tag: "ul",
//             text: "子节点3",
//             children: [
//               {
//                 tag: "li",
//                 text: "子子节点1",
//               },
//             ],
//           },
//         ],
//       };
//       let app =
//         typeof this.options.el == "string"
//           ? document.querySelector(this.options.el)
//           : this.options.el;
//       app.appendChild(this.render(data));
//     }
//   }
//   new Vue({
//     el: "#app",
//   });
// };
var p17 = function () {
    var axios = {
        get: function (url) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                };
                xhr.send(null);
            });
        },
    };
    axios.get("../data/data.json").then(function (res) {
        console.log(res.message);
    });
};
p17();
