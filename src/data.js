import { IMAGES } from "./images.js";

/* ------------------------------------------------------------------ *
 * Utah Common Ground — Solutions Forum
 * Static content. Per ucg-site-spec.md.
 * ------------------------------------------------------------------ */

/**
 * Primary navigation.
 *  - kind "anchor": a section on the home page. `target` is the element id
 *    and the URL hash (e.g. "/#process").
 *  - kind "route": a standalone page. `target` is the path segment.
 */
export const NAV = [
  { label: "The Process", kind: "anchor", target: "process" },
  { label: "The Forum", kind: "anchor", target: "forum" },
  { label: "Learning Materials", kind: "route", target: "learning" },
  { label: "Delegate Portal", kind: "route", target: "delegates" },
];

export const SUPPORTERS = [
  "UTAH COMMON\nGROUND",
  "BLOOM\nPROJECT",
  "AEGIX",
  "KEM C. GARDNER\nINSTITUTE",
  "BRAVER\nANGELS",
  "MWEG",
];

export const STEPS = [
  {
    id: "steering-committee",
    title: "Assemble a Steering Committee.",
    blurb:
      "Utahns from across the political spectrum set the ground rules and vouch for the process.",
    image: IMAGES.process["steering-committee"],
  },
  {
    id: "set-agenda",
    title: "Set the agenda.",
    blurb:
      "We engaged over 500 Utahns through surveys and community conversations.",
    image: IMAGES.process["set-agenda"],
  },
  {
    id: "assembly",
    title: "Organize an assembly of residents.",
    blurb:
      "Forty randomly selected delegates meet for two days to write recommendations.",
    image: IMAGES.process["assembly"],
  },
];

export const STEP_MS = 5000;

export const PARTIES = ["Democrat", "Republican", "Independent", "Unaffiliated"];
export const RACES = [
  "White",
  "Hispanic or Latino",
  "Asian",
  "Native American",
  "Black",
  "Two or more races",
  "Pacific Islander",
];
export const AGES = ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"];

export const SOURCES = [
  { tag: "Primer", title: "What is generative AI, in plain terms", meta: "Prepared for delegates · 6 pages" },
  { tag: "Briefing", title: "AI data centers and Utah's water and power", meta: "Utah Common Ground · 9 pages" },
  { tag: "Report", title: "Where 500 Utahns agreed, and where they split", meta: "Community conversation findings" },
  { tag: "Explainer", title: "Who regulates AI today: state, federal, private", meta: "Prepared for delegates · 5 pages" },
  { tag: "Perspectives", title: "Four arguments about public oversight of AI", meta: "Balanced review · 12 pages" },
  { tag: "Case study", title: "How other states have consulted residents", meta: "Comparative summary · 8 pages" },
  { tag: "Glossary", title: "Terms you'll hear at the Forum", meta: "Reference · 3 pages" },
  { tag: "Video", title: "Steering Committee on why this question", meta: "14 minutes" },
];

export const PORTAL_CODE = "utah2026";

export const PORTAL_DOC = [
  {
    h: "Basic logistics",
    p: ["The Forum runs Thursday, September 17 through Friday, September 18. Both days begin at 8:30 a.m. and end by 5:00 p.m. Meals are provided."],
    ul: ["Venue: TBC, downtown Salt Lake City", "Doors and check-in open at 8:00 a.m.", "Free parking in the adjacent structure; validate at the front desk", "Nearest transit: TRAX Blue and Green lines"],
  },
  {
    h: "Schedule",
    p: ["Day one covers shared learning and questions for the expert panel. Day two is drafting, deliberation, and the final vote on recommendations."],
    ul: ["Day 1 · Orientation, learning sessions, small-group discussion", "Day 1 · Expert panel and open Q&A", "Day 2 · Drafting recommendations at your table", "Day 2 · Full-assembly deliberation and vote"],
  },
  {
    h: "What to bring",
    p: ["Everything you need to participate will be provided. Bring yourself, and anything that makes a long day comfortable."],
    ul: ["Photo ID for check-in", "Reading materials, if you'd like your notes on hand", "A sweater — the rooms run cold", "Any accessibility or dietary needs, sent ahead to the team"],
  },
  {
    h: "Stipend",
    p: ["Delegates receive a stipend for both days, plus reimbursement for travel, parking, and child or elder care. Payment is issued within 15 business days of the Forum. Submit receipts through the link emailed after check-in."],
  },
  {
    h: "Contact",
    p: ["Reach the delegate support line during business hours, or email the coordination team any time. Someone will be at the check-in desk both mornings from 8:00 a.m."],
  },
];
