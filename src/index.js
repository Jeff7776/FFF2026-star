const BRAND = "The Family Foreclosure Foundation";
const EMAIL = "Info@TheFamilyForeclosureFoundation.Org";
const SITE = "https://thefamilyforeclosurefoundation.org";
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/1oD_TKkZQXiJA9vEZyaw5eTV2tk7K2CZJ26mB6SIgnyA/viewform";

const CSS = `
:root { --navy:#062f50; --gold:#f5bd32; --ink:#18334a; --muted:#5c6f80; --cream:#f6f8fa; --border:#dce5ec; }
* { box-sizing:border-box; }
html { scroll-behavior:smooth; }
body { margin:0; font-family:Arial,Helvetica,sans-serif; color:var(--ink); line-height:1.7; }
a { color:inherit; }
.header { padding:16px 5%; display:flex; justify-content:space-between; align-items:center; gap:20px; flex-wrap:wrap; border-bottom:1px solid var(--border); background:#fff; }
.brand { font-weight:900; color:var(--navy); text-decoration:none; font-size:15px; letter-spacing:.04em; }
.brand small { display:block; color:#9b7519; font-size:10px; letter-spacing:.16em; }
nav { display:flex; flex-wrap:wrap; gap:5px; }
nav a { font-size:12px; font-weight:700; text-decoration:none; padding:8px; border-radius:5px; color:var(--navy); }
nav a:hover, nav a:focus-visible { background:#eaf3f8; }
h1,h2,h3 { line-height:1.2; color:var(--navy); }
h1 { font-size:clamp(35px,5vw,55px); letter-spacing:-.035em; }
h2 { font-size:clamp(27px,3vw,40px); }
h3 { font-size:20px; }
.page-hero { padding:55px 6%; background:linear-gradient(135deg,#eef5f8,#fff); }
section.content { padding:50px 6%; }
.section-heading { max-width:850px; margin:0 auto 32px; text-align:center; }
.grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:20px; }
.card { min-width:0; padding:25px; background:#fff; border:1px solid var(--border); border-radius:12px; box-shadow:0 7px 25px #062f500a; }
.card p,.muted { color:var(--muted); }
.notice { background:#fff8e6; border-left:4px solid var(--gold); padding:18px; margin:25px 0; }
.btn { display:inline-block; padding:13px 19px; background:var(--navy); color:#fff; text-decoration:none; border-radius:6px; font-size:12px; font-weight:900; letter-spacing:.04em; border:1px solid transparent; cursor:pointer; }
.btn:hover,.btn:focus-visible { background:var(--gold); color:var(--navy); }
.btn.gold { background:var(--gold); color:var(--navy); }
.btn.gold:hover,.btn.gold:focus-visible { background:var(--navy); color:#fff; }
.buttons { display:flex; flex-wrap:wrap; gap:12px; justify-content:center; margin:25px 0; }
.form-panel { max-width:850px; margin:auto; padding:clamp(22px,5vw,42px); background:#fff; border:1px solid var(--border); border-radius:12px; box-shadow:0 7px 25px #062f500a; }
.frequency,.amounts { display:flex; flex-wrap:wrap; gap:10px; margin:12px 0 24px; }
.choice-button { padding:11px 18px; border:1px solid var(--navy); border-radius:6px; background:#fff; color:var(--navy); font:700 15px Arial,sans-serif; cursor:pointer; }
.choice-button[aria-pressed="true"] { background:var(--navy); color:#fff; box-shadow:inset 0 -3px var(--gold); }
.choice-button:hover,.choice-button:focus-visible { outline:3px solid #f5bd3277; outline-offset:2px; }
.field-label { display:block; margin:18px 0 6px; font-weight:700; color:var(--navy); }
select { width:100%; padding:12px; border:1px solid #bdccd7; border-radius:5px; font:inherit; color:var(--ink); background:#fff; }
.payment-links { margin-top:20px; }
.payment-links a { margin:0 8px 8px 0; }
.test-warning { padding:14px; border:2px solid #b45309; border-radius:8px; background:#fff7ed; color:#7c2d12; font-weight:700; }
footer { background:#041f34; color:#fff; padding:38px 6%; }
footer h3,footer a { color:#fff; }
.footer-grid { display:grid; grid-template-columns:2fr 1fr; gap:30px; }
footer p { color:#e0e9ef; }
footer a { overflow-wrap:anywhere; }
@media(max-width:800px) { .grid,.footer-grid { grid-template-columns:1fr; } .header { align-items:flex-start; } .choice-button { flex:1 1 40%; } }
@media(prefers-reduced-motion:reduce) { html { scroll-behavior:auto; } }
`;

