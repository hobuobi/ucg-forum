import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NAV } from "../data.js";
import { pathForItem, useSite } from "../lib/navigation.js";
import { useIsNarrow } from "../lib/hooks.js";

export default function Nav({ invert, current }) {
  const { go } = useSite();
  const mobile = useIsNarrow(1080);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!mobile) setOpen(false);
  }, [mobile]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handle = (e, item) => {
    e.preventDefault();
    setOpen(false);
    go(item);
  };

  const tabIndex = mobile && !open ? -1 : 0;
  const links = NAV.map((item) =>
    item.kind === "external" ? (
      <a
        key={item.label}
        href={item.href}
        target="_blank"
        rel="noreferrer noopener"
        tabIndex={tabIndex}
        onClick={() => setOpen(false)}
      >
        {item.label}
      </a>
    ) : (
      <Link
        key={item.label}
        to={pathForItem(item)}
        className={
          item.pill
            ? "ucg-nav-pill"
            : current === item.target
              ? "ucg-nav-current"
              : undefined
        }
        onClick={(e) => handle(e, item)}
        tabIndex={tabIndex}
      >
        {item.label}
      </Link>
    ),
  );

  if (mobile) {
    return (
      <>
        <div className="ucg-rule" />
        <button
          className={`ucg-burger${open ? " is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`ucg-burger-icon${open ? " is-open" : ""}`}>
            <i />
            <i />
            <i />
          </span>
        </button>
        <div className={`ucg-sheet${open ? " is-open" : ""}`}>
          <nav className="ucg-sheet-nav" aria-label="Main">
            {links}
          </nav>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="ucg-rule" />
      <nav className={`ucg-nav${invert ? " is-invert" : ""}`} aria-label="Main">
        {links}
      </nav>
    </>
  );
}
