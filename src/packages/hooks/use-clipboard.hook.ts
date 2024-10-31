"use client";
import React from "react";
import { toast } from "sonner";

/**
 * useClipboard, handle copy action to clipboard
 * @param value - value to copy
 */
function useClipboard(value: string | number, delay = 1500): [boolean, () => void] {
  const [isCopied, setCopied] = React.useState(false);

  const copyHandler = React.useCallback(() => {
    if (isCopied) return;
    navigator.clipboard.writeText(value.toString());
    const toastID = toast.success("Teks Disalin", { description: "Teks berhasil disalin." });
    setCopied(true);
    setTimeout(() => {
      toast.dismiss(toastID);
      setCopied(false);
    }, delay);
  }, [isCopied, value, delay]);

  return [isCopied, copyHandler];
}

export default useClipboard;
