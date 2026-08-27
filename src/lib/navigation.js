import { createContext, useContext } from "react";

/**
 * Shared navigation + chrome context.
 *  - go(item):   navigate for a NAV-shaped item ({ kind, target }).
 *  - setInvert:  toggle the light-on-orange nav treatment (used by the
 *                signup section while it is on screen).
 */
export const SiteContext = createContext({
  go: () => {},
  setInvert: () => {},
});

export const useSite = () => useContext(SiteContext);

/** Turn a NAV item into a router path. */
export function pathForItem(item) {
  if (item.kind === "anchor") return `/#${item.target}`;
  if (item.target === "home") return "/";
  return `/${item.target}`;
}
