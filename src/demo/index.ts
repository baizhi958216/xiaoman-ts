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