const pages = {
  "/": ["A New Path Forward After Foreclosure", `
<section class="content">
  <div class="section-heading"><h1>A New Path Forward After Foreclosure</h1><p>Foreclosure is not the end of a family's story. The next chapter can begin with information, relationships, and support.</p></div>
  <div class="grid">
    <article class="card"><h3>Emergency Needs</h3><p>Connect with available food assistance, housing resources, and pet shelter resources during a difficult transition.</p></article>
    <article class="card"><h3>Employment &amp; Education</h3><p>Explore job training, employment placement, financial education, and workforce development resources.</p></article>
    <article class="card"><h3>Recovery Navigation</h3><p>Learn about possible surplus proceeds and other assets following foreclosure, and find qualified resources for next steps.</p></article>
  </div>
  <div class="buttons"><a class="btn gold" href="/volunteer.html">VOLUNTEER &amp; PARTNER</a><a class="btn" href="/donate.html">DONATE</a></div>
</section>`],
  "/programs.html": ["Programs & Services", `<div class="page-hero"><h1>Programs &amp; Services</h1><p>Practical resource navigation and community connections for families rebuilding after foreclosure.</p></div><section class="content"><div class="grid">${["Emergency Food","Housing Navigation","Pet Shelter Resources","Job Training & Placement","Financial Education","Surplus Asset Recovery","Family & Client Sponsorship — Sponsor the Client","Down Payment Program","Ongoing Support & Resources"].map(x=>`<article class="card"><h3>${x}</h3></article>`).join("")}</div><div class="notice">Services provided by outside organizations depend on their eligibility requirements, capacity, and availability. The Foundation does not guarantee placement or a particular outcome.</div></section>`],
  "/who-we-serve.html": ["Who We Serve", `<div class="page-hero"><h1>Who We Serve</h1><p>Individuals and families rebuilding after residential or commercial foreclosure.</p></div><section class="content"><div class="grid">${["Parents & Children","Veterans","Seniors","Displaced Families","Former Property Owners","Commercial Property Owners"].map(x=>`<article class="card"><h3>${x}</h3></article>`).join("")}</div><div class="notice"><strong>Post-foreclosure focus:</strong> We are not a pre-foreclosure prevention service. If you are currently facing foreclosure, contact a HUD-approved housing counselor or legal aid organization.</div></section>`],
  "/resources.html": ["Resources & FAQ", `<div class="page-hero"><h1>Resources &amp; Frequently Asked Questions</h1><p>General information about foreclosure recovery, sponsorship, and the Foundation's approach to family stabilization.</p></div><section class="content"><div class="notice">This website provides general information, not legal, tax, financial, or housing advice. Eligibility and resource availability vary. No particular outcome is guaranteed.</div></section>`],
  "/about.html": ["About the Foundation", `<div class="page-hero"><h1>About the Foundation</h1><p>Helping families and individuals rebuild after foreclosure through stabilization, recovery, and community partnership.</p></div><section class="content"><article class="card"><h2>Our Mission</h2><p>The Family Foreclosure Foundation is dedicated to helping families and individuals who have experienced residential or commercial foreclosure. We believe stability can return with dignity, practical support, and a realistic path toward homeownership where appropriate.</p><h2>How We Are Funded</h2><p>The Foundation seeks support through donations, grants, and community partnerships. Community Sponsorship supports the Foundation itself, while Family &amp; Client Sponsorship supports families served by the Foundation.</p></article></section>`],
  "/apply.html": ["Request Assistance", `<div class="page-hero"><h1>Request Assistance</h1><p>If foreclosure has affected your family or property, contact us to explore resource options, stabilization support, and next steps.</p></div><section class="content"><p>Contact <a href="mailto:${EMAIL}">${EMAIL}</a> to discuss your inquiry. Please do not email Social Security numbers, bank details, or other sensitive personal information.</p></section>`],
  "/contact.html": ["Contact the Foundation", `<div class="page-hero"><h1>Contact the Foundation</h1><p>Questions about the Foundation, our mission, or available resource navigation?</p><p><a href="mailto:${EMAIL}">${EMAIL}</a></p><p><a href="${SITE}">thefamilyforeclosurefoundation.org</a></p><p>1500 S. Dairy Ashford Rd., Suite 207, Houston, TX 77077</p></div>`],
  "/asset-recovery.html": ["Asset Recovery", `<div class="page-hero"><h1>Surplus Asset Recovery</h1><p>Learn about possible surplus proceeds or other recoverable funds following foreclosure.</p></div><section class="content"><article class="card"><h3>Protect Yourself</h3><p>Deadlines and eligibility vary. Verify the applicable process with the responsible court, title company, or attorney. This page is general information, not legal, tax, or financial advice. No recovery is promised or guaranteed.</p></article><p><a class="btn gold" href="/apply.html">REQUEST ASSISTANCE</a></p></section>`],
  "/volunteer.html": ["Volunteer & Community Sponsors", `
<div class="page-hero"><p class="eyebrow">FAMILIES HELPING FAMILIES</p><h1>Volunteer &amp; Community Sponsors</h1><p>Help build a stronger bridge for families rebuilding after foreclosure. The Foundation distinguishes clearly between support for the mission and support for the families served.</p></div>
<section class="content">
  <div class="section-heading"><h2>Stand Beside a Family. Strengthen a Community.</h2><p>Volunteers and community partners can help families take practical next steps with dignity, privacy, and encouragement.</p></div>
  <div class="grid">
    <article class="card" id="family-sponsorship"><h3>Family &amp; Client Sponsorship — Sponsor the Client</h3><p>Community partners, businesses, and donors may support the individuals and families served by the Foundation. This pathway focuses on direct family support, stabilization needs, and homeownership goals.</p></article>
    <article class="card" id="community-sponsorship"><h3>Community Sponsorship — Sponsor the Foundation</h3><p>Separate organizational giving supports The Family Foreclosure Foundation itself, including mission work, outreach, and organizational capacity.</p></article>
    <article class="card"><h3>Volunteer Your Skills</h3><p>Offer administrative help, resource research, translation, outreach, job-readiness support, event assistance, or other skills that match your availability.</p></article>
  </div>
  <div class="notice"><strong>Separate pathways:</strong> The Foundation keeps Community Sponsorship and Family &amp; Client Sponsorship distinct. Each opportunity has its own purpose, messaging, and inquiry process. No specific outcome, tax benefit, or guaranteed assistance is implied.</div>
  <div class="buttons"><a class="btn gold" href="${GOOGLE_FORM_URL}" target="_blank" rel="noopener">OPEN VOLUNTEER FORM</a></div>
  <p class="center">Contact: <a href="mailto:${EMAIL}">${EMAIL}</a></p>
</section>`],
  "/donate.html": ["Donate", `
<div class="page-hero"><p class="eyebrow">SUPPORT FAMILIES</p><h1>Help Families Find Their Footing After Losing Their Homes</h1>
<p>When a family loses a home to foreclosure, the emergency does not end when the headlines move on. Families still need a place to sleep, a way to get to work, and a clear path back to stable, affordable housing.</p>
<p>The Family Foreclosure Foundation provides coordinated help during that transition — not an uncoordinated effort.</p><p>Your gift helps families rebuild stability, and move toward affordable, sustainable homeownership again.</p><p>The Family Foreclosure Foundation is a 501(c)(3) public charity.</p></div>
<section class="content"><div class="form-panel">
  <div class="test-warning" role="alert">TEST MODE ONLY — These monthly Stripe links are for testing and are not live donation links. Do not use for real donations.</div>
  <label class="field-label">Gift frequency</label>
  <div class="frequency" role="group" aria-label="Gift frequency"><button class="choice-button" type="button" data-frequency="once" aria-pressed="true">One-time</button><button class="choice-button" type="button" data-frequency="monthly" aria-pressed="false">Monthly</button></div>
  <p id="frequencyNote" class="muted">One-time donation checkout links are not available yet.</p>
  <label class="field-label" for="giftCategory">Choose where your gift helps (optional)</label>
  <select id="giftCategory"><option>Where it is needed most</option><option>Bank partnerships and CRA opportunities</option><option>Affordable housing options</option><option>Employment training and placement</option><option>Financial education</option><option>Free legal referrals for asset recovery</option><option>Down payment assistance and coordinated support</option><option>Moving assistance</option><option>Credit counseling and repair</option><option>Crisis intervention counseling</option><option>Family stabilization</option></select>
  <div id="amountHeading" class="field-label">Choose an amount</div><div class="amounts" role="group" aria-labelledby="amountHeading"><button class="choice-button" type="button" data-amount="25" aria-pressed="true">$25</button><button class="choice-button" type="button" data-amount="50" aria-pressed="false">$50</button><button class="choice-button" type="button" data-amount="100" aria-pressed="false">$100</button><button class="choice-button" type="button" data-amount="250" aria-pressed="false">$250</button><button class="choice-button" type="button" data-amount="other" aria-pressed="false">Other amount</button></div>
  <p id="monthlyNote" class="muted" hidden>Suggested monthly starting point: $25/month. Monthly donors can cancel at any time.</p>
  <div id="checkoutAction" class="payment-links" aria-live="polite"></div>
  <p class="muted">Secure payment through Stripe. No payment details are stored on the Foundation website. Donor details are collected securely by Stripe at checkout.</p>
</div></section>
<section class="content"><div class="section-heading"><h2>Other Ways to Help</h2><p>Volunteer or partner: <a href="/volunteer.html">Volunteer &amp; Community Sponsors</a></p><p>Inquiries: <a href="mailto:info@thefamilyforeclosurefoundation.org">info@thefamilyforeclosurefoundation.org</a></p><p>Does your employer match donations? Many do — please check with yours.</p><p>Every family's circumstances are different. We make every effort to fulfill your request, but no one can guarantee a specific outcome from any donation.</p></div></section>
<script>
(function() {
  const monthlyLinks = {"25":"https://buy.stripe.com/test_cNidR84TwcYv20u0vUaAw00","50":"https://buy.stripe.com/test_eVq5kC71E9Mj5cG1zYaAw02","100":"https://buy.stripe.com/test_4gM5kC5XAf6DfRkfqOaAw01"};
  let frequency = "once";
  let amount = "25";
  const action = document.getElementById("checkoutAction");
  const freqNote = document.getElementById("frequencyNote");
  const monthlyNote = document.getElementById("monthlyNote");
  function update() {
    document.querySelectorAll("[data-frequency]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.frequency === frequency)));
    document.querySelectorAll("[data-amount]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.amount === amount)));
    monthlyNote.hidden = frequency !== "monthly";
    if (frequency === "once") {
      freqNote.hidden = false;
      freqNote.textContent = "One-time donation links are not available yet. No payment will be collected from this page in one-time mode.";
      action.innerHTML = "<p class=\"muted\">One-time Stripe links will be added after live payment links are provided.</p>";
      return;
    }
    freqNote.hidden = true;
    const link = monthlyLinks[amount];
    if (link) {
      action.innerHTML = "<p class=\"test-warning\">TEST CHECKOUT — No live donations. Continue only to test Stripe Checkout.</p><a class=\"btn gold\" href=\"" + link + "\" target=\"_blank\" rel=\"noopener\">Continue with $" + amount + " monthly test checkout</a>";
    } else {
      action.innerHTML = "<p class=\"muted\">A monthly Stripe link for this amount is not available yet. No payment will be collected.</p>";
    }
  }
  document.querySelectorAll("[data-frequency]").forEach(button => button.addEventListener("click", () => { frequency = button.dataset.frequency; update(); }));
  document.querySelectorAll("[data-amount]").forEach(button => button.addEventListener("click", () => { amount = button.dataset.amount; update(); }));
  update();
})();
</script>`],
  "/privacy.html": ["Privacy Policy", `<div class="page-hero"><p class="eyebrow">YOUR PRIVACY MATTERS</p><h1>Privacy Policy</h1><p>Information about how the Foundation intends to handle inquiries received through this website.</p></div><section class="content"><article class="card"><h3>Information and choices</h3><p>If you contact us, you may provide your name, email address, telephone number, property information, and details about your request. We use information to understand your inquiry and communicate with you. We do not sell personal information. Please do not send sensitive account numbers or personal identifiers.</p><p>Questions may be sent to <a href="mailto:${EMAIL}">${EMAIL}</a>.</p></article><div class="notice">This policy text should be reviewed against the Foundation's actual data handling practices before publication. It does not replace legal advice.</div></section>`]
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[character]));
}

