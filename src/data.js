import { IMAGES } from "./images.js";

/* ------------------------------------------------------------------ *
 * Utah Common Ground — Solutions Forum
 * Static content. Per ucg-site-spec.md.
 * ------------------------------------------------------------------ */

/**
 * Primary navigation.
 *  - kind "anchor":   a section on the home page. `target` is the element id
 *    and the URL hash (e.g. "/#process").
 *  - kind "route":    a standalone page. `target` is the path segment.
 *  - kind "external": an off-site link opened in a new tab. `href` is the URL.
 */
export const NAV = [
  { label: "The Process", kind: "anchor", target: "process" },
  { label: "The Solutions Forum", kind: "anchor", target: "forum" },
  { label: "Learning Materials", kind: "route", target: "learning" },
  {
    label: "More about Utah Common Ground",
    kind: "external",
    href: "https://www.utahcommonground.org/",
  },
  { label: "Delegate Portal", kind: "route", target: "delegates", pill: true },
];

/**
 * Hero marquee supporters. `logo` is optional — when a matching file exists
 * in /public/images/logos it renders as an image, otherwise `name` shows as
 * text (\n becomes a line break).
 */
export const SUPPORTERS = [
  { name: "UTAH COMMON\nGROUND", logo: IMAGES.logos["utah-common-ground"] },
  { name: "BLOOM\nPROJECT", logo: IMAGES.logos["bloom-project"] },
  { name: "AEGIX", logo: IMAGES.logos.aegix },
  { name: "KEM C. GARDNER\nINSTITUTE", logo: IMAGES.logos["kem-c-gardner"] },
  { name: "BRAVER\nANGELS", logo: IMAGES.logos["braver-angels"] },
  { name: "MWEG", logo: IMAGES.logos.mweg },
];

export const STEPS = [
  {
    id: "open-poll",
    title: "Open Poll",
    blurb:
      "From March through July 2026, over 500 Utahns shared their perspectives online, identifying areas of interest and consensus across the public.",
    image: IMAGES.process["open-poll"],
  },
  {
    id: "community-conversations",
    title: "Community Conversations",
    blurb:
      "In the spring of 2026, Utah Common Ground organized nine conversations in Utah, Salt Lake and Cache Counties, both in-person and online, and invited people to join others in thinking about how people are using AI, share stories, and identify what issues are of greatest concern and which hold the greatest promise.",
    // image coming later
  },
  {
    id: "cache-county-forum",
    title: "Cache County Forum",
    blurb:
      "30 Cache County residents from a range of backgrounds gathered for a three-hour discussion about what they thought meaningful public consultation on AI-related questions should entail, for the purpose of considering their own ideas, while also having the chance to hear and learn from others.",
    image: IMAGES.process["cache-county-forum"],
  },
];

export const STEP_MS = 5000;

/**
 * The 40 Solutions Forum delegates, from reference/table.tsv. Order is not
 * meaningful — the viz lays them out as an organic cluster. Kept to the few
 * fields the delegate dot-cluster needs; `leaning` is the coarse bucket,
 * `perspective` is how the delegate described themselves.
 */
