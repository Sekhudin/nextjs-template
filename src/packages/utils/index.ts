import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export type * from "types/common.type";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
