
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
.hero-section{position:relative;overflow:hidden;background:#0c3659}
.hero-photo{position:relative;min-height:740px;background:#0d2d4c;display:flex;align-items:flex-end;overflow:hidden}
.hero-photo::before{content:"";position:absolute;inset:0;background-image:url("https://raw.githubusercontent.com/Jeff7776/FFF2026-star/main/family_foreclosure_foundation_hero.jpg");background-size:cover;background-position:center center;filter:saturate(1.1) contrast(1.04);}
.hero-photo::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg, rgba(8,36,54,0.38) 0%, rgba(7,37,55,0.18) 32%, rgba(8,39,62,0.62) 100%);}
.hero-title-wrap{position:absolute;left:50%;top:18px;transform:translateX(-50%);width:min(96%, 1700px);z-index:2;pointer-events:none}
.hero-title{font-size:clamp(3.8rem, 7vw, 13rem);line-height:0.86;font-weight:900;letter-spacing:-0.06em;text-align:center;color:rgba(255,255,255,0.22);text-shadow:0 0 28px rgba(255,255,255,.12);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.hero-banner{position:relative;z-index:2;width:100%;background:linear-gradient(90deg, rgba(6,67,102,0.95), rgba(12,98,140,0.9));padding:26px 4% 18px;border-top:4px solid #d9b35f;box-shadow:0 -6px 0 rgba(217,179,95,.35), inset 0 0 0 2px rgba(255,255,255,.12);display:grid;grid-template-columns:1.1fr 2.2fr 1.3fr;align-items:center;gap:18px;}
.hero-banner::before{content:"";position:absolute;left:0;right:0;top:0;height:18px;background:linear-gradient(90deg, transparent 0%, rgba(217,179,95,0.9) 15%, rgba(217,179,95,0.9) 85%, transparent 100%);opacity:.9}
.hero-badge{display:flex;align-items:center;gap:18px;justify-self:start;padding-left:10px;color:#f7f6f1;}
.star-mark{width:82px;height:82px;display:grid;place-items:center;border:3px solid rgba(255,255,255,.7);border-radius:50%;font-size:1.8rem;color:#f6c85d;background:rgba(12, 40, 59, 0.2);box-shadow:0 0 0 6px rgba(255,255,255,.04);}
.star-mark::before{content:"✦";display:block;transform:rotate(0deg);}
.badge-copy{display:flex;flex-direction:column;line-height:1.1;align-items:flex-start;}
.badge-copy .stars{font-size:1.1rem;letter-spacing:.18rem;color:#f5c65d;margin-bottom:5px}
.badge-copy .label{font-size:clamp(.82rem, 1vw, 1.2rem);font-weight:800;letter-spacing:.08em}
.badge-copy .year{font-size:clamp(2.2rem, 2.6vw, 3.6rem);font-weight:900;letter-spacing:-.08em;margin-top:8px;}
.hero-headline{font-size:clamp(2.4rem, 4vw, 6rem);line-height:0.95;font-weight:900;text-align:center;color:#fefefc;text-transform:none;letter-spacing:-.05em;margin:0;white-space:nowrap;}
.hero-tagline{font-family:Georgia, 'Times New Roman', serif;font-size:clamp(1.3rem, 2vw, 3rem);line-height:1.1;font-style:italic;color:#f4c864;text-align:right;font-weight:700;letter-spacing:-.03em;text-shadow:0 0 20px rgba(250,204,92,.25);}
.hero-tagline span{display:block;}
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
@media (max-width: 980px){
  .hero-photo{min-height:620px}
  .hero-banner{grid-template-columns:1fr;gap:10px;padding-top:34px;padding-bottom:20px;text-align:center}
  .hero-badge,.hero-tagline{justify-self:center;text-align:center;}
  .hero-headline{white-space:normal}
  .hero-tagline{font-size:clamp(1.5rem,4vw,2.5rem)}
}
@media (max-width: 760px){
  .hero-title{font-size:clamp(2.8rem, 11vw, 6rem)}
  .hero-banner{padding-left:18px;padding-right:18px}
  .hero-badge{flex-direction:column;padding-left:0}
  .hero-headline{font-size:clamp(2rem,8vw,3.6rem)}
}
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
<section class="hero-section">
  <div class="hero-photo">
    <div class="hero-title-wrap">
      <div class="hero-title">THE FAMILY FORECLOSURE FOUNDATION</div>
    </div>
    <div class="hero-banner">
      <div class="hero-badge" aria-label="Four star charity navigator 2026">
        <div class="star-mark" aria-hidden="true"></div>
        <div class="badge-copy">
          <div class="stars">★★★★★</div>
          <div class="label">4 STAR</div>
          <div class="label">CHARITY NAVIGATOR</div>
          <div class="year">2026</div>
        </div>
      </div>

      <h1 class="hero-headline">Leaving No Family Behind</h1>

      <div class="hero-tagline">
        <span>Because Every Family Is Somebody's</span>
        <span>Whole Entire World!!!</span>
      </div>
    </div>
  </div>
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
  <section><h2>What if I believe a foreclosure sale created surplus proceeds?</h2><p>Check the relevant county court, trustee, tax authority or other official agency. Rules and deadlines vary. Confirm information through official channels.</p></section>
  <section><h2>Is there a fee to claim surplus proceeds?</h2><p>Rules differ by jurisdiction and claim type. Confirm official requirements and carefully review any agreement before paying a third party.</p></section>
  </main>`],

  "/about.html": ["About Us", `
  <main><h1>About The Family Foreclosure Foundation</h1>
  <p>We believe a foreclosure should not define a family's future. Our work focuses on family stabilization, resource navigation and connections to community partners that may help families rebuild.</p>
  <p>Our approach emphasizes dignity, transparency and practical pathways toward stability.</p>
  <div class="notice">Our goal is to help families understand potential options and connect with appropriate resources. We do not replace attorneys, financial advisers, government agencies or housing counselors.</div>
  </main>`],

  "/asset-recovery.html": ["Surplus Asset Recovery", `
  <main><h1>Surplus Asset Recovery Navigation</h1>
  <p>In some circumstances, a foreclosure or tax sale may generate surplus funds after required debts and costs are addressed. Whether funds exist and who may claim them depends on the specific circumstances and jurisdiction.</p>
  <section><h2>Possible next steps</h2>
  <ol><li>Identify the property and the relevant county or agency.</li><li>Check official court, trustee or tax-sale records.</li><li>Ask the responsible agency about claim procedures and deadlines.</li></ol>
  </section>
  <div class="notice"><strong>Protect yourself:</strong> Beware of guaranteed-recovery promises and pressure to sign contracts. The Foundation does not guarantee that surplus funds exist or that a claim will be approved.</div>
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
