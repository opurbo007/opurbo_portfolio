import { useEffect } from "react";

interface Options {
  speed?: number;
  bg?: string;
  accent?: string;
}

export function useAnimatedFavicon(
  name: string,
  pageTitle: string,
  opts: Options = {},
) {
  const { speed = 700, bg = "#0a1628", accent = "#4fc3f7" } = opts;

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d")!;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const easeIn = (t: number) => t * t * t;

    let letterIdx = 0;
    let phase: "in" | "hold" | "out" = "in";
    let letterStart: number | null = null;
    let rafId: number;
    let titleTimer: ReturnType<typeof setTimeout>;

    // favicon helpers
    const setFavicon = () => {
      let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = canvas.toDataURL();
    };

    const drawLetter = (letter: string, inP: number, outP: number) => {
      ctx.clearRect(0, 0, 64, 64);

      // background
      ctx.fillStyle = bg;
      ctx.beginPath();
      ctx.roundRect(0, 0, 64, 64, 10);
      ctx.fill();

      // letter
      ctx.font = "900 46px sans-serif";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";

      const scale =
        phase === "in" ? 0.4 + 0.6 * easeOut(inP) : 1 - 0.5 * easeIn(outP);
      const alpha = phase === "in" ? easeOut(inP) : 1 - easeIn(outP);

      ctx.save();
      ctx.translate(32, 34);
      ctx.scale(scale, scale);
      ctx.globalAlpha = Math.max(0, alpha);
      ctx.fillStyle = accent;
      ctx.fillText(letter.toUpperCase(), 0, 0);
      ctx.restore();

      setFavicon();
    };

    // favicon animation loop
    const tick = (ts: number) => {
      if (!letterStart) letterStart = ts;
      const elapsed = ts - letterStart;
      const letter = name[letterIdx];

      if (phase === "in") {
        drawLetter(letter, Math.min(elapsed / 300, 1), 0);
        if (elapsed >= 300) {
          phase = "hold";
          letterStart = ts;
        }
      } else if (phase === "hold") {
        drawLetter(letter, 1, 0);
        if (elapsed >= 500) {
          phase = "out";
          letterStart = ts;
        }
      } else {
        drawLetter(letter, 1, Math.min(elapsed / 250, 1));
        if (elapsed >= 250) {
          letterIdx = (letterIdx + 1) % name.length;
          phase = "in";
          letterStart = ts;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    // meta title animation — builds name letter by letter then resets
    const animateTitle = () => {
      let idx = 0;
      let built = "";

      const step = () => {
        if (idx < pageTitle.length) {
          built += pageTitle[idx];
          idx++;
          document.title = built;
          titleTimer = setTimeout(step, speed);
        } else {
          titleTimer = setTimeout(() => {
            document.title = "";
            animateTitle();
          }, 1000);
        }
      };

      step();
    };

    // start both
    rafId = requestAnimationFrame(tick);
    animateTitle();

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(titleTimer);
      document.title = pageTitle;
    };
  }, [name, pageTitle, speed, bg, accent]);
}