export const DELEGATES = [
  { county: "Salt Lake", gender: "male", leaning: "Rep/lean Rep", race: "White", age: "18–29", perspective: "Unaffiliated, Lean Right" },
  { county: "Cache", gender: "male", leaning: "Rep/lean Rep", race: "White", age: "18–29", perspective: "Republican" },
  { county: "Utah", gender: "male", leaning: "Rep/lean Rep", race: "Hispanic/Latino", age: "18–29", perspective: "Republican" },
  { county: "Utah", gender: "female", leaning: "Dem/lean Dem", race: "White", age: "55–70", perspective: "Unaffiliated, Lean Left" },
  { county: "Salt Lake", gender: "female", leaning: "Rep/lean Rep", race: "White", age: "71–84+", perspective: "Republican" },
  { county: "Salt Lake", gender: "female", leaning: "Rep/lean Rep", race: "White", age: "30–44", perspective: "Republican" },
  { county: "Salt Lake", gender: "male", leaning: "Rep/lean Rep", race: "Hispanic/Latino", age: "30–44", perspective: "Unaffiliated, Lean Right" },
  { county: "Salt Lake", gender: "male", leaning: "Rep/lean Rep", race: "White", age: "18–29", perspective: "Republican" },
  { county: "Salt Lake", gender: "female", leaning: "Rep/lean Rep", race: "White", age: "30–44", perspective: "Unaffiliated, Lean Right" },
  { county: "Utah", gender: "female", leaning: "Dem/lean Dem", race: "White", age: "45–54", perspective: "Unaffiliated, Lean Left" },
  { county: "Utah", gender: "female", leaning: "Dem/lean Dem", race: "White", age: "55–70", perspective: "Unaffiliated, Lean Left" },
  { county: "Salt Lake", gender: "male", leaning: "No lean", race: "Declined to state", age: "55–70", perspective: "Other" },
  { county: "Salt Lake", gender: "female", leaning: "Rep/lean Rep", race: "White", age: "71–84+", perspective: "Republican" },
  { county: "Salt Lake", gender: "male", leaning: "Rep/lean Rep", race: "White", age: "18–29", perspective: "Unaffiliated, Lean Right" },
  { county: "Cache", gender: "female", leaning: "Rep/lean Rep", race: "White", age: "45–54", perspective: "Republican" },
  { county: "Salt Lake", gender: "male", leaning: "Rep/lean Rep", race: "Hispanic/Latino", age: "45–54", perspective: "Unaffiliated, Lean Right" },
  { county: "Salt Lake", gender: "male", leaning: "Rep/lean Rep", race: "White", age: "30–44", perspective: "Republican" },
  { county: "Utah", gender: "female", leaning: "Rep/lean Rep", race: "Hispanic/Latino", age: "45–54", perspective: "Unaffiliated, Lean Right" },
  { county: "Salt Lake", gender: "male", leaning: "Rep/lean Rep", race: "White", age: "30–44", perspective: "Republican" },
  { county: "Cache", gender: "female", leaning: "Dem/lean Dem", race: "Hispanic/Latino", age: "18–29", perspective: "Unaffiliated, Lean Left" },
  { county: "Salt Lake", gender: "male", leaning: "Rep/lean Rep", race: "Hispanic/Latino", age: "55–70", perspective: "Republican" },
  { county: "Salt Lake", gender: "male", leaning: "Rep/lean Rep", race: "Asian", age: "18–29", perspective: "Unaffiliated, Lean Right" },
  { county: "Salt Lake", gender: "male", leaning: "No lean", race: "Asian", age: "45–54", perspective: "Other" },
  { county: "Utah", gender: "female", leaning: "Dem/lean Dem", race: "White", age: "45–54", perspective: "Unaffiliated, Lean Left" },
  { county: "Utah", gender: "other", leaning: "Dem/lean Dem", race: "White", age: "18–29", perspective: "Unaffiliated, Lean Left" },
  { county: "Utah", gender: "declined to state", leaning: "Dem/lean Dem", race: "White", age: "18–29", perspective: "Unaffiliated, Lean Left" },
  { county: "Salt Lake", gender: "male", leaning: "Rep/lean Rep", race: "White", age: "18–29", perspective: "Unaffiliated, Lean Right" },
  { county: "Salt Lake", gender: "male", leaning: "Rep/lean Rep", race: "Other", age: "55–70", perspective: "Unaffiliated, Lean Right" },
  { county: "Salt Lake", gender: "male", leaning: "Dem/lean Dem", race: "White", age: "71–84+", perspective: "Unaffiliated, Lean Left" },
  { county: "Utah", gender: "female", leaning: "Dem/lean Dem", race: "White", age: "45–54", perspective: "Democrat" },
  { county: "Salt Lake", gender: "male", leaning: "Rep/lean Rep", race: "White", age: "30–44", perspective: "Republican" },
  { county: "Utah", gender: "female", leaning: "Rep/lean Rep", race: "White", age: "30–44", perspective: "Republican" },
  { county: "Salt Lake", gender: "female", leaning: "Dem/lean Dem", race: "White", age: "30–44", perspective: "Democrat" },
  { county: "Cache", gender: "male", leaning: "Dem/lean Dem", race: "White", age: "18–29", perspective: "Unaffiliated, Lean Left" },
  { county: "Salt Lake", gender: "female", leaning: "Dem/lean Dem", race: "White", age: "55–70", perspective: "Unaffiliated, Lean Left" },
  { county: "Cache", gender: "male", leaning: "Dem/lean Dem", race: "White", age: "18–29", perspective: "Unaffiliated, Lean Left" },
  { county: "Utah", gender: "female", leaning: "Rep/lean Rep", race: "White", age: "30–44", perspective: "Republican" },
  { county: "Utah", gender: "female", leaning: "Rep/lean Rep", race: "Asian", age: "55–70", perspective: "Republican" },
  { county: "Utah", gender: "female", leaning: "Dem/lean Dem", race: "Hispanic/Latino", age: "30–44", perspective: "Unaffiliated, Lean Left" },
  { county: "Cache", gender: "male", leaning: "Dem/lean Dem", race: "White", age: "18–29", perspective: "Unaffiliated, Lean Left" },
];

/**
 * Learning-materials cards. Every card is just: title, url (or file), and the
 * author/source it came from (rendered as "From <source>").
 */
export const ACCESS_MATERIALS = [
  {
    title: "Official Briefing Book",
    source: "Utah Common Ground",
    file: "/docs/SolutionsForumBriefingBooklet.pdf",
    download: "Solutions Forum Briefing Booklet.pdf",
    kind: "PDF",
  },
  {
    title: "Briefing Video (Coming Soon)",
    source: "Utah Common Ground",
    url: "#",
  },
];

// Not currently rendered — the Learning Materials page shows "Coming soon"
// for this section until there's real content to publish. Keep this ready.
export const RESOURCES = [
  {
    title: "What is generative AI, in plain terms",
    source: "MIT Technology Review",
    url: "#",
  },
  {
    title: "AI data centers and Utah’s water and power",
    source: "The Salt Lake Tribune",
    url: "#",
  },
  {
    title: "Where 500 Utahns agreed, and where they split",
    source: "Utah Common Ground",
    url: "#",
  },
  {
    title: "Who regulates AI today: state, federal, and private",
    source: "Utah Office of Artificial Intelligence Policy",
    url: "#",
  },
  {
    title: "How other places have consulted their residents",
    source: "Participedia",
    url: "#",
  },
  {
    title: "Four perspectives on public oversight of AI",
    source: "Brookings Institution",
    url: "#",
  },
];

export const PORTAL_CODE = "utah2026";

export const PORTAL_DOC = [
  {
    h: "Basic Logistics",
    p: [
      "The Forum runs Friday, September 18 through Saturday, September 19. Both days begin at 8:30 a.m. and end by 6:00 p.m. Meals are provided.",
    ],
    ul: [
      "Venue: 42 E. Future Way, Draper, Utah",
      "Doors and check-in open at 8:30 a.m.",
      "Free parking in the adjacent lot; validate at the front desk",
      "Nearest transit: TRAX Blue and Green lines",
    ],
  },
  {
    h: "More information coming soon!",
    p: ["The full schedule, what to bring, and stipend details will be posted here soon."],
  },
];

export const PORTAL_CONTACT_EMAIL = "info@utahcommonground.org";
