import Rings from "../components/Rings.jsx";
import Arrow from "../components/Arrow.jsx";
import { useSite } from "../lib/navigation.js";

export default function SignupSection() {
  const { go } = useSite();

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
          <h2 className="ucg-display">Stay in touch.</h2>
          <p className="ucg-signup-sub">
            Sign up for updates from Utah Common Ground.
          </p>

          <a
            className="ucg-signup-cta"
            href="https://www.utahcommonground.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Sign up
            <span className="ucg-signup-cta-icon">
              <Arrow size={20} color="#fff" />
            </span>
          </a>

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
