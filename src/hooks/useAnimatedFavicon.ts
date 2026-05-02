import { useEffect } from "react";

interface Options {
  speed?: number; // per letter speed
  bg?: string;
  accent?: string;
}

export function useAnimatedFavicon(
  name: string,
  pageTitle: string,
  opts: Options = {},
) {
  const { speed = 600, bg = "#0a1628", accent = "#4fc3f7" } = opts;

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d")!;

    let idx = 0;
    let start = performance.now();
    let rafId: number;

    const getFavicon = () => {
      let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      return link;
    };

    const draw = (letter: string, progress: number) => {
      ctx.clearRect(0, 0, 64, 64);

      // bg
      ctx.fillStyle = bg;
      ctx.beginPath();
      ctx.roundRect(0, 0, 64, 64, 10);
      ctx.fill();

      // text
      ctx.font = "900 44px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const scale = 0.6 + 0.4 * progress;

      ctx.save();
      ctx.translate(32, 34);
      ctx.scale(scale, scale);
      ctx.globalAlpha = progress;
      ctx.fillStyle = accent;
      ctx.fillText(letter.toUpperCase(), 0, 0);
      ctx.restore();

      getFavicon().href = canvas.toDataURL();
    };

    const loop = (ts: number) => {
      const elapsed = ts - start;
      const progress = Math.min(elapsed / speed, 1);

      const letter = name[idx];

      // draw current letter animation
      draw(letter, progress);

      // update title SAME TIME as favicon
      const built = pageTitle.slice(0, idx + 1);
      document.title = built;

      if (progress >= 1) {
        start = ts;
        idx = (idx + 1) % name.length;
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      document.title = pageTitle;
    };
  }, [name, pageTitle, speed, bg, accent]);
}
