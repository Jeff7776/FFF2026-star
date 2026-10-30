const BRAND = "The Family Foreclosure Foundation";
const EMAIL = "Info@TheFamilyForeclosureFoundation.Org";
const SITE = "https://thefamilyforeclosurefoundation.org";
const HERO = "https://raw.githubusercontent.com/Jeff7776/FFF2026-star/main/family_foreclosure_foundation_hero.jpg";

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
  position: relative;
  width: 100%;
  overflow: hidden;
  background: var(--navy);
  color: #fff;
  isolation: isolate;
}

.hero-photo {
  position: relative;
  width: 100%;
  min-width: 0;
  margin: 0;
  padding: 0;
  line-height: 0;
  background: var(--navy);
}

.hero-photo img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center center;
}

.hero-photo::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(4, 31, 52, .52) 0%,
    rgba(4, 31, 52, .08) 38%,
    rgba(4, 31, 52, .18) 62%,
    rgba(4, 31, 52, .82) 100%
  );
  pointer-events: none;
}

.hero-overlay {
  position: absolute;
  z-index: 2;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: clamp(10px, 2vw, 28px);
  padding:
    clamp(14px, 2.2vw, 36px)
    clamp(12px, 3vw, 48px)
    clamp(16px, 2.8vw, 42px);
  text-align: center;
  line-height: 1.15;
}

.hero-title-block {
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
}

.hero-title-block h1 {
  margin: 0;
  color: #fff;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.2rem, 4.3vw, 5.2rem);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: .015em;
  text-transform: uppercase;
  text-shadow: 0 2px 10px rgba(0, 0, 0, .8);
  overflow-wrap: anywhere;
}

.hero-line {
  width: 100%;
  margin-top: auto;
  padding-top: clamp(14px, 2vw, 30px);
}

.hero-line h2 {
  margin: 0;
  color: #ffe0a0;
  font-family: Georgia, "Times New Roman", serif;
  font-style: italic;
  font-weight: 700;
  font-size: clamp(1.45rem, 5.1vw, 5.5rem);
  line-height: 1.05;
  letter-spacing: -.025em;
  text-shadow: 0 3px 10px rgba(0, 0, 0, .8);
  overflow-wrap: anywhere;
}

.hero-tagline {
  max-width: 900px;
  margin: clamp(8px, 1vw, 18px) auto 0;
  color: #fff;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(.85rem, 2.1vw, 2rem);
  font-style: italic;
  font-weight: 700;
  line-height: 1.25;
  text-shadow: 0 2px 8px rgba(0, 0, 0, .85);
  overflow-wrap: anywhere;
}

.hero-support-line {
  height: 3px;
  width: min(62%, 760px);
  margin: clamp(8px, 1vw, 16px) auto 0;
  background: linear-gradient(
    90deg,
    transparent,
    var(--gold),
    transparent
  );
  border-radius: 3px;
}

