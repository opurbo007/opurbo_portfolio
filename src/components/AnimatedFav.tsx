"use client";
import { useAnimatedFavicon } from "@/hooks/useAnimatedFavicon";

export default function AnimatedFavicon() {
  useAnimatedFavicon("OPU PAL | OPURBO", "OPU PAL | OPURBO", {
    speed: 700,
    bg: "#0a1628",
    accent: "#4fc3f7",
  });
  return null;
}
