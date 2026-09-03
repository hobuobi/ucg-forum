import { useState } from "react";
import Rings from "../components/Rings.jsx";
import { PORTAL_CODE, PORTAL_DOC } from "../data.js";

export default function DelegatesPage() {
  const [pass, setPass] = useState("");
  const [bad, setBad] = useState(false);
  const [open, setOpen] = useState(false);

  const submit = () => {
    if (pass.trim().toLowerCase() === PORTAL_CODE) {
      setOpen(true);
      setBad(false);
    } else {
      setBad(true);
    }
  };

  return (
    <div className="ucg-page">
      <Rings style={{ top: -380, left: -340 }} />
      <div className="ucg-page-inner">
        <h1 className="ucg-display" style={{ maxWidth: "20ch" }}>
          Delegate <span className="o">portal.</span>
        </h1>

        {!open ? (
          <div className="ucg-gate">
            <h2>Enter your access code</h2>
            <p>
              Delegates received a code by email with their confirmation. Lost it? Contact the
              coordination team.
            </p>
            <input
              type="password"
              value={pass}
              className={bad ? "is-bad" : ""}
              placeholder="Access code"
              aria-label="Access code"
              aria-invalid={bad}
              onChange={(e) => {
                setPass(e.target.value);
                setBad(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") submit();
              }}
            />
            {bad && (
              <p style={{ color: "#B4441C", fontSize: 14, fontWeight: 600, margin: "12px 0 0" }}>
                That code doesn&rsquo;t match. Check the email, or request a new code.
              </p>
            )}
            <button className="ucg-btn" onClick={submit}>
              Unlock the portal
            </button>
            <p className="ucg-gate-note">
              Prototype: the code is <strong>{PORTAL_CODE}</strong>. Not real authentication.
            </p>
          </div>
        ) : (
          <div className="ucg-doc">
            {PORTAL_DOC.map((s) => (
              <section key={s.h}>
                <h2>{s.h}</h2>
                {s.p.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
                {s.ul && (
                  <ul>
                    {s.ul.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
