import Rings from "../components/Rings.jsx";
import { ACCESS_MATERIALS } from "../data.js";

function SourceCard({ item, primary }) {
  const isFile = Boolean(item.file);
  return (
    <a
      className={`ucg-source${primary ? " ucg-source-primary" : ""}`}
      href={isFile ? item.file : item.url}
      {...(isFile ? { download: item.download ?? "" } : {})}
    >
      <h3>{item.title}</h3>
      <p>From {item.source}</p>
      {isFile && <span className="ucg-source-file">↓ Download{item.kind ? ` ${item.kind}` : ""}</span>}
    </a>
  );
}

export default function LearningPage() {
  return (
    <div className="ucg-page">
      <Rings style={{ top: -380, right: -340 }} />
      <div className="ucg-page-inner">
        <h1 className="ucg-display" style={{ maxWidth: "18ch" }}>
          Learning <span className="o">materials.</span>
        </h1>

        <section className="ucg-lm-section">
          <h2 className="ucg-lm-head">Access</h2>
          <p className="ucg-lm-sub">
            The official materials prepared for use by the Solutions Forum delegates.
          </p>
          <div className="ucg-grid ucg-grid-half">
            {ACCESS_MATERIALS.map((item) => (
              <SourceCard item={item} primary key={item.title} />
            ))}
          </div>
        </section>

        <hr className="ucg-lm-rule" />

        <section className="ucg-lm-section">
          <h2 className="ucg-lm-head">Other Helpful Resources</h2>
          <p className="ucg-lm-sub">Coming soon.</p>
        </section>
      </div>
    </div>
  );
}
