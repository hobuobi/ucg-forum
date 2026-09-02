/* ------------------------------------------------------------------ *
 * Static photo references.
 *
 * Files live in /public/images and are served from the site root, so
 * these paths work in dev, in `vite preview`, and in production.
 *
 * To use real photography, drop a file with the same name into
 * /public/images (any web format — .jpg, .webp, .png) and update the
 * extension here. Nothing else in the app needs to change.
 * ------------------------------------------------------------------ */

const base = "/images";

export const IMAGES = {
  favicon: `${base}/favicon.svg`,

  // Hero — a cut-out photo (transparent background) that sits large on the
  // right of the hero, vertically centred and bleeding past the right edge.
  hero: {
    src: `${base}/table-convo.webp`,
    alt: "Utahns of different ages and backgrounds in conversation around a table",
  },

  // Supporter logos for the hero marquee. Files live in /public/images/logos.
  // A supporter with no entry here falls back to its name as text.
  logos: {
    "utah-common-ground": `${base}/logos/ucg.avif`,
    "bloom-project": `${base}/logos/bloom.png`,
    aegix: `${base}/logos/aegix.png`,
    "kem-c-gardner": `${base}/logos/gardner.png`,
    "braver-angels": `${base}/logos/braverangels.webp`,
    mweg: `${base}/logos/mweg.png`,
  },

  // Process accordion — one 16:9 image per step, keyed by step id.
  process: {
    "steering-committee": {
      src: `${base}/process-steering-committee.svg`,
      alt: "Members of a bipartisan steering committee reviewing ground rules together",
    },
    "set-agenda": {
      src: `${base}/process-set-agenda.svg`,
      alt: "Residents responding to surveys and talking in a community conversation",
    },
    "assembly": {
      src: `${base}/process-assembly.svg`,
      alt: "Delegates seated in small groups drafting recommendations",
    },
  },
};
