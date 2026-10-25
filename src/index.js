
const SITE_NAME = "The Family Foreclosure Foundation";
const CONTACT_EMAIL = "Info@thefamilyforeclosurefoundation.org";
const SITE_URL = "https://thefamilyforeclosurefoundation.org";

const CSS = `
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:Arial,Helvetica,sans-serif;color:#18334a;line-height:1.65}
a{color:inherit}
header{background:#062f50;color:white;padding:18px 6%;display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap}
.brand{font-size:20px;font-weight:800;text-decoration:none}
nav{display:flex;gap:15px;flex-wrap:wrap}
nav a{color:white;text-decoration:none;font-size:14px}
.hero{background:linear-gradient(120deg,#062f50,#07588a);color:white;padding:80px 7%;position:relative;overflow:hidden}
.hero h1{font-size:clamp(34px,5vw,58px);line-height:1.1;max-width:850px;margin:0 0 20px}
.hero p{font-size:19px;max-width:780px}
.watermark{position:absolute;top:12px;left:0;width:100%;text-align:center;color:#fff;opacity:.28;font-size:12px;letter-spacing:3px;font-weight:bold;pointer-events:none}
.button{display:inline-block;background:#f5bd32;color:#062f50;padding:13px 21px;border-radius:7px;font-weight:bold;text-decoration:none;margin:8px 8px 0 0}
main{max-width:1150px;margin:auto;padding:45px 6%}
section{margin-bottom:35px}
h2{color:#062f50;font-size:30px;line-height:1.2}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:20px}
.card{padding:24px;border:1px solid #dce5ec;border-radius:14px;box-shadow:0 8px 24px #062f5010;background:white}
.card h3{color:#07588a;margin-top:0}
.notice{background:#f6f8fa;border-left:4px solid #16a6b4;padding:18px}
footer{background:#062f50;color:white;padding:30px 6%;text-align:center}
footer a{color:white}
.email{font-weight:bold}
@media(max-width:600px){header{align-items:flex-start}.hero{padding:65px 6%}nav{gap:10px}}
`;

const NAV = [
  ["/", "Home"],
  ["/programs.html", "Programs"],
  ["/who-we-serve.html", "Who We Serve"],
  ["/resources.html", "Resources"],
  ["/about.html", "About"],
  ["/asset-recovery.html", "Asset Recovery"],
  ["/apply.html", "Apply"],
  ["/contact.html", "Contact"]
];

function layout(title, content) {
  const nav = NAV.map(([url, label]) =>
    `<a href="${url}">${label}</a>`
  ).join("");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title} | ${SITE_NAME}</title>
