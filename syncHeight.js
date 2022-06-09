import { writable } from "svelte/store";

export default function syncHeight(el) {
  return writable(null, (set) => {
    if (!el) {
      return;
    }

    let ro = new ResizeObserver(() => el && set(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  });
}
