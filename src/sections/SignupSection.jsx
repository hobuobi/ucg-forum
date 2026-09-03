import { useState } from "react";
import Rings from "../components/Rings.jsx";
import Arrow from "../components/Arrow.jsx";
import { useSite } from "../lib/navigation.js";

export default function SignupSection() {
  const { go } = useSite();
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");

  const submit = () => {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    if (!ok) {
      setState("bad");
      return;
    }
    setState("ok");
    setEmail("");
  };

  return (
    <section className="ucg-section ucg-signup" id="signup">
      <Rings
        style={{ top: "50%", left: -560, transform: "translateY(-50%)" }}
        stroke="rgba(255,255,255,0.12)"
        width={44}
        radii={[200, 290, 380, 470]}
      />
      <Rings
        style={{ top: "50%", right: -560, transform: "translateY(-50%)" }}
        stroke="rgba(255,255,255,0.12)"
        width={44}
        radii={[200, 290, 380, 470]}
      />
      <div className="ucg-inner">
        <div className="ucg-signup-inner">
          <h2 className="ucg-display">Be part of the story.</h2>
          <p className="ucg-signup-sub">
            Share your email to receive updates from Utah Common Ground.
          </p>

          <div className={`ucg-field${state === "bad" ? " is-bad" : ""}`}>
            <input
              type="email"
              value={email}
              placeholder="Enter your email..."
              aria-label="Email address"
              aria-invalid={state === "bad"}
              onChange={(e) => {
                setEmail(e.target.value);
                if (state !== "idle") setState("idle");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") submit();
              }}
            />
            <button onClick={submit} aria-label="Sign up for updates">
              <Arrow size={22} color="#fff" />
            </button>
          </div>

          <p
            className={`ucg-msg${
              state === "bad" ? " is-bad" : state === "ok" ? " is-ok" : ""
            }`}
            role="status"
          >
            {state === "bad" && "Enter an email address in the form name@example.com."}
            {state === "ok" && "You're on the list. Watch for updates before September 17."}
          </p>

          <button
            className="ucg-link"
            onClick={() => go({ kind: "route", target: "learning" })}
          >
            Access the learning materials to follow along{" "}
            <span>
              <Arrow />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
