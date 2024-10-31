"use client";
import type { NextErrorPageProps } from "src/types/common.type";
import InternalServerError from "./500.error";

const RootError = (props: NextErrorPageProps) => {
  return (
    <html>
      <body>
        <InternalServerError {...props} />
      </body>
    </html>
  );
};

export default RootError;
