import { useMemo, useState } from "react";
import Rings from "../components/Rings.jsx";
import Arrow from "../components/Arrow.jsx";
import { buildDelegates } from "../lib/delegates.js";
import { useSite } from "../lib/navigation.js";

const SAMPLE_IDS = [7, 18, 31];

export default function ForumSection() {
  const { go } = useSite();
  const nodes = useMemo(buildDelegates, []);
  const [hovered, setHovered] = useState(null);
  const [showSamples, setShowSamples] = useState(true);

  const touch = () => {
    if (showSamples) setShowSamples(false);
  };

  const visible = hovered != null ? [hovered] : showSamples ? SAMPLE_IDS : [];

  return (
    <section className="ucg-section" id="forum">
      <Rings
        style={{ top: "50%", right: -420, transform: "translateY(-50%)" }}
        radii={[200, 275, 350, 425]}
      />
      <div className="ucg-inner">
        <div className="ucg-split">
          <div className="ucg-forum-viz">
            <div className="ucg-cluster">
              <svg
                viewBox="0 0 200 200"
                role="group"
                aria-label="Forty delegates, selected to reflect Utah"
              >
                {nodes.map((n) => (
                  <circle
                    key={n.id}
                    className={`ucg-node${visible.includes(n.id) ? " is-on" : ""}`}
                    cx={n.cx}
                    cy={n.cy}
                    r="10.5"
                    tabIndex={0}
                    role="img"
                    aria-label={`Delegate: ${n.party}, ${n.race}, age ${n.age}`}
                    onMouseEnter={() => {
                      touch();
                      setHovered(n.id);
                    }}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => {
                      touch();
                      setHovered(n.id);
                    }}
                    onBlur={() => setHovered(null)}
                  />
                ))}
              </svg>

              {visible.map((id) => {
                const n = nodes[id];
                const low = n.cy < 40;
                return (
                  <div
                    key={id}
                    className={`ucg-tip${low ? " ucg-tip-lo" : ""}`}
                    style={{ left: `${(n.cx / 200) * 100}%`, top: `${(n.cy / 200) * 100}%` }}
                  >
                    {n.party}
                    <br />
                    {n.race}
                    <br />
                    {n.age}
                  </div>
                );
              })}
            </div>
            <p className="ucg-hint">Hover a delegate</p>
          </div>

          <div className="ucg-forum-copy">
            <h2 className="ucg-display">
              <span className="o">40 residents</span> will develop policy proposals.
            </h2>
            <p className="ucg-body" style={{ maxWidth: "34ch" }}>
              They&rsquo;ll be supported by experts in facilitation and public policy, free from
              the influence of special interests.
            </p>
            <button
              className="ucg-link"
              onClick={() => go({ kind: "route", target: "delegates" })}
            >
              Learn about the assembly{" "}
              <span>
                <Arrow />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
