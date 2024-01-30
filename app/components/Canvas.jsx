"use client";
import { useEffect, useRef } from "react";

function Canvas() {
  const ref = useRef(null);
  class Symbol {
    constructor(x, y, fontSize, canvasHeight) {
      this.characters =
        "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      this.x = x;
      this.y = y;
      this.fontSize = fontSize;
      this.text = "";
      this.canvasHeight = canvasHeight;
    }
    draw(context) {
      this.text = this.characters.charAt(
        Math.floor(Math.random() * this.characters.length),
      );

      context.fillText(
        this.text,
        this.x * this.fontSize,
        this.y * this.fontSize,
      );
      if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
        this.y = 0;
      } else {
        this.y += 1;
      }
    }
  }
  class Effect {
    constructor(canvasWidth, canvasHeight) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.fontSize = 16;
      this.columns = this.canvasWidth / this.fontSize;
      this.symbols = [];
      this.#initialize();
    }
    #initialize() {
      for (let i = 0; i < this.columns; i++) {
        this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
      }
    }
    resize(width, height) {
      this.canvasWidth = width;
      this.canvasHeight = height;
      this.columns = this.canvasWidth / this.fontSize;
      this.symbols = [];
      this.#initialize();
    }
  }

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#DE3163");
    gradient.addColorStop(0.2, "orange");
    gradient.addColorStop(0.4, "green");
    gradient.addColorStop(0.6, "blue");
    gradient.addColorStop(0.8, "purple");
    gradient.addColorStop(1, "purple");

    const effect = new Effect(canvas.width, canvas.height);
    let lastTime = 0;
    const fps = 15;
    const nextTime = 1000 / fps;
    let timer = 0;

    function animate(timeStamp) {
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;
      if (timer > nextTime) {
        // ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillStyle = getComputedStyle(ctx.canvas).getPropertyValue(
          "--color-bg",
        );
        ctx.textAlign = "center";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = getComputedStyle(ctx.canvas).getPropertyValue(
          "--color-bg-text",
        );
        //  ctx.fillStyle = gradient;
        //    ctx.fillStyle = "#0aff0a";
        // ctx.fillStyle = `hsl(${Math.random() * 360}, 50%, 50%)`;

        ctx.font = effect.fontSize + "px monospace";
        effect.symbols.forEach((symbol) => symbol.draw(ctx));
        timer = 0;
      } else {
        timer += deltaTime;
      }

      requestAnimationFrame(animate);
    }
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      effect.resize(canvas.width, canvas.height);
    });

    animate(0);
  }, []);

  return <canvas ref={ref}></canvas>;
}

export default Canvas;
