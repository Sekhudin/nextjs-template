import type React from "react";
import type { NextFont, NextFontWithVariable } from "next/dist/compiled/@next/font";

export type Font = NextFont | NextFontWithVariable;
export type Props<P extends Record<string, unknown> = Record<string, unknown>> = P & {
  className?: string;
};
export type PropsHTML<T extends Record<string, unknown>> = React.HTMLAttributes<T>;
export type PropsFrom<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>,
  P extends Record<string, unknown> = Record<string, unknown>
> = React.ComponentProps<T> & P;
export type PickPropsFrom<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>,
  K extends keyof React.ComponentProps<T>
> = Pick<React.ComponentProps<T>, K>;

export type Children = React.ReactNode;
export type WithChildren = { children: React.ReactNode };
export type OmitChildren<T extends Record<string, unknown>> = Omit<T, "children">;
export type WithSkeleton = { skeletonClass?: string };
export type WithSkeletonList = { nSkeleton: number };

export type PageParams<T extends string = string> = {
  params: Record<T, string>;
};

export type NextErrorPageProps = {
  error: Error & { digest?: string };
};

export type NextLayoutProps<
  T extends string | null = null,
  V extends Record<string, unknown> = Record<string, unknown>
> = T extends string ? Readonly<Record<T, Children> & V> : Readonly<WithChildren & V>;

export type NextRootLayoutProps = {
  children: Children;
};

export interface NextPageProps<T extends string, S extends string = string> extends PageParams<T> {
  searchParams: Record<S, string>;
}
