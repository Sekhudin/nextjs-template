import type { NextRootLayoutProps } from "types/common.type";
import { geistMono, geistSans } from "packages/fonts/local";
import "styles/globals.css";

const RootLayout = ({ children }: NextRootLayoutProps) => (
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
  </html>
);

export default RootLayout;
