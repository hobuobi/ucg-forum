import { createContext, useContext } from "react";

/**
 * Shared navigation context.
 *  - go(item): navigate for a NAV-shaped item ({ kind, target }).
 */
export const SiteContext = createContext({ go: () => {} });

export const useSite = () => useContext(SiteContext);

/** Turn a NAV item into a router path. */
export function pathForItem(item) {
  if (item.kind === "anchor") return `/#${item.target}`;
  if (item.target === "home") return "/";
  return `/${item.target}`;
}