@media (max-width: 600px) {
  .hero-overlay {
    padding: 12px 10px 14px;
    gap: 8px;
  }

  .hero-title-block h1 {
    font-size: clamp(1rem, 5vw, 1.65rem);
  }

  .hero-line h2 {
    font-size: clamp(1.2rem, 6vw, 2rem);
  }

  .hero-tagline {
    font-size: clamp(.75rem, 3.1vw, 1rem);
  }

  .hero-photo::after {
    background: linear-gradient(
      180deg,
      rgba(4, 31, 52, .65),
      rgba(4, 31, 52, .12) 45%,
      rgba(4, 31, 52, .82)
    );
  }
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
      src="${HERO}"
      alt="The Family Foreclosure Foundation — Leaving No Family Left Behind"
      fetchpriority="high"
    >
  </figure>
</section>

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
    Connect with the Foundation to explore resources and next steps.
  </p>
  <a class="btn gold" href="/apply.html">REQUEST ASSISTANCE</a>
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
    families rebuilding after foreclosure.
  </p>
</div>

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
  </div>

  <div class="notice">
    Services provided by outside organizations depend on their
    eligibility requirements, capacity, and availability. The
    Foundation does not guarantee placement or a particular outcome.
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
    or commercial foreclosure.
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
    aid organization for guidance.
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
    General information about foreclosure recovery and the
    Foundation's approach.
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
      financial education, and community referrals.
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
  <p>Helping families and individuals rebuild after foreclosure.</p>
</div>

<section class="content">
  <div class="card">
    <h3>Our Mission</h3>
    <p>
      The Family Foreclosure Foundation is dedicated to helping
      families and individuals who have experienced residential
      or commercial foreclosure. We believe stability can return
      with dignity and practical support.
    </p>
  </div>

  <div class="card">
    <h3>What We Do</h3>
    <p>
      We help connect families with emergency food and housing
      resources, pet shelter resources, job training and placement,
      financial education, second-chance housing information,
      and recovery guidance.
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
      and community partnerships. Any services offered by partner
      organizations remain subject to their own rules and availability.
    </p>
  </div>

  <div class="notice">
    Our work centers on family stabilization and resource
    navigation. We do not promise recovery of funds, housing
    placement, employment, or homeownership.
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
    use this form to tell us about your situation.
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

  <form class="form" id="contactForm">
    <fieldset>
      <legend>Send an Inquiry</legend>

      <div class="field">
        <label for="cname">Name *</label>
        <input id="cname" name="Name" required>
      </div>

      <div class="field">
        <label for="cemail">Email *</label>
        <input id="cemail" name="Email" type="email" required>
      </div>

      <div class="field">
        <label for="cmessage">Message *</label>
        <textarea id="cmessage" name="Message" required></textarea>
      </div>

      <button class="btn gold" type="submit">PREPARE EMAIL</button>
      <p id="contactStatus" role="status" aria-live="polite"></p>
    </fieldset>
  </form>
</section>

<script>
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = new FormData(this);

  const subject = encodeURIComponent(
    "Website Contact - " + data.get("Name")
  );

  const body = encodeURIComponent(
    "Name: " + data.get("Name") +
    "\nEmail: " + data.get("Email") +
    "\nMessage:\n" + data.get("Message")
  );

  document.getElementById("contactStatus").textContent =
    "Your email application should open so you can review and send your message.";

  window.location.href =
    "mailto:${EMAIL}?subject=" + subject + "&body=" + body;
});
</script>
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
    foreclosure. The Foundation connects families with community
    partners, corporate sponsors, major banks, and private businesses.
    Families receiving services are never asked to sponsor or pay
    for another family.
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
    <div class="card">
      <h3>Volunteer Your Skills</h3>
      <p>
        Offer administrative help, resource research, translation,
        outreach, job-readiness support, event assistance, or other
        skills that match your availability.
      </p>
    </div>

    <div class="card">
      <h3>Become a Community Sponsor</h3>
      <p>
        Community groups, companies, banks, retailers, and private
        businesses can explore support for emergency needs, housing
        stabilization, food access, employment readiness, and
        family rebuilding.
      </p>
    </div>

    <div class="card">
      <h3>Build the Bridge Back Home</h3>
      <p>
        As families regain stability, we encourage them to strengthen
        their own households and communities in ways they freely
        choose. Receiving help never depends on volunteering,
        donating, or repaying the Foundation.
      </p>
    </div>
  </div>

  <div class="notice">
    <strong>Free to families:</strong> The Foundation's
    resource-navigation support is provided at no cost to the
    clients we serve. Partner services, eligibility, and availability
    may vary. We do not promise a specific outcome.
  </div>

  <form class="form" id="volunteerForm">
    <fieldset>
      <legend>Volunteer or Sponsor Inquiry</legend>

      <div class="field">
        <label for="vname">Name *</label>
        <input id="vname" name="Name" required autocomplete="name">
      </div>

      <div class="field">
        <label for="vemail">Email *</label>
        <input
          id="vemail"
          name="Email"
          type="email"
          required
          autocomplete="email"
        >
      </div>

      <div class="field">
        <label for="vorg">Organization (if applicable)</label>
        <input id="vorg" name="Organization" autocomplete="organization">
      </div>

      <div class="field">
        <label for="vinterest">How would you like to help? *</label>
        <select id="vinterest" name="Interest" required>
          <option value="">Choose an option</option>
          <option>Volunteer time or skills</option>
          <option>Community or corporate sponsorship</option>
          <option>Bank or financial-institution partnership</option>
          <option>Food, housing, or emergency-needs support</option>
          <option>Employment, training, or education partnership</option>
          <option>Other community partnership</option>
        </select>
      </div>

      <div class="field">
        <label for="vmessage">Tell us a little about your offer *</label>
        <textarea
          id="vmessage"
          name="Message"
          required
          placeholder="Please do not include sensitive personal or financial information."
        ></textarea>
      </div>

      <button class="btn gold" type="submit">PREPARE EMAIL INQUIRY</button>
      <p id="volunteerStatus" role="status" aria-live="polite"></p>
    </fieldset>
  </form>

  <p class="center">
    Contact:
    <a href="mailto:${EMAIL}">${EMAIL}</a>
  </p>
</section>

<script>
document.getElementById("volunteerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = new FormData(this);

  const body = encodeURIComponent(
    Array.from(data.entries())
      .map(([key, value]) => key + ": " + value)
      .join("\n\n")
  );

  const subject = encodeURIComponent(
    "Volunteer or Community Sponsor Inquiry"
  );

  document.getElementById("volunteerStatus").textContent =
    "Your email application should open. Review it and press Send to submit your inquiry.";

  window.location.href =
    "mailto:${EMAIL}?subject=" + subject + "&body=" + body;
});
</script>
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
    ["/contact.html", "Contact"]
  ];

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#062f50">
<meta name="description" content="The Family Foreclosure Foundation connects families affected by foreclosure with practical resource navigation, community partnerships, and possible recovery information.">
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
      <p><a href="/privacy.html">Privacy Policy</a></p>
    </div>
  </div>

  <p>
    Information on this website is general in nature. Services and
    eligibility depend on individual circumstances and resource
    availability. No outcome is guaranteed.
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
