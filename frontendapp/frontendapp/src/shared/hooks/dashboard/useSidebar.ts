import { useState } from "react";

export function useSidebar() {
  const [open, setOpen] = useState(false);

  return {
    open,
    toggle: () => setOpen((prev) => !prev),
    close: () => setOpen(false)
  };
}