<meta name="description" content="Family stabilization, foreclosure recovery navigation, housing resources, financial education, job training and community support.">
<style>${CSS}</style>
</head>
<body>
<header>
<a class="brand" href="/">${SITE_NAME}</a>
<nav aria-label="Main navigation">${nav}</nav>
</header>
${content}
<footer>
<p><strong>${SITE_NAME}</strong></p>
<p>Because Every Family Is Somebody's Whole Entire World!!</p>
<p>1500 S. Dairy Ashford Rd., Suite 207, Houston, TX 77077</p>
<p>Email: <a class="email" href="mailto:info@thefamilyforeclosurefoundation.org">${CONTACT_EMAIL}</a></p>
<p><a href="/privacy.html">Privacy Policy</a> · <a href="/contact.html">Contact</a></p>
<p>© ${new Date().getFullYear()} ${SITE_NAME}</p>
</footer>
</body>
</html>`;
}

const HOME = `
<section class="hero">
<div class="watermark">THE FAMILY FORECLOSURE FOUNDATION · FFF</div>
<p>FAMILIES HELPING FAMILIES</p>
<h1>A New Path Forward After Foreclosure</h1>
<p>When a family faces foreclosure, the need is bigger than housing alone. We help connect families with resources, guidance and community partnerships that support stability and the possibility of returning to homeownership.</p>
<a class="button" href="/programs.html">Explore Our Programs</a>
<a class="button" href="/apply.html">Request Assistance</a>
</section>
<main>
<section>
<h2>Family stabilization is our hallmark.</h2>
<p>Our mission is to help bridge the gap between foreclosure and the possibility of returning to homeownership through practical support, community partnerships and connections to appropriate resources.</p>
</section>
<section class="cards">
<article class="card"><h3>Housing & Emergency Support</h3><p>Connect with housing resources, emergency food support and appropriate community services.</p></article>
<article class="card"><h3>Financial Education</h3><p>Find guidance and educational resources to help families understand their options and plan their next steps.</p></article>
<article class="card"><h3>Jobs & Training</h3><p>Explore job training and employment connections that can help strengthen household stability.</p></article>
<article class="card"><h3>Surplus Asset Recovery</h3><p>Learn about possible surplus proceeds and how to locate official information about a claim.</p></article>
</section>
<section class="notice">
<strong>Important:</strong> Assistance and referrals depend on eligibility, availability and partner programs. We do not guarantee housing, financial recovery or legal outcomes.
</section>
</main>`;

const PAGE_CONTENT = {
  "/": ["Home", HOME],

  "/index.html": ["Home", HOME],

  "/programs.html": ["Programs & Services", `
  <main><h1>Programs & Services</h1>
  <p>We help families explore support and community connections following foreclosure or housing instability.</p>
  <div class="cards">
  <article class="card"><h3>Emergency Resources</h3><p>Connections to food, housing and other available community support.</p></article>
  <article class="card"><h3>Financial Education</h3><p>Educational resources to help families make informed financial decisions.</p></article>
  <article class="card"><h3>Employment Support</h3><p>Connections to job training and employment resources.</p></article>
  <article class="card"><h3>Asset Recovery Navigation</h3><p>Information about investigating possible surplus proceeds through official channels.</p></article>
  <article class="card"><h3>Family Stabilization</h3><p>Resource navigation and referrals based on each family's circumstances.</p></article>
  <article class="card"><h3>Community Partnerships</h3><p>Collaboration with organizations that serve families and communities.</p></article>
  </div><p><a class="button" href="/apply.html">Request Assistance</a></p></main>`],

  "/who-we-serve.html": ["Who We Serve", `
  <main><h1>Who We Serve</h1>
  <p>We aim to help families navigating foreclosure, housing instability and the difficult transition that can follow losing a home.</p>
  <div class="cards">
  <article class="card"><h3>Seniors</h3><p>Resource navigation for older adults facing housing or financial challenges.</p></article>
  <article class="card"><h3>Veterans</h3><p>Connections to relevant veteran-serving and housing resources.</p></article>
  <article class="card"><h3>Low-to-Moderate-Income Families</h3><p>Information about community support and available assistance programs.</p></article>
  <article class="card"><h3>Families Affected by Foreclosure</h3><p>Guidance toward possible next steps, resources and recovery options.</p></article>
  </div></main>`],

  "/resources.html": ["Resources & FAQ", `
  <main><h1>Resources & Frequently Asked Questions</h1>
  <section><h2>Where should I start?</h2><p>Identify your most urgent needs, keep relevant paperwork organized and contact official agencies or qualified professionals when needed.</p></section>
  <section><h2>Can the Foundation guarantee assistance?</h2><p>No. Resources, referrals and eligibility vary by program and provider.</p></section>
  <section><h2>What if I believe a foreclosure sale created surplus proceeds?</h2><p>Check the relevant county court, trustee, tax authority or other official agency. Rules and deadlines vary. Consider consulting a qualified attorney.</p></section>
  <section><h2>Is there a fee to claim surplus proceeds?</h2><p>Rules differ by jurisdiction and claim type. Confirm official requirements and carefully review any agreement before paying a third party.</p></section>
  </main>`],

  "/about.html": ["About Us", `
  <main><h1>About The Family Foreclosure Foundation</h1>
  <p>We believe a foreclosure should not define a family's future. Our work focuses on family stabilization, resource navigation and connections to community partners that may help families rebuild.</p>
  <p>Our approach emphasizes dignity, transparency and practical pathways toward stability.</p>
  <div class="notice">Our goal is to help families understand potential options and connect with appropriate resources. We do not replace attorneys, financial advisers, government agencies or housing providers.</div>
  </main>`],

  "/asset-recovery.html": ["Surplus Asset Recovery", `
  <main><h1>Surplus Asset Recovery Navigation</h1>
  <p>In some circumstances, a foreclosure or tax sale may generate surplus funds after required debts and costs are addressed. Whether funds exist and who may claim them depends on the specific case and applicable law.</p>
  <section><h2>Possible next steps</h2>
  <ol><li>Identify the property and the relevant county or agency.</li><li>Check official court, trustee or tax-sale records.</li><li>Ask the responsible agency about claim procedures and deadlines.</li><li>Keep copies of notices and documents.</li><li>Seek qualified legal advice when ownership, priority or deadlines are unclear.</li></ol>
  </section>
  <div class="notice"><strong>Protect yourself:</strong> Beware of guaranteed-recovery promises and pressure to sign contracts. The Foundation does not guarantee that surplus funds exist or that any claim will succeed.</div>
  <p><a class="button" href="/apply.html">Ask About Resource Navigation</a></p>
  </main>`],

  "/apply.html": ["Request Assistance", `
  <main><h1>Request Assistance or Resource Navigation</h1>
  <p>To ask about possible resources, email us using the address below. Please do not send Social Security numbers, bank details, passwords or other sensitive personal information in an initial email.</p>
  <p><a class="button" href="mailto:info@thefamilyforeclosurefoundation.org?subject=Resource%20Navigation%20Inquiry">Email the Foundation</a></p>
  <p>Email: <strong>${CONTACT_EMAIL}</strong></p>
  <div class="notice">Sending an inquiry does not guarantee assistance, create an attorney-client relationship or establish eligibility for a program.</div>
  </main>`],

  "/contact.html": ["Contact Us", `
  <main><h1>Contact Us</h1>
  <p>For general questions and resource-navigation inquiries, contact us by email.</p>
  <p><a class="button" href="mailto:info@thefamilyforeclosurefoundation.org">Email the Foundation</a></p>
  <p><strong>${CONTACT_EMAIL}</strong></p>
  <p>1500 S. Dairy Ashford Rd., Suite 207, Houston, TX 77077</p>
  </main>`],

  "/privacy.html": ["Privacy Policy", `
  <main><h1>Privacy Policy</h1>
  <p>This page provides general information about privacy practices and should be reviewed for legal compliance before publication.</p>
  <h2>Information you share</h2><p>If you email us, we may receive the information you include in your message.</p>
  <h2>How information may be used</h2><p>Information may be used to respond to inquiries and coordinate requested resource navigation.</p>
  <h2>Protect your information</h2><p>Please do not email passwords, full payment-card details or unnecessary sensitive personal information.</p>
  <h2>Contact</h2><p>${CONTACT_EMAIL}</p>
  </main>`]
};

const NOT_FOUND = `
<main><h1>Page Not Found</h1>
<p>We couldn't find that page. Please return to the home page or use the site navigation.</p>
<a class="button" href="/">Return Home</a></main>`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    let path = url.pathname;

    if (path !== "/" && path.endsWith("/")) {
      path = path.slice(0, -1);
    }

    let entry = PAGE_CONTENT[path];

    if (!entry && !path.endsWith(".html")) {
      entry = PAGE_CONTENT[path + ".html"];
    }

    if (entry) {
      return new Response(layout(entry[0], entry[1]), {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "public, max-age=300"
        }
      });
    }

    return new Response(layout("Page Not Found", NOT_FOUND), {
      status: 404,
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
};
