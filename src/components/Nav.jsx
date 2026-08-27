import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NAV } from "../data.js";
import { pathForItem, useSite } from "../lib/navigation.js";
import { useIsNarrow } from "../lib/hooks.js";
import Rings from "./Rings.jsx";

export default function Nav({ invert, current }) {
  const { go } = useSite();
  const mobile = useIsNarrow(900);
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

  const links = NAV.map((item) => (
    <Link
      key={item.label}
      to={pathForItem(item)}
      className={current === item.target ? "ucg-nav-current" : undefined}
      onClick={(e) => handle(e, item)}
      tabIndex={mobile && !open ? -1 : 0}
    >
      {item.label}
    </Link>
  ));

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
          <Rings
            style={{ bottom: -420, left: -300 }}
            stroke="rgba(255,255,255,0.13)"
            width={40}
            radii={[180, 260, 340, 420]}
          />
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
