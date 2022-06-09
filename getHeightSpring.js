import { spring } from "svelte/motion";

const OPEN_SPRING = { stiffness: 0.1, damping: 0.3 };
const CLOSE_SPRING = { stiffness: 0.1, damping: 0.5 };

export default function getHeightSpring() {
  const heightSpring = spring(0);
  let shown = false;

  const getConfig = (open, val) => {
    let active = typeof val === "number";
    let immediate = open && !shown && active;
    //once we've had a proper height registered, we can animate in the future
    shown = shown || active;
    return immediate ? { hard: true } : {};
  };

  const sync = (open, height) => {
    heightSpring.set(open ? height || 0 : 0, getConfig(open, height));
    Object.assign(heightSpring, open ? OPEN_SPRING : CLOSE_SPRING);
  };

  return { sync, heightSpring };
}
