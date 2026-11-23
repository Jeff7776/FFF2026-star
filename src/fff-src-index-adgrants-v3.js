const BRAND = "The Family Foreclosure Foundation";
const EMAIL = "Info@TheFamilyForeclosureFoundation.Org";
const SITE = "https://thefamilyforeclosurefoundation.org";
const HERO = "https://raw.githubusercontent.com/Jeff7776/FFF2026-star/main/family_foreclosure_foundation_hero_v2.jpg";
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfHdN-XTJFGQqfpt-qY5x2-wJijNpnelrdXvb0ksv2q3aJisQ/viewform";
const ZEFFY_URL = "https://www.zeffy.com/en-US/donation-form/help-families-find-their-footing-after-losing-their-home";

// Stripe live monthly Payment Links, verified live 18 Nov 2026 (no test_ in URLs).
const STRIPE_MONTHLY_25_LIVE = "https://buy.stripe.com/9B6cN43EWasIeNz5oj8EM02";
const STRIPE_MONTHLY_50_LIVE = "https://buy.stripe.com/00wcN4a3k30g20NbMH8EM01";
const STRIPE_MONTHLY_100_LIVE = "https://buy.stripe.com/7sY6oGfnE6cs6h3cQL8EM03";

const SERVICES_SECTION = `
<section class="content">
  <div class="section-heading">
    <p class="eyebrow">WHAT WE DO</p>
    <h2>Services We Provide</h2>
    <p>
      Families are losing their homes — in Texas alone, 37,215 families entered into foreclosure crisis territory in 2025, the highest total of any state, Houston 13,009 (ATTOM 2025). That is about 102 Texas families every day entering into foreclosure crisis territory. The Family Foreclosure Foundation connects families with bank partnerships and CRA opportunities, affordable housing options, employment training and placement, financial education, free legal referrals for asset recovery, down payment assistance, moving assistance, credit counseling and repair, crisis intervention counseling, and family stabilization — and coordinated support to help families find their footing after losing their homes. For seniors, veterans, LMI families, and the children they love.
    </p>
    <p>
      Your contribution goes toward helping us strengthen these services — so families can stay together, find their footing, and move toward permanent housing and homeownership again.
    </p>
    <p>
      <strong>Phase 2 of The 2027 Family Foreclosure Foundational Fund Initiative — $125,000 toward our $1,000,000 goal.</strong>
    </p>
    <p>
      In August 2026, lenders repossessed 5,794 properties across the U.S., up 42% from a year earlier — Texas led the nation with 1,835 of them. (ATTOM, August 2026) In October 2026, more than 5,000 Texas properties were set for auction, up 21% from September. Help us reach our first 100 donors — be one of the first to stand with Texas families.
    </p>
  </div>
  <ul>
    <li>Free post-foreclosure legal-resource navigation, connecting families with qualified attorneys who can help determine whether surplus proceeds are available</li>
    <li>Helping families understand and recover funds they are legally entitled to, with the hope that those resources can circulate back into their communities, the economy, and eventual homeownership</li>
    <li>Job training and employment placement through qualified workforce and employer partnerships</li>
    <li>Community partnerships to coordinate moving assistance</li>
    <li>Transportation coordination for displaced families</li>
    <li>Storage facilities and temporary belongings-storage assistance</li>
    <li>Safe Houses, transitional housing, and proposed modular or affordable housing developments</li>
    <li>Pet shelters, veterinary resources, and keeping family pets with their households whenever possible</li>
    <li>Emergency food, housing stabilization, and essential family-support resources</li>
    <li>Down-payment assistance programs, affordable housing grants, and eligible homebuyer assistance</li>
    <li>Financial education, financial recovery, and second-chance homeownership readiness</li>
    <li>Prioritizing low- to moderate-income families, veterans, seniors, and families displaced after foreclosure or facing additional weather-related hardship</li>
    <li>Helping families stay together while transitioning from displacement toward permanent housing</li>
    <li>Clearly identifying the Foundation's 2027 development needs, including staffing, community partnerships, operating infrastructure, and funding</li>
  </ul>
  <div class="notice">
    Every family's circumstances are different. We make every effort to fulfill your request, but no one can guarantee a specific outcome from any donation.
  </div>
</section>
`;

