import { Link } from "react-router-dom";
import Rings from "../components/Rings.jsx";
import { SOURCES } from "../data.js";

export default function LearningPage() {
  return (
    <div className="ucg-page">
      <Rings style={{ top: -380, right: -340 }} />
      <div className="ucg-page-inner">
        <Link className="ucg-back" to="/">
          ← Back to the Forum
        </Link>
        <h1 className="ucg-display" style={{ maxWidth: "18ch" }}>
          Learning <span className="o">materials.</span>
        </h1>
        <p className="ucg-body" style={{ maxWidth: "60ch" }}>
          Every delegate receives the same set of materials before the Forum: primers,
          briefings, and a balanced review of the arguments. They&rsquo;re public, so you can
          read along with the assembly.
        </p>

        <div className="ucg-grid">
          {SOURCES.map((s) => (
            <button className="ucg-source" key={s.title}>
              <span className="ucg-tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.meta}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
