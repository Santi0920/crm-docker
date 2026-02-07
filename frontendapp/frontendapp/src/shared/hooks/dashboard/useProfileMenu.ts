import { useRef, useState } from "react";
import { useClickOutside } from "./useClickOutside";

export function useProfileMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setOpen(false));

  return {
    open,
    toggle: () => setOpen((prev) => !prev),
    close: () => setOpen(false),
    ref
  };
}