const CSS = `
:root {
  --navy: #062f50;
  --blue: #07588a;
  --gold: #f5bd32;
  --teal: #16a6b4;
  --ink: #18334a;
  --muted: #5c6f80;
  --cream: #f6f8fa;
  --border: #dce5ec;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--ink);
  line-height: 1.7;
}

a {
  color: inherit;
}

.header {
  padding: 16px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--border);
  background: #fff;
}

.brand {
  font-weight: 900;
  color: var(--navy);
  text-decoration: none;
  font-size: 15px;
  letter-spacing: .04em;
}

.brand small {
  display: block;
  color: #9b7519;
  font-size: 10px;
  letter-spacing: .16em;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

nav a {
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  padding: 8px;
  border-radius: 5px;
  color: var(--navy);
}

nav a:hover,
nav a:focus-visible {
  background: #eaf3f8;
}

/* =========================================================
   HERO
   Responsive photograph with contained, accessible overlay.
   No fabricated badges, ratings, seals, or award decals.
   ========================================================= */

.hero-scene {
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #062f50;
}

.hero-photo {
  width: 100%;
  margin: 0;
  padding: 0;
  line-height: 0;
}

.hero-photo img {
  display: block;
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  object-position: center;
}

/* Tagline under the hero and in the footer — on every page. */
.tagline {
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  color: var(--navy);
  padding: 28px 20px 4px;
  margin: 0;
  line-height: 1.4;
}

/* Real photos on the Donate and About pages. */
.page-photo {
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1080px;
}
.page-photo img {
  display: block;
  width: 100%;
  height: auto;
}

/* =========================================================
    GLOBAL COMPONENTS
    ========================================================= */

.eyebrow {
  font-size: 11px;
  font-weight: 900;
  letter-spacing: .15em;
  color: #947016;
  text-transform: uppercase;
}

h1,
h2,
h3 {
  line-height: 1.2;
  color: var(--navy);
}

h1 {
  font-size: clamp(36px, 5vw, 61px);
  letter-spacing: -.04em;
  margin: 16px 0;
}

h2 {
  font-size: clamp(27px, 3vw, 40px);
  letter-spacing: -.025em;
}

h3 {
  font-size: 20px;
}

.hero p,
.intro {
  font-size: 17px;
  color: var(--muted);
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 25px 0;
}

.btn {
  display: inline-block;
  padding: 13px 19px;
  background: var(--navy);
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: .04em;
  border: 1px solid transparent;
  cursor: pointer;
}

.btn:hover,
.btn:focus-visible {
  filter: brightness(1.08);
}

.btn.gold {
  background: var(--gold);
  color: var(--navy);
}

.btn.outline {
  background: #fff;
  border: 1px solid #c5d3de;
  color: var(--navy);
}

section.content {
  padding: 55px 6%;
}

.center {
  text-align: center;
}

.section-heading {
  max-width: 850px;
  margin: 0 auto 32px;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.card {
  min-width: 0;
  padding: 25px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: 0 7px 25px #062f500a;
}

.card p {
  color: var(--muted);
}

.soft {
  background: var(--cream);
}

.callout {
  padding: 48px 6%;
  text-align: center;
  background: var(--navy);
  color: #fff;
}

.callout h2,
.callout p {
  color: #fff;
}

.page-hero {
  padding: 55px 6%;
  background: linear-gradient(135deg, #eef5f8, #fff);
}

.page-hero h1 {
  font-size: clamp(35px, 4vw, 52px);
}

.faq {
  padding: 20px 0;
  border-bottom: 1px solid var(--border);
}

.faq h3 {
  margin-bottom: 8px;
}

.notice {
  background: #fff8e6;
  border-left: 4px solid var(--gold);
  padding: 18px;
  margin: 25px 0;
}

.form {
  max-width: 850px;
  margin: auto;
}

.form fieldset {
  min-width: 0;
  border: 1px solid var(--border);
  border-radius: 10px;
  margin: 25px 0;
  padding: 24px;
}

.form legend {
  color: var(--navy);
  font-weight: 900;
  padding: 0 8px;
}

.field {
  margin: 16px 0;
}

.field label {
  display: block;
  font-weight: 700;
  margin-bottom: 6px;
}

.field input,
.field select,
.field textarea {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 12px;
  border: 1px solid #bdccd7;
  border-radius: 5px;
  font: inherit;
  color: var(--ink);
  background: #fff;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: 2px solid var(--blue);
  outline-offset: 2px;
}

.field textarea {
  min-height: 100px;
  resize: vertical;
}

.field .choice {
  display: block;
  font-weight: 400;
  margin: 7px 0;
}

.field .choice input {
  display: inline-block;
  width: auto;
  margin-right: 8px;
}

footer {
  background: #041f34;
  color: #fff;
  padding: 38px 6%;
}

footer h3,
footer a {
  color: #fff;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}

footer p {
  color: #e0e9ef;
}

footer a {
  overflow-wrap: anywhere;
}

@media (max-width: 1100px) {
  .hero-title-block h1 {
    white-space: normal;
  }
}

@media (max-width: 800px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .header {
    align-items: flex-start;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
`;