function render(title, body) {
  const links = [["/","Home"],["/programs.html","Programs"],["/who-we-serve.html","Who We Serve"],["/resources.html","Resources & FAQ"],["/about.html","About"],["/asset-recovery.html","Asset Recovery"],["/volunteer.html","Volunteer & Sponsor"],["/donate.html","Donate"],["/apply.html","Request Assistance"],["/contact.html","Contact"]];
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#062f50"><meta name="description" content="The Family Foreclosure Foundation connects families affected by foreclosure with practical resource navigation, community partnerships, and possible recovery opportunities."><title>${escapeHtml(title)} | ${BRAND}</title><style>${CSS}</style></head><body>
<header class="header"><a class="brand" href="/" aria-label="The Family Foreclosure Foundation home">${BRAND}<small>FAMILIES HELPING FAMILIES</small></a><nav aria-label="Main navigation">${links.map(link=>`<a href="${link[0]}">${link[1]}</a>`).join("")}</nav></header>
<main>${body}</main><footer><div class="footer-grid"><div><h3>${BRAND}</h3><p>Bridging the gap between foreclosure and the possibility of returning to homeownership through family stabilization, resource navigation, and community partnerships.</p></div><div><h3>Contact</h3><p>1500 S. Dairy Ashford Rd., Suite 207<br>Houston, TX 77077</p><p><a href="mailto:${EMAIL}">${EMAIL}</a></p><p><a href="/privacy.html">Privacy Policy</a></p></div></div><p>Information on this website is general in nature. Services and eligibility depend on individual circumstances and resource availability. No outcome is guaranteed.</p></footer></body></html>`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    let path = decodeURIComponent(url.pathname);
    if (path !== "/" && path.endsWith("/")) path = path.slice(0, -1);
    if (path === "/index.html") path = "/";
    if (path === "/favicon.ico") return new Response(null, {status:204});
    const entry = pages[path];
    if (!entry) return new Response(render("Page Not Found", `<section class="content"><h1>Page Not Found</h1><p>The page you requested could not be found.</p><a class="btn gold" href="/">RETURN HOME</a></section>`), {status:404,headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store"}});
    return new Response(render(entry[0],entry[1]), {headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"public, max-age=300","X-Content-Type-Options":"nosniff","Referrer-Policy":"strict-origin-when-cross-origin"}});
  }
};
