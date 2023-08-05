import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const COLORS = {
  aceGold: "#DEAA4C",
  aceBlack: "#272A34",
  aceDarker: "#21292A",
};