const pages = {
  "/": [
    "A New Path Forward After Foreclosure",
    `
<section class="hero-scene" aria-label="The Family Foreclosure Foundation">
  <figure class="hero-photo">
    <img
      src="https://raw.githubusercontent.com/Jeff7776/FFF2026-star/main/family_foreclosure_foundation_hero_v2.jpg"
      alt="The Family Foreclosure Foundation — Leaving No Family Left Behind"
      width="1920"
      height="654"
      fetchpriority="high"
    >
  </figure>
</section>

<p class="tagline">Families Helping Families, Making Sure That No Family Is Left Behind, Because Every Family Is Somebody's Whole Entire World.</p>

${SERVICES_SECTION}

<section class="content soft">
  <div class="section-heading">
    <p class="eyebrow">OUR MISSION</p>
    <h2>Helping Families Rebuild Stability</h2>
    <p>
      Foreclosure is not the end of a family's story. The next chapter
      can begin with information, relationships, and support.
    </p>
  </div>

  <div class="grid">
    <div class="card">
      <h3>Emergency Needs</h3>
      <p>
        Connect with available food assistance, housing resources,
        and pet shelter resources during a difficult transition.
      </p>
    </div>

    <div class="card">
      <h3>Employment &amp; Education</h3>
      <p>
        Explore job training, employment placement, financial
        education, and workforce development resources.
      </p>
    </div>

    <div class="card">
      <h3>Recovery Navigation</h3>
      <p>
        Learn about possible surplus proceeds and other assets
        following foreclosure, and find qualified resources for
        next steps.
      </p>
    </div>
  </div>
</section>

<section class="content">
  <div class="section-heading">
    <p class="eyebrow">PROGRAM EXPANSION</p>
    <h2>Nine Pathways, One Mission</h2>
    <p>
      The Foundation continues to focus on post-foreclosure recovery
      while expanding to reflect a broader community support model.
    </p>
  </div>

  <div class="grid">
    <div class="card">
      <h3>Emergency Food</h3>
      <p>Food assistance and immediate support for families facing a difficult transition.</p>
    </div>
    <div class="card">
      <h3>Housing Navigation</h3>
      <p>Resource guidance for safe, stable housing options and appropriate referrals.</p>
    </div>
    <div class="card">
      <h3>Pet Shelter Resources</h3>
      <p>Support connecting families with pet-related assistance during housing changes.</p>
    </div>
    <div class="card">
      <h3>Job Training &amp; Placement</h3>
      <p>Career, training, and employment readiness resources designed to strengthen stability.</p>
    </div>
    <div class="card">
      <h3>Financial Education</h3>
      <p>Tools and guidance for budgeting, financial literacy, and homeownership readiness.</p>
    </div>
    <div class="card">
      <h3>Surplus Asset Recovery</h3>
      <p>Information about possible surplus proceeds and qualified recovery guidance.</p>
    </div>
    <div class="card">
      <h3>Down Payment Program</h3>
      <p>Support intended to help eligible families work toward returning to homeownership.</p>
    </div>
    <div class="card">
      <h3>Ongoing Support &amp; Resources</h3>
      <p>Continued stabilization support, follow-up care, and appropriate community resource connections.</p>
    </div>
    <div class="card">
      <h3>Family &amp; Client Sponsorship</h3>
      <p>Support the families served by the Foundation through direct family assistance and recovery pathways.</p>
    </div>
  </div>
</section>

<section class="content soft">
  <div class="section-heading">
    <p class="eyebrow">SPONSORSHIP PATHWAYS</p>
    <h2>Two Separate Ways to Give</h2>
    <p>
      The Foundation distinguishes between supporting the organization and supporting the families it serves.
    </p>
  </div>

  <div class="grid">
    <div class="card" id="family-sponsorship">
      <h3>Family &amp; Client Sponsorship — Sponsor the Client</h3>
      <p>
        Support the families served by the Foundation through stabilization, essential needs, and homeownership pathways.
      </p>
    </div>

    <div class="card" id="community-sponsorship">
      <h3>Community Sponsorship — Sponsor the Foundation</h3>
      <p>
        Separate organizational giving that helps strengthen the Foundation's mission, outreach, and capacity.
      </p>
    </div>
  </div>
</section>

<section class="content">
  <div class="section-heading">
    <p class="eyebrow">WHO WE SERVE</p>
    <h2>Every Family Deserves a Path Forward</h2>
    <p>
      We focus on individuals and families who have already
      experienced foreclosure and need practical next steps.
    </p>
  </div>

  <div class="grid">
    <div class="card">
      <h3>Families With Children</h3>
      <p>
        Parents navigating foreclosure who need help exploring
        stability, food, housing, and safe places for their children.
      </p>
    </div>

    <div class="card">
      <h3>Veterans &amp; Seniors</h3>
      <p>
        Veterans, older adults, and their families seeking
        appropriate housing, employment, and community resources.
      </p>
    </div>

    <div class="card">
      <h3>Displaced Individuals</h3>
      <p>
        Former property owners, family members, and qualifying
        individuals looking for practical next steps after foreclosure.
      </p>
    </div>
  </div>
</section>

<section class="callout">
  <p class="eyebrow">FAMILIES HELPING FAMILIES</p>
  <h2>Together, We Can Bridge the Gap</h2>
  <p>
    Support the families served by the Foundation and help a family move toward stability.
  </p>
  <div class="buttons" style="justify-content:center;">
    <a class="btn gold" href="/volunteer.html#family-sponsorship">SPONSOR THE CLIENTS</a>
    <a class="btn outline" href="/apply.html">REQUEST ASSISTANCE</a>
  </div>
</section>
`
  ],

  "/programs.html": [
    "Programs & Services",
    `
<div class="page-hero">
  <p class="eyebrow">HOW WE HELP</p>
  <h1>Programs &amp; Services</h1>
  <p>
    Practical resource navigation and community connections for
    families rebuilding after foreclosure through nine distinct
    program categories.
  </p>
</div>

${SERVICES_SECTION}

<section class="content">
  <div class="grid">
    <div class="card">
      <h3>Emergency Food</h3>
      <p>
        Connections to food assistance and community programs
        where available.
      </p>
    </div>

    <div class="card">
      <h3>Housing Navigation</h3>
      <p>
        Explore available housing resources, second-chance housing
        information, and appropriate referrals.
      </p>
    </div>

    <div class="card">
      <h3>Pet Shelter Resources</h3>
      <p>
        Help identifying possible community resources for pets
        during housing transitions.
      </p>
    </div>

    <div class="card">
      <h3>Job Training &amp; Placement</h3>
      <p>
        Explore employment services, career development, job
        training, and placement resources.
      </p>
    </div>

    <div class="card">
      <h3>Financial Education</h3>
      <p>
        Connections to budgeting education, financial literacy,
        and homeownership readiness information.
      </p>
    </div>

    <div class="card">
      <h3>Surplus Asset Recovery</h3>
      <p>
        Guidance on researching potential surplus proceeds after
        foreclosure and connecting with qualified professionals.
      </p>
    </div>

    <div class="card">
      <h3>Family &amp; Client Sponsorship — Sponsor the Client</h3>
      <p>
        Support the families served by the Foundation through resource needs, stabilization, and homeownership pathways.
      </p>
    </div>

    <div class="card">
      <h3>Down Payment Program</h3>
      <p>
        A program focus to help eligible families work toward
        returning to homeownership through practical next steps.
      </p>
    </div>

    <div class="card">
      <h3>Ongoing Support &amp; Resources</h3>
      <p>
        Continued family stabilization, follow-up support, and
        healthy connections to community resources and partnerships.
      </p>
    </div>
  </div>

  <div class="notice">
    The Foundation maintains a clear distinction between support for the organization and support for families served by the Foundation.
    Services provided by outside organizations depend on their eligibility requirements, capacity, and availability. The Foundation does not guarantee placement or a particular outcome.
  </div>
</section>
`
  ],

  "/who-we-serve.html": [
    "Who We Serve",
    `
<div class="page-hero">
  <p class="eyebrow">OUR COMMUNITY</p>
  <h1>Who We Serve</h1>
  <p>
    Individuals and families working to rebuild after residential
    or commercial foreclosure, including through stabilization,
    resource support, and pathways toward homeownership.
  </p>
</div>

<section class="content">
  <div class="grid">
    <div class="card">
      <h3>Parents &amp; Children</h3>
      <p>
        Families seeking resources for food, safe housing, and
        family stability following foreclosure.
      </p>
    </div>

    <div class="card">
      <h3>Veterans</h3>
      <p>
        Veterans and their families exploring housing, employment,
        benefits navigation, and community support resources.
      </p>
    </div>

    <div class="card">
      <h3>Seniors</h3>
      <p>
        Older adults who need help identifying appropriate support
        services and practical next steps.
      </p>
    </div>

    <div class="card">
      <h3>Displaced Families</h3>
      <p>
        Households adjusting to a change in housing and seeking
        connections to available assistance.
      </p>
    </div>

    <div class="card">
      <h3>Former Property Owners</h3>
      <p>
        Individuals researching possible surplus proceeds or other
        assets connected to a completed foreclosure.
      </p>
    </div>

    <div class="card">
      <h3>Commercial Property Owners</h3>
      <p>
        Former owners of commercial properties seeking information
        about possible recovery options and qualified referrals.
      </p>
    </div>
  </div>

  <div class="notice">
    <strong>Post-foreclosure focus:</strong> We are not a
    pre-foreclosure prevention service. If you are currently facing
    foreclosure, contact a HUD-approved housing counselor or legal
    aid organization for guidance. Our support model may include
    stabilization resources, down payment readiness, and ongoing
    community support as appropriate.
  </div>
</section>
`
  ],

  "/resources.html": [
    "Resources & FAQ",
    `
<div class="page-hero">
  <p class="eyebrow">RESOURCES &amp; FAQ</p>
  <h1>Resources &amp; Frequently Asked Questions</h1>
  <p>
    General information about foreclosure recovery, sponsorship,
    and the Foundation's approach to family stabilization.
  </p>
</div>

<section class="content">
  <div class="faq">
    <h3>What is the Family Foreclosure Foundation?</h3>
    <p>
      We connect families and individuals affected by residential
      or commercial foreclosure with information, community
      resources, and next-step guidance.
    </p>
  </div>

  <div class="faq">
    <h3>Do you provide foreclosure prevention?</h3>
    <p>
      No. Our focus is post-foreclosure support. If you have not
      yet lost your property, consider contacting a HUD-approved
      housing counselor or legal aid organization.
    </p>
  </div>

  <div class="faq">
    <h3>What kind of help may be available?</h3>
    <p>
      Resources may include food assistance, housing navigation,
      pet shelter resources, job training, employment placement,
      financial education, down payment guidance, and community referrals.
    </p>
  </div>

  <div class="faq">
    <h3>What is the Down Payment Program?</h3>
    <p>
      The Down Payment Program is part of the Foundation's mission to help eligible families work toward returning to homeownership.
      The program is designed to support a path forward and does not promise funding, eligibility, or guaranteed assistance.
    </p>
  </div>

  <div class="faq">
    <h3>What is Ongoing Support &amp; Resources?</h3>
    <p>
      This area reflects the Foundation's commitment to continued family stabilization, follow-up support, and appropriate connections to community resources and partnerships.
    </p>
  </div>

  <div class="faq">
    <h3>What is the difference between sponsorship pathways?</h3>
    <p>
      Community Sponsorship supports The Family Foreclosure Foundation itself. Family &amp; Client Sponsorship supports eligible families served by the Foundation.
      These are separate paths and should not be treated as the same fundraising opportunity.
    </p>
  </div>

  <div class="faq">
    <h3>How do I request assistance?</h3>
    <p>
      Complete the inquiry form on our Request Assistance page.
      We will review your inquiry and determine what follow-up
      may be appropriate.
    </p>
  </div>

  <div class="faq">
    <h3>Is there a cost?</h3>
    <p>
      The Foundation aims to connect families with available
      resources at no cost. Outside organizations may have their
      own terms, eligibility requirements, and fees.
    </p>
  </div>

  <div class="faq">
    <h3>What are surplus proceeds?</h3>
    <p>
      In some circumstances, a foreclosure sale may generate funds
      beyond the amounts owed and applicable costs. The handling
      of those funds depends on the sale and local procedure.
    </p>
  </div>

  <div class="faq">
    <h3>Can you recover surplus funds for me?</h3>
    <p>
      We can help you understand the general process and connect
      you with resources or qualified attorneys. We do not provide
      legal representation or guarantee outcomes.
    </p>
  </div>

  <div class="faq">
    <h3>How long will a review take?</h3>
    <p>
      We aim to review inquiries within 48–72 hours when possible.
      This is an initial review target, not a guarantee of response
      time or case outcome.
    </p>
  </div>

  <div class="faq">
    <h3>Is my information private?</h3>
    <p>
      Please share only the information needed for your inquiry.
      Review our Privacy Policy for information about handling
      personal information.
    </p>
  </div>

  <div class="faq">
    <h3>What are the laws and deadlines?</h3>
    <p>
      Foreclosure and surplus claims are governed by state law and
      local procedure. Deadlines can differ significantly. Check
      with the court, your attorney, or a trusted housing counselor.
    </p>
  </div>

  <div class="notice">
    This website provides general information, not legal, tax,
    financial, or housing advice. Eligibility and resource
    availability vary. No particular outcome is guaranteed.
  </div>
</section>
`
  ],

  "/about.html": [
    "About the Foundation",
    `
<div class="page-hero">
  <p class="eyebrow">ABOUT US</p>
  <h1>About the Foundation</h1>
  <p>Helping families and individuals rebuild after foreclosure through a consistent mission of stabilization, recovery, and community partnership.</p>
  <p><strong>The Family Foreclosure Foundation is an IRS-recognized 501(c)(3) public charity. EIN: 41-5341383.</strong></p>
</div>

<figure class="page-photo">
  <img
    src="https://raw.githubusercontent.com/Jeff7776/FFF2026-star/main/helping-after-foreclosure.jpg"
    alt="Belongings being moved from a home after foreclosure, with Foundation volunteers helping"
    width="1200"
    height="631"
  >
</figure>

<section class="content">
  <div class="card">
    <h3>Our Mission</h3>
    <p>
      The Family Foreclosure Foundation is dedicated to helping
      families and individuals who have experienced residential
      or commercial foreclosure. We believe stability can return
      with dignity, practical support, and a realistic path toward
      homeownership where appropriate.
    </p>
  </div>

  <div class="card">
    <h3>What We Do</h3>
    <p>
      We help connect families with emergency food and housing
      resources, pet shelter resources, job training and placement,
      financial education, second-chance housing information,
      surplus recovery guidance, down payment readiness support,
      and ongoing stabilization resources.
    </p>
  </div>

  <div class="card">
    <h3>Our Values</h3>
    <p>
      We believe in dignity, compassion, transparency, and
      practical support. We do not judge the circumstances that
      led to foreclosure. We focus on realistic next steps.
    </p>
  </div>

  <div class="card">
    <h3>How We Are Funded</h3>
    <p>
      The Foundation seeks support through donations, grants,
      and community partnerships. Community Sponsorship supports
      the Foundation itself, while Family &amp; Client Sponsorship
      supports families served by the Foundation. Any services offered
      by partner organizations remain subject to their own rules and availability.
    </p>
  </div>

  <div class="notice">
    Our work centers on family stabilization and resource
    navigation. We do not promise recovery of funds, housing
    placement, employment, homeownership, or guaranteed assistance.
  </div>
</section>
`
  ],

  "/apply.html": [
    "Request Assistance",
    `
<div class="page-hero">
  <p class="eyebrow">REQUEST ASSISTANCE</p>
  <h1>Request Assistance</h1>
  <p>
    If foreclosure has affected your family or property, you may
    use this form to tell us about your situation. We can help
    explore resource options, stabilization support, and next steps.
  </p>
</div>

<section class="content">
  <form class="form" id="applyForm">
    <fieldset>
      <legend>Section A — Your Information</legend>

      <div class="field">
        <label for="name">Full name *</label>
        <input id="name" name="Full name" required autocomplete="name">
      </div>

      <div class="field">
        <label for="email">Email address *</label>
        <input id="email" name="Email" type="email" required autocomplete="email">
      </div>

      <div class="field">
        <label for="phone">Telephone number *</label>
        <input id="phone" name="Telephone" type="tel" required autocomplete="tel">
      </div>

      <div class="field">
        <label for="city">City and state *</label>
        <input id="city" name="City and state" required>
      </div>

      <div class="field">
        <label for="relation">Your relationship to the property</label>
        <select id="relation" name="Relationship">
          <option>Former owner</option>
          <option>Spouse or partner</option>
          <option>Family member</option>
          <option>Other</option>
        </select>
      </div>
    </fieldset>

    <fieldset>
      <legend>Section B — Property Information</legend>

      <div class="field">
        <label for="address">Property city, state, and ZIP *</label>
        <input id="address" name="Property location" required>
      </div>

      <div class="field">
        <label for="type">Property type</label>
        <select id="type" name="Property type">
          <option>Residential</option>
          <option>Commercial</option>
          <option>Mixed use</option>
          <option>Not sure</option>
        </select>
      </div>

      <div class="field">
        <label for="date">Approximate foreclosure date, if known</label>
        <input id="date" name="Foreclosure date" type="date">
      </div>

      <div class="field">
        <label for="details">Tell us about your situation *</label>
        <textarea
          id="details"
          name="Situation"
          required
          placeholder="Please do not include Social Security numbers, bank account information, or other sensitive personal data."
        ></textarea>
      </div>
    </fieldset>

    <fieldset>
      <legend>Section C — Resources You Need</legend>

      <div class="field">
        <label class="choice">
          <input type="checkbox" name="Resources" value="Food assistance">
          Food assistance
        </label>

        <label class="choice">
          <input type="checkbox" name="Resources" value="Housing support">
          Housing support
        </label>

        <label class="choice">
          <input type="checkbox" name="Resources" value="Financial education">
          Financial education
        </label>

        <label class="choice">
          <input type="checkbox" name="Resources" value="Employment support">
          Employment support
        </label>

        <label class="choice">
          <input type="checkbox" name="Resources" value="Down payment program">
          Down payment program
        </label>

        <label class="choice">
          <input type="checkbox" name="Resources" value="Surplus proceeds information">
          Surplus proceeds information
        </label>
      </div>

      <div class="field">
        <label class="choice">
          <input
            type="checkbox"
            name="Consent to contact"
            value="Yes"
            required
          >
          I agree that the Foundation may contact me about this inquiry. *
        </label>
      </div>

      <div class="field">
        <label class="choice">
          <input
            type="checkbox"
            name="Privacy policy acknowledgment"
            value="Yes"
            required
          >
          I have read the <a href="/privacy.html">Privacy Policy</a>. *
        </label>
      </div>
    </fieldset>

    <div class="notice">
      This form opens an email draft in your email application.
      Your inquiry is not submitted until you send that email.
      Please allow 48–72 hours for an initial review when possible.
    </div>

    <button class="btn gold" type="submit">PREPARE EMAIL INQUIRY</button>
    <p id="formStatus" role="status" aria-live="polite"></p>
  </form>
</section>

<script>
document.getElementById("applyForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = new FormData(this);
  const lines = [];

  for (const [key, value] of data.entries()) {
    lines.push(key + ": " + value);
  }

  const subject = encodeURIComponent(
    "Assistance Inquiry - " + (data.get("Full name") || "Applicant")
  );

  const body = encodeURIComponent(lines.join("\n"));

  document.getElementById("formStatus").textContent =
    "Your email application should open. Please review it and press Send in your email application to submit your inquiry.";

  window.location.href =
    "mailto:" + "${EMAIL}" + "?subject=" + subject + "&body=" + body;
});
</script>
`
  ],

  "/contact.html": [
    "Contact the Foundation",
    `
<div class="page-hero">
  <p class="eyebrow">GET IN TOUCH</p>
  <h1>Contact the Foundation</h1>
  <p>
    Questions about the Foundation, our mission, or available
    resource navigation?
  </p>
</div>

<section class="content">
  <div class="grid">
    <div class="card">
      <h3>Email</h3>
      <p><a href="mailto:${EMAIL}">${EMAIL}</a></p>
    </div>

    <div class="card">
      <h3>Website</h3>
      <p><a href="${SITE}">thefamilyforeclosurefoundation.org</a></p>
    </div>

    <div class="card">
      <h3>Mailing Address</h3>
      <p>
        1500 S. Dairy Ashford Rd., Suite 207<br>
        Houston, TX 77077
      </p>
    </div>
  </div>

  <p class="center">
    <a class="btn gold" href="${GOOGLE_FORM_URL}" target="_blank" rel="noopener">SEND INQUIRY</a>
  </p>
  <p class="center">
    Or email us directly at <a href="mailto:${EMAIL}">${EMAIL}</a> — all form inquiries go to info@thefamilyforeclosurefoundation.org.
  </p>
</section>
`
  ],

  "/asset-recovery.html": [
    "Asset Recovery",
    `
<div class="page-hero">
  <p class="eyebrow">KNOW YOUR OPTIONS</p>
  <h1>Surplus Asset Recovery</h1>
  <p>
    Learn about possible surplus proceeds or other recoverable
    funds following foreclosure.
  </p>
</div>

<section class="content">
  <div class="card">
    <h3>What Are Surplus Proceeds?</h3>
    <p>
      When a foreclosed property is sold for more than the amounts
      owed and applicable costs, additional proceeds may sometimes
      remain. Whether any funds are available depends on the sale
      and jurisdiction.
    </p>
  </div>

  <div class="card">
    <h3>Who May Be Eligible?</h3>
    <p>
      Eligibility depends on the state and county, the foreclosure
      process, junior liens, court orders, ownership interests,
      and other facts. Not every case will qualify.
    </p>
  </div>

  <div class="card">
    <h3>Time Limits</h3>
    <p>
      Deadlines vary by jurisdiction and type of foreclosure.
      Act promptly to identify the applicable process and verify
      deadlines with the responsible court, title company, or attorney.
    </p>
  </div>

  <div class="card">
    <h3>How We Can Help</h3>
    <p>
      The Foundation can provide general information, help you
      identify places to research potential funds, and connect
      you with qualified resources or attorneys.
    </p>
  </div>

  <div class="card">
    <h3>Protect Yourself</h3>
    <p>
      Be cautious of unsolicited offers and large percentage-based
      fees. Verify credentials, understand every agreement before
      signing, and consider consulting a licensed professional.
    </p>
  </div>

  <div class="notice">
    This page is general information, not legal, tax, or financial
    advice. No recovery is promised or guaranteed.
  </div>

  <a class="btn gold" href="/apply.html">REQUEST ASSISTANCE</a>
</section>
`
  ],

  "/volunteer.html": [
    "Volunteer & Community Sponsors",
    `
<div class="page-hero">
  <p class="eyebrow">FAMILIES HELPING FAMILIES</p>
  <h1>Volunteer &amp; Community Sponsors</h1>
  <p>
    Help build a stronger bridge for families rebuilding after
    foreclosure. The Foundation distinguishes clearly between
    support for the mission and support for the families served.
  </p>
</div>

<section class="content">
  <div class="section-heading">
    <h2>Stand Beside a Family. Strengthen a Community.</h2>
    <p>
      Volunteers and community partners can help families take
      practical next steps with dignity, privacy, and encouragement.
    </p>
  </div>

  <div class="grid">
    <div class="card" id="family-sponsorship">
      <h3>Family &amp; Client Sponsorship — Sponsor the Client</h3>
      <p>
        Community partners, businesses, and donors may support the individuals and families served by the Foundation.
        This pathway focuses on direct family support, stabilization needs, and homeownership goals.
      </p>
    </div>

    <div class="card" id="community-sponsorship">
      <h3>Community Sponsorship — Sponsor the Foundation</h3>
      <p>
        Separate organizational giving supports The Family Foreclosure Foundation itself, including mission work, outreach, and organizational capacity.
      </p>
    </div>

    <div class="card">
      <h3>Volunteer Your Skills</h3>
      <p>
        Offer administrative help, resource research, translation,
        outreach, job-readiness support, event assistance, or other
        skills that match your availability.
      </p>
    </div>
  </div>

  <div class="notice">
    <strong>Separate pathways:</strong> The Foundation keeps Community Sponsorship and Family &amp; Client Sponsorship distinct.
    Each opportunity has its own purpose, messaging, and inquiry process. No specific outcome, tax benefit, or guaranteed assistance is implied.
  </div>

${SERVICES_SECTION}

  <p class="center">
    <a class="btn gold" href="${GOOGLE_FORM_URL}" target="_blank" rel="noopener">SEND VOLUNTEER APPLICATION</a>
  </p>
  <p class="center">
    Your application goes directly to info@thefamilyforeclosurefoundation.org through our secure form.
  </p>
</section>
`
  ],

  "/donate.html": [
    "Donate",
    `
<div class="page-hero">
  <p class="eyebrow">FAMILIES HELPING FAMILIES</p>
  <h1>Help Families Find Their Footing After Losing Their Home</h1>
  <p>
    Your gift helps families rebuild after disaster and housing loss — with housing help, food, job training and placement, and free legal-resource navigation toward homeownership again.
  </p>
  <p>
    <strong>Phase 2 of The 2027 Family Foreclosure Foundational Fund Initiative — $125,000 toward our $1,000,000 goal.</strong>
  </p>
</div>

<figure class="page-photo">
  <img
    src="https://raw.githubusercontent.com/Jeff7776/FFF2026-star/main/helping-in-the-snow.jpg"
    alt="Foundation volunteer handing a warm blanket and food to a man beside tents in the snow"
    width="1191"
    height="896"
  >
</figure>

<section class="content">
  <div class="card">
    <h3>Give a One-Time Gift</h3>
    <p>Give any amount — $25, $50, $100, $250, or custom. $100 is preselected on the donation form.</p>
    <p class="center"><a class="btn gold" href="${ZEFFY_URL}" target="_blank" rel="noopener">GIVE A ONE-TIME GIFT</a></p>
  </div>

  <div class="card">
    <h3>Give Monthly</h3>
    <p>Give $25, $50, or $100 a month and help families month after month. Monthly donors can cancel at any time.</p>
    <p class="center"><a class="btn gold" href="${STRIPE_MONTHLY_25_LIVE}" target="_blank" rel="noopener">GIVE $25 / MONTH</a></p>
    <p class="center"><a class="btn gold" href="${STRIPE_MONTHLY_50_LIVE}" target="_blank" rel="noopener">GIVE $50 / MONTH</a></p>
    <p class="center"><a class="btn gold" href="${STRIPE_MONTHLY_100_LIVE}" target="_blank" rel="noopener">GIVE $100 / MONTH</a></p>
  </div>

  <div class="card">
    <h3>Donate a House or Property</h3>
    <p>You can also donate a house or property. Your gift goes toward building safe houses — a place for families to stay in transition while we help them reach sustainable living accommodations.</p>
    <p class="center"><a class="btn gold" href="mailto:${EMAIL}?subject=Donating%20a%20house%20or%20property" target="_blank" rel="noopener">EMAIL US ABOUT A PROPERTY GIFT</a></p>
  </div>

  <div class="card">
    <h3>What Your Gift Helps Strengthen</h3>
    <p>Your contribution goes toward helping us strengthen these services:</p>
    <ul>
      <li>Free post-foreclosure legal-resource navigation, connecting families with qualified attorneys who can help determine whether surplus proceeds are available</li>
      <li>Helping families understand and recover funds they are legally entitled to, with the hope that those resources can circulate back into their communities, the economy, and eventual homeownership</li>
      <li>Job training and employment placement through qualified workforce and employer partnerships</li>
      <li>Community partnerships to coordinate moving assistance</li>
      <li>Transportation coordination for displaced families</li>
      <li>Storage facilities and temporary belongings-storage assistance</li>
      <li>Safe Houses, transitional housing, and proposed modular or affordable housing developments</li>
      <li>Pet shelters, veterinary resources, and keeping family pets with their households whenever possible</li>
      <li>Emergency food, housing stabilization, and essential family-support resources</li>
      <li>Down-payment assistance programs, affordable housing grants, and eligible homebuyer assistance</li>
      <li>Financial education, financial recovery, and second-chance homeownership readiness</li>
      <li>Prioritizing low- to moderate-income families, veterans, seniors, and families displaced after foreclosure or facing additional weather-related hardship</li>
      <li>Helping families stay together while transitioning from displacement toward permanent housing</li>
      <li>Clearly identifying the Foundation's 2027 development needs, including staffing, community partnerships, operating infrastructure, and funding</li>
    </ul>
  </div>

  <div class="notice">
    Every family's circumstances are different. We make every effort to fulfill your request, but no one can guarantee a specific outcome from any donation.
  </div>
</section>
`
  ],

  "/privacy.html": [
    "Privacy Policy",
    `
<div class="page-hero">
  <p class="eyebrow">YOUR PRIVACY MATTERS</p>
  <h1>Privacy Policy</h1>
  <p>
    Information about how the Foundation intends to handle
    inquiries received through this website.
  </p>
</div>

<section class="content">
  <div class="card">
    <h3>Information We Collect</h3>
    <p>
      If you contact us, you may provide your name, email address,
      telephone number, property information, and details about
      your request.
    </p>
  </div>

  <div class="card">
    <h3>How We Use Information</h3>
    <p>
      We use information to understand your inquiry, communicate
      with you, and identify relevant resources or referrals.
    </p>
  </div>

  <div class="card">
    <h3>Sharing Information</h3>
    <p>
      We do not sell personal information. We aim to share relevant
      information with outside organizations only with your consent
      or as otherwise permitted by law.
    </p>
  </div>

  <div class="card">
    <h3>Data Security</h3>
    <p>
      We take reasonable steps to protect information, but no online
      transmission or electronic storage method can be guaranteed
      completely secure. Do not send sensitive account numbers or
      personal identifiers.
    </p>
  </div>

  <div class="card">
    <h3>Your Choices</h3>
    <p>
      You may contact us to request access to, correction of, or
      deletion of information you previously provided, subject to
      applicable requirements.
    </p>
  </div>

  <div class="card">
    <h3>Contact</h3>
    <p>
      Questions about privacy may be sent to
      <a href="mailto:${EMAIL}">${EMAIL}</a>.
    </p>
  </div>

  <div class="notice">
    This policy text should be reviewed against the Foundation's
    actual data handling practices before publication. It does
    not replace legal advice.
  </div>
</section>
`
  ]
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, function(character) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[character];
  });
}

