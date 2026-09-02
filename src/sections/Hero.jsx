import Rings from "../components/Rings.jsx";
import { SUPPORTERS } from "../data.js";
import { IMAGES } from "../images.js";

export default function Hero() {
  return (
    <section className="ucg-section ucg-hero" id="hero">
      <Rings style={{ top: -330, left: -300 }} />
      <div className="ucg-inner">
        <div className="ucg-split">
          <div className="ucg-hero-copy">
            <span className="ucg-pill">September 17–18, 2026</span>
            <h1 className="ucg-display">
              What role should Utahns have in decisions around AI?
            </h1>
            <p className="ucg-sub">
              A <span className="o">Solutions Forum,</span> hosted by Utah Common Ground
            </p>

            <div style={{ marginTop: 56 }}>
              <p className="ucg-eyebrow">Supported by</p>
              <div className="ucg-marquee">
                <div className="ucg-marquee-track">
                  {[...SUPPORTERS, ...SUPPORTERS].map((s, i) => {
                    const dupe = i >= SUPPORTERS.length;
                    const label = s.name.replace(/\n/g, " ");
                    return (
                      <div className="ucg-logo" key={i} aria-hidden={dupe}>
                        {s.logo ? (
                          <img src={s.logo} alt={dupe ? "" : label} loading="lazy" />
                        ) : (
                          s.name
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="ucg-hero-media">
            <img src={IMAGES.hero.src} alt={IMAGES.hero.alt} />
          </div>
        </div>
      </div>
    </section>
  );
}
