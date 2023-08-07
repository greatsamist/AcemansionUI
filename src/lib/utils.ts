import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const selectOptionFocusHandle = (
  event: React.KeyboardEvent<HTMLDivElement>
): void => {
  if (event.key !== "Tab") {
    event.preventDefault();
  }
};

interface StateType {
  [key: string]: any;
}

interface PayloadType {
  [key: string]: any;
}

export const defaultReducer = (
  state: StateType,
  payload: PayloadType
): StateType => {
  return {
    ...state,
    ...payload,
  };
};

export const COLORS = {
  aceGold: "#DEAA4C",
  aceBlack: "#272A34",
  aceDarker: "#21292A",
};