function render(title, body) {
  const links = [
    ["/", "Home"],
    ["/programs.html", "Programs"],
    ["/who-we-serve.html", "Who We Serve"],
    ["/resources.html", "Resources & FAQ"],
    ["/about.html", "About"],
    ["/asset-recovery.html", "Asset Recovery"],
    ["/volunteer.html", "Volunteer & Sponsor"],
    ["/apply.html", "Request Assistance"],
    ["/donate.html", "Donate"],
    ["/contact.html", "Contact"]
  ];

  return `<!doctype html>
<html lang="en">
<head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-DY1DVKPXVY"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-DY1DVKPXVY');
</script>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#062f50">
<meta name="description" content="The Family Foreclosure Foundation connects families affected by foreclosure with practical resource navigation, community partnerships, and possible recovery opportunities.">
<title>${escapeHtml(title)} | ${BRAND}</title>
<style>${CSS}</style>
</head>
<body>
<header class="header">
  <a class="brand" href="/" aria-label="The Family Foreclosure Foundation home">
    ${BRAND}
    <small>FAMILIES HELPING FAMILIES</small>
  </a>

  <nav aria-label="Main navigation">
    ${links.map(function(link) {
      return `<a href="${link[0]}">${link[1]}</a>`;
    }).join("")}
  </nav>
</header>

<main>
${body}
</main>

<footer>
  <div class="footer-grid">
    <div>
      <h3>${BRAND}</h3>
      <p>
        Bridging the gap between foreclosure and the possibility
        of returning to homeownership through family stabilization,
        resource navigation, and community partnerships.
      </p>
    </div>

    <div>
      <h3>Contact</h3>
      <p>
        1500 S. Dairy Ashford Rd., Suite 207<br>
        Houston, TX 77077
      </p>
      <p><a href="mailto:${EMAIL}">${EMAIL}</a></p>
      <p>IRS-recognized 501(c)(3) public charity — EIN 41-5341383</p>
      <p><a href="https://www.facebook.com/FamilyForeclosureFoundation" target="_blank" rel="noopener">Facebook — Family Foreclosure Foundation</a></p>
      <p><a href="/privacy.html">Privacy Policy</a></p>
    </div>
  </div>

  <p>
    Information on this website is general in nature. Services and
    eligibility depend on individual circumstances and resource
    availability. No outcome is guaranteed.
  </p>
  <p>
    <strong>Families Helping Families, Making Sure That No Family Is Left Behind, Because Every Family Is Somebody's Whole Entire World.</strong>
  </p>
</footer>
</body>
</html>`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    let path = decodeURIComponent(url.pathname);

    if (path !== "/" && path.endsWith("/")) {
      path = path.slice(0, -1);
    }

    if (path === "/index.html") {
      path = "/";
    }

    if (path === "/favicon.ico") {
      return new Response(null, { status: 204 });
    }

    const entry = pages[path];

    if (!entry) {
      return new Response(
        render(
          "Page Not Found",
          `
<section class="content center">
  <h1>Page Not Found</h1>
  <p>The page you requested could not be found.</p>
  <a class="btn gold" href="/">RETURN HOME</a>
</section>
`
        ),
        {
          status: 404,
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "no-store"
          }
        }
      );
    }

    return new Response(render(entry[0], entry[1]), {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=300",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      }
    });
  }
};
