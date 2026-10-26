const BRAND = "The Family Foreclosure Foundation";
const EMAIL = "Info@TheFamilyForeclosureFoundation.Org";
const SITE = "https://thefamilyforeclosurefoundation.org";
const HERO = "https://raw.githubusercontent.com/Jeff7776/FFF2026-star/main/family_foreclosure_foundation_hero.jpg";

const CSS = `
:root{--navy:#062f50;--blue:#07588a;--gold:#f5bd32;--teal:#16a6b4;--ink:#18334a;--muted:#5c6f80;--cream:#f6f8fa;--border:#dce5ec}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:Arial,Helvetica,sans-serif;color:var(--ink);line-height:1.7}
a{color:inherit}
.header{padding:16px 5%;display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;border-bottom:1px solid var(--border);background:#fff}
.brand{font-weight:900;color:var(--navy);text-decoration:none;font-size:15px;letter-spacing:.04em}
.brand small{display:block;color:#9b7519;font-size:10px;letter-spacing:.16em}
nav{display:flex;flex-wrap:wrap;gap:5px}
nav a{font-size:12px;font-weight:700;text-decoration:none;padding:8px;border-radius:5px;color:var(--navy)}
nav a:hover{background:#eaf3f8}

.hero-scene{
 position:relative;overflow:hidden;background:#0a3b60;
 min-height:760px;
}
.hero-scene::before{
 content:"";position:absolute;inset:0;
 background-image:url("https://raw.githubusercontent.com/Jeff7776/FFF2026-star/main/family_foreclosure_foundation_hero.jpg");
 background-size:cover;background-position:center center;filter:saturate(1.05) contrast(1.02);
}
.hero-scene::after{
 content:"";position:absolute;inset:0;
 background:linear-gradient(180deg, rgba(9,36,52,0.15) 0%, rgba(9,36,52,0.10) 28%, rgba(9,36,52,0.15) 100%);
}
.hero-inner{position:relative;z-index:1;padding:18px 2% 0}
.hero-top{display:grid;grid-template-columns:180px 1fr 220px;align-items:center;gap:18px;padding:0 1%;}
.house-mark{
 width:150px;height:110px;justify-self:flex-start;position:relative;margin-left:12px;
 border:4px solid rgba(255,255,255,.9);border-radius:18px 18px 26px 26px;background:rgba(6,47,80,.72);
 box-shadow: 0 0 0 4px rgba(14,87,133,.75), 0 10px 20px rgba(5,20,32,.35);
}
.house-mark::before{
 content:"";position:absolute;left:50%;top:-26px;transform:translateX(-50%);width:120px;height:64px;
 background:transparent;border-left:6px solid rgba(255,255,255,.9);border-top:6px solid rgba(255,255,255,.9);
 border-radius:12px 12px 0 0;transform:translateX(-50%) rotate(-45deg);clip-path:polygon(50% 0%, 100% 100%, 0% 100%);
}
.house-mark::after{
 content:"";position:absolute;left:50%;top:48%;transform:translate(-50%,-50%);width:82px;height:60px;
 border:4px solid rgba(255,255,255,.9);border-top:0;border-radius:10px;background:rgba(255,255,255,.05);
}
.house-mark .roof-line{position:absolute;left:50%;top:12px;transform:translateX(-50%);width:118px;height:32px;border-bottom:4px solid rgba(255,255,255,.8);border-radius:0 0 20px 20px;}
.house-mark .people{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);display:flex;gap:10px;align-items:flex-end}
.house-mark .people span{display:block;width:18px;height:18px;border-radius:50%;background:rgba(255,255,255,.9);box-shadow:0 0 0 2px rgba(6,47,80,.65)}
.house-mark .people span:nth-child(2){height:24px}
.house-mark .people span:nth-child(3){height:20px}
.hero-title-block{text-align:center;display:flex;flex-direction:column;align-items:center;gap:8px;}
.hero-title-block h1{
 margin:0;color:#fff;font-size:clamp(2.8rem, 4vw, 7rem);font-weight:900;line-height:.95;letter-spacing:-0.07em;font-family:Georgia, 'Times New Roman', serif;
 text-transform:uppercase;text-shadow:0 5px 18px rgba(0,0,0,.2),0 0 18px rgba(255,255,255,.12);white-space:nowrap;
}
.hero-line{display:flex;align-items:center;justify-content:center;gap:18px;width:min(100%, 920px);}
.hero-line .gold-rule{height:4px;flex:1;background:linear-gradient(90deg, rgba(245,189,50,0.15), rgba(245,189,50,0.95), rgba(245,189,50,0.15));border-radius:999px;}
.hero-line h2{
 margin:0;color:#ffffff;font-size:clamp(2rem, 3vw, 4rem);font-weight:700;letter-spacing:-0.04em;line-height:1.1;font-family:Georgia, 'Times New Roman', serif;
 text-shadow:0 5px 16px rgba(0,0,0,.18);
}
.rating-badge{
 justify-self:end;display:flex;flex-direction:column;align-items:center;gap:8px;
 width:175px;padding:16px 10px 12px;border-radius:16px;background:rgba(14,83,123,.9);border:3px solid rgba(255,255,255,.65);
 box-shadow:0 12px 25px rgba(0,0,0,.12);
}
.rating-badge .star-badge{
 position:relative;width:74px;height:74px;border-radius:50%;
 background:rgba(255,255,255,.10);border:3px solid rgba(255,255,255,.85);
 display:grid;place-items:center;color:#f5d465;font-size:2rem;
}
.rating-badge .star-badge::before{content:"✦";display:block;}
.rating-badge .badge-text{color:#fff;text-align:center;line-height:1.1;}
.rating-badge .badge-text .small{display:block;font-size:0.75rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;}
.rating-badge .badge-text .large{display:block;font-size:0.66rem;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;}
.rating-badge .badge-text .year{display:block;font-size:1.2rem;font-weight:900;letter-spacing:-0.05em;margin-top:4px;}
.feature-strip{
 position:relative;z-index:1;margin-top:20px;border-top:4px solid rgba(245,189,50,.9);background:linear-gradient(90deg, rgba(5,45,68,.94), rgba(7,90,138,.95), rgba(5,45,68,.9));
 display:grid;grid-template-columns:repeat(5, minmax(160px,1fr));
 align-items:center;gap:0;
 box-shadow:inset 0 0 0 2px rgba(255,255,255,.12);
}
.feature-strip .item{display:flex;align-items:center;justify-content:center;gap:12px;min-height:96px;padding:14px 16px;border-right:1px solid rgba(255,255,255,.18);color:#fff;text-transform:uppercase;font-weight:900;letter-spacing:.04em;}
.feature-strip .item:last-child{border-right:none}
.feature-strip .item .icon{width:54px;height:54px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.3);font-size:1.7rem;}
.feature-strip .item .text{font-size:0.72rem;line-height:1.2;display:flex;flex-direction:column;}

.eyebrow{font-size:11px;font-weight:900;letter-spacing:.15em;color:#947016;text-transform:uppercase}
h1,h2,h3{line-height:1.2;color:var(--navy)}
h1{font-size:clamp(36px,5vw,61px);letter-spacing:-.04em;margin:16px 0}
h2{font-size:clamp(27px,3vw,40px);letter-spacing:-.025em}
h3{font-size:20px}
.hero p,.intro{font-size:17px;color:var(--muted)}
.hero-photo{position:relative;min-width:0}
.hero-photo img{width:100%;height:auto;display:block;border-radius:15px;object-fit:contain;object-position:center center;box-shadow:0 18px 45px #062f5025;background:var(--navy)}
.watermark{position:absolute;top:0;left:0;right:0;padding:12px;background:#062f5055;color:#fff;text-align:center;font-size:11px;font-weight:900;letter-spacing:.12em;text-shadow:0 1px 4px #000}
.buttons{display:flex;flex-wrap:wrap;gap:12px;margin:25px 0}
.btn{display:inline-block;padding:13px 19px;background:var(--navy);color:white;text-decoration:none;border-radius:6px;font-size:12px;font-weight:900;letter-spacing:.04em}
.btn.gold{background:var(--gold);color:var(--navy)}
.btn.outline{background:#fff;border:1px solid #c5d3de;color:var(--navy)}
section.content{padding:55px 6%}
.center{text-align:center}
.section-heading{max-width:850px;margin:0 auto 32px;text-align:center}
.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}
.card{padding:25px;background:#fff;border:1px solid var(--border);border-radius:12px;box-shadow:0 7px 25px #062f500a}
.card p{color:var(--muted)}
.soft{background:var(--cream)}
.callout{padding:48px 6%;text-align:center;background:var(--navy);color:white}
.callout h2,.callout p{color:white}
.page-hero{padding:55px 6%;background:linear-gradient(135deg,#eef5f8,#fff)}
.page-hero h1{font-size:clamp(35px,4vw,52px)}
.faq{padding:20px 0;border-bottom:1px solid var(--border)}
.faq h3{margin-bottom:8px}
.notice{background:#fff8e6;border-left:4px solid var(--gold);padding:18px;margin:25px 0}
.form{max-width:850px;margin:auto}
.form fieldset{border:1px solid var(--border);border-radius:10px;margin:25px 0;padding:24px}
.form legend{color:var(--navy);font-weight:900;padding:0 8px}
.field{margin:16px 0}
.field label{display:block;font-weight:700;margin-bottom:6px}
.field input,.field select,.field textarea{width:100%;padding:12px;border:1px solid #bdccd7;border-radius:5px;font:inherit}
.field textarea{min-height:100px}
.field .choice{display:block;font-weight:400;margin:7px 0}
.field .choice input{width:auto;margin-right:8px}
footer{background:#041f34;color:white;padding:38px 6%}
footer h3,footer a{color:white}
.footer-grid{display:grid;grid-template-columns:2fr 1fr;gap:30px}
footer p{color:#e0e9ef}
footer a{overflow-wrap:anywhere}
@media(max-width:1100px){.hero-top{grid-template-columns:1fr;justify-items:center}.rating-badge{justify-self:center}.hero-title-block h1{white-space:normal}.feature-strip{grid-template-columns:repeat(2, minmax(160px,1fr));}.feature-strip .item:nth-child(2n){border-right:none}}
@media(max-width:800px){.hero-scene{min-height:620px}.hero{grid-template-columns:1fr;padding:35px 5%;gap:22px}.hero-photo{grid-row:1}.grid{grid-template-columns:1fr}.header{align-items:flex-start}.footer-grid{grid-template-columns:1fr}section.content{padding:38px 5%}nav a{padding:7px;font-size:11px}.feature-strip{grid-template-columns:1fr}.feature-strip .item{border-right:none;border-bottom:1px solid rgba(255,255,255,.12)}}
`;

const pages = {
"/": ["A New Path Forward After Foreclosure", `
<section class="hero-scene">
  <div class="hero-inner">
    <div class="hero-top">
      <div class="house-mark" aria-label="The Family Foreclosure Foundation home icon">
        <div class="roof-line"></div>
        <div class="people"><span></span><span></span><span></span></div>
      </div>
      <div class="hero-title-block">
        <h1>THE FAMILY FORECLOSURE FOUNDATION</h1>
        <div class="hero-line">
          <span class="gold-rule"></span>
          <h2>Leaving No Family Left Behind.</h2>
          <span class="gold-rule"></span>
        </div>
      </div>
      <div class="rating-badge" aria-label="Four star charity navigator 2026">
        <div class="star-badge" aria-hidden="true"></div>
        <div class="badge-text">
          <span class="small">Charity</span>
          <span class="large">Navigator</span>
          <span class="small">Four Star</span>
          <span class="year">Candid. 2026</span>
        </div>
      </div>
    </div>
  </div>
  <div class="feature-strip" aria-label="Foundation service highlights">
    <div class="item"><div class="icon">🏠</div><div class="text"><span>Housing</span><span>Stability</span></div></div>
    <div class="item"><div class="icon">🍽️</div><div class="text"><span>Food</span><span>Access</span></div></div>
    <div class="item"><div class="icon">🏡</div><div class="text"><span>New Home</span><span>Development</span></div></div>
    <div class="item"><div class="icon">🤝</div><div class="text"><span>Community</span><span>Partnerships</span></div></div>
    <div class="item"><div class="icon">🤲</div><div class="text"><span>Volunteer &amp;</span><span>Sponsor</span></div></div>
  </div>
</section>
<main>
<section class="content soft">
<div class="section-heading"><p class="eyebrow">OUR MISSION</p><h2>Helping Families Rebuild Stability</h2><p>Foreclosure is not the end of a family's story. The next chapter can begin with information, support, and the right community connections.</p></div>
<div class="grid">
<div class="card"><h3>Emergency Needs</h3><p>Connect with available food assistance, housing resources, and pet shelter resources during a difficult transition.</p></div>
<div class="card"><h3>Employment & Education</h3><p>Explore job training, employment placement, financial education, and workforce development resources.</p></div>
<div class="card"><h3>Recovery Navigation</h3><p>Learn about possible surplus proceeds and other assets following foreclosure, and find qualified resources for next steps.</p></div>
</div>
</section>
<section class="content"><div class="section-heading"><p class="eyebrow">WHO WE SERVE</p><h2>Every Family Deserves a Path Forward</h2><p>We focus on individuals and families who have already experienced residential or commercial foreclosure.</p></div><div class="grid">
<div class="card"><h3>Families With Children</h3><p>Parents navigating foreclosure who need help exploring stability, food, housing, and safe places for their children.</p></div>
<div class="card"><h3>Veterans & Seniors</h3><p>Veterans, older adults, and their families seeking appropriate housing, employment, and community resources.</p></div>
<div class="card"><h3>Displaced Individuals</h3><p>Former property owners, family members, and qualifying individuals looking for practical next steps after foreclosure.</p></div>
</div></section>
<section class="callout"><p class="eyebrow">FAMILIES HELPING FAMILIES</p><h2>Together, We Can Bridge the Gap</h2><p>Connect with the Foundation to explore resources and next steps.</p><a class="btn gold" href="/contact.html">CONTACT THE FOUNDATION</a></section>
</main>`],
"/programs.html": ["Programs & Services", `
<div class="page-hero"><p class="eyebrow">HOW WE HELP</p><h1>Programs & Services</h1><p>Practical resource navigation and community connections for families rebuilding after foreclosure.</p></div>
<section class="content"><div class="grid">
<div class="card"><h3>Emergency Food</h3><p>Connections to food assistance and community programs where available.</p></div>
<div class="card"><h3>Housing Navigation</h3><p>Explore available housing resources, second-chance housing information, and appropriate referrals.</p></div>
<div class="card"><h3>Pet Shelter Resources</h3><p>Help identifying possible community resources for pets during housing transitions.</p></div>
<div class="card"><h3>Job Training & Placement</h3><p>Explore employment services, career development, job training, and placement resources.</p></div>
<div class="card"><h3>Financial Education</h3><p>Connections to budgeting education, financial literacy, and homeownership readiness information.</p></div>
<div class="card"><h3>Surplus Asset Recovery</h3><p>Guidance on researching potential surplus proceeds after foreclosure and connecting with qualified professionals.</p></div>
</div><div class="notice">Services provided by outside organizations depend on their eligibility requirements, capacity, and availability. The Foundation does not guarantee placement or a particular outcome.</div><div class="center"><a class="btn gold" href="/apply.html">REQUEST ASSISTANCE</a></div></section>
`],
"/who-we-serve.html": ["Who We Serve", `
<div class="page-hero"><p class="eyebrow">OUR COMMUNITY</p><h1>Who We Serve</h1><p>Individuals and families working to rebuild after residential or commercial foreclosure.</p></div>
<section class="content"><div class="grid">
<div class="card"><h3>Parents & Children</h3><p>Families seeking resources for food, safe housing, and family stability following foreclosure.</p></div>
<div class="card"><h3>Veterans</h3><p>Veterans and their families exploring housing, employment, benefits navigation, and community support resources.</p></div>
<div class="card"><h3>Seniors</h3><p>Older adults who need help identifying appropriate support services and practical next steps.</p></div>
<div class="card"><h3>Displaced Families</h3><p>Households adjusting to a change in housing and seeking connections to available assistance.</p></div>
<div class="card"><h3>Former Property Owners</h3><p>Individuals researching possible surplus proceeds or other assets connected to a completed foreclosure.</p></div>
<div class="card"><h3>Commercial Property Owners</h3><p>Former owners of commercial properties seeking information about possible recovery options and qualified referrals.</p></div>
</div><div class="notice"><strong>Post-foreclosure focus:</strong> We are not a pre-foreclosure prevention service. If you are currently facing foreclosure, contact a HUD-approved housing counselor or a qualified foreclosure prevention resource.</div></section>
`],
"/resources.html": ["Resources & FAQ", `
<div class="page-hero"><p class="eyebrow">RESOURCES & FAQ</p><h1>Resources & Frequently Asked Questions</h1><p>General information about foreclosure recovery and the Foundation's approach.</p></div>
<section class="content">
<div class="faq"><h3>What is the Family Foreclosure Foundation?</h3><p>We connect families and individuals affected by residential or commercial foreclosure with information, community resources, and appropriate referrals.</p></div>
<div class="faq"><h3>Do you provide foreclosure prevention?</h3><p>No. Our focus is post-foreclosure support. If you have not yet lost your property, consider contacting a HUD-approved housing counselor.</p></div>
<div class="faq"><h3>What kind of help may be available?</h3><p>Resources may include food assistance, housing navigation, pet shelter resources, job training, employment placement, financial education, second-chance housing information, and surplus asset recovery guidance.</p></div>
<div class="faq"><h3>How do I request assistance?</h3><p>Complete the inquiry form on our Request Assistance page. We will review your inquiry and determine what follow-up may be appropriate.</p></div>
<div class="faq"><h3>Is there a cost?</h3><p>The Foundation aims to connect families with available resources at no cost. Outside organizations may have their own terms, eligibility requirements, or fees; ask them directly before agreeing to a service.</p></div>
<div class="faq"><h3>What are surplus proceeds?</h3><p>In some circumstances, a foreclosure sale may generate funds beyond the amounts owed and applicable costs. The handling of those funds and who may claim them depend on state law, liens, court procedures, and deadlines.</p></div>
<div class="faq"><h3>Can you recover surplus funds for me?</h3><p>We can help you understand the general process and connect you with resources or qualified attorneys. We do not provide legal representation or file claims on your behalf.</p></div>
<div class="faq"><h3>How long will a review take?</h3><p>We aim to review inquiries within 48–72 hours when possible. This is an initial review target, not a guarantee of response time or case resolution.</p></div>
<div class="faq"><h3>Is my information private?</h3><p>Please share only the information needed for your inquiry. Review our Privacy Policy for information about handling personal information. Do not submit Social Security numbers, passwords, or bank account credentials.</p></div>
<div class="faq"><h3>What are the laws and deadlines?</h3><p>Foreclosure and surplus claims are governed by state law and local procedure. Deadlines can differ significantly. Check with the courthouse, trustee, tax authority, or a qualified attorney for the precise rules that apply to your situation.</p></div>
<div class="notice">This website provides general information, not legal, tax, financial, or housing advice. Eligibility and resource availability vary. No particular outcome is guaranteed.</div>
</section>
`],
"/about.html": ["About the Foundation", `
<div class="page-hero"><p class="eyebrow">ABOUT US</p><h1>About the Foundation</h1><p>Helping families and individuals rebuild after foreclosure.</p></div>
<section class="content">
<div class="card"><h3>Our Mission</h3><p>The Family Foreclosure Foundation is dedicated to helping families and individuals who have experienced residential or commercial foreclosure. We believe foreclosure is not the end of the road. With appropriate resources, support, and guidance, families can work toward a more stable future.</p></div>
<div class="card"><h3>What We Do</h3><p>We help connect families with emergency food and housing resources, pet shelter resources, job training and placement, financial education, second-chance housing information, attorney referrals, and surplus asset recovery navigation.</p></div>
<div class="card"><h3>Our Values</h3><p>We believe in dignity, compassion, transparency, and practical support. We do not judge the circumstances that led to foreclosure. We focus on realistic next steps and stronger community connections.</p></div>
<div class="card"><h3>How We Are Funded</h3><p>The Foundation seeks support through donations, grants, and community partnerships. Any services offered by partner organizations remain subject to their own eligibility and availability.</p></div>
<div class="notice">Our work centers on family stabilization and resource navigation. We do not promise recovery of funds, housing placement, employment, or homeownership.</div>
</section>
`],
"/apply.html": ["Request Assistance", `
<div class="page-hero"><p class="eyebrow">REQUEST ASSISTANCE</p><h1>Request Assistance</h1><p>If foreclosure has affected your family or property, you may use this form to tell us about your situation and the resources you are seeking.</p></div>
<section class="content"><form class="form" id="applyForm">
<fieldset><legend>Section A — Your Information</legend>
<div class="field"><label for="name">Full name *</label><input id="name" name="Full name" required autocomplete="name"></div>
<div class="field"><label for="email">Email address *</label><input id="email" name="Email" type="email" required autocomplete="email"></div>
<div class="field"><label for="phone">Telephone number *</label><input id="phone" name="Telephone" type="tel" required autocomplete="tel"></div>
<div class="field"><label for="city">City and state *</label><input id="city" name="City and state" required></div>
<div class="field"><label for="relation">Your relationship to the property</label><select id="relation" name="Relationship"><option>Former owner</option><option>Spouse or partner</option><option>Family member or heir</option><option>Authorized representative</option><option>Other</option></select></div>
</fieldset>
<fieldset><legend>Section B — Property Information</legend>
<div class="field"><label for="address">Property city, state, and ZIP *</label><input id="address" name="Property location" required></div>
<div class="field"><label for="type">Property type</label><select id="type" name="Property type"><option>Residential</option><option>Commercial</option><option>Mixed use</option><option>Not sure</option></select></div>
<div class="field"><label for="date">Approximate foreclosure date, if known</label><input id="date" name="Foreclosure date" type="date"></div>
<div class="field"><label for="details">Tell us about your situation *</label><textarea id="details" name="Situation" required placeholder="Please do not include Social Security numbers, bank account details, or passwords."></textarea></div>
</fieldset>
<fieldset><legend>Section C — Resources You Need</legend>
<div class="field"><label class="choice"><input type="checkbox" name="Resources" value="Food assistance"> Food assistance</label><label class="choice"><input type="checkbox" name="Resources" value="Housing"> Housing resources</label><label class="choice"><input type="checkbox" name="Resources" value="Pet resources"> Pet shelter resources</label><label class="choice"><input type="checkbox" name="Resources" value="Job training"> Job training or employment</label><label class="choice"><input type="checkbox" name="Resources" value="Financial education"> Financial education</label><label class="choice"><input type="checkbox" name="Resources" value="Veteran resources"> Veteran-specific resources</label><label class="choice"><input type="checkbox" name="Resources" value="Senior resources"> Senior support</label><label class="choice"><input type="checkbox" name="Resources" value="Surplus asset recovery"> Surplus asset recovery information</label><label class="choice"><input type="checkbox" name="Resources" value="Other"> Other community resources</label></div>
<div class="field"><label class="choice"><input type="checkbox" name="Consent to contact" value="Yes" required> I agree that the Foundation may contact me about this inquiry. *</label></div>
<div class="field"><label class="choice"><input type="checkbox" name="Privacy policy acknowledgment" value="Yes" required> I have read the <a href="/privacy.html">Privacy Policy</a>. *</label></div>
</fieldset>
<div class="notice">This form opens an email draft in your email application. Your inquiry is not submitted until you send that email. Please allow 48–72 hours for an initial review when possible. Submitting an inquiry does not guarantee eligibility or recovery of funds.</div>
<button class="btn gold" type="submit">PREPARE EMAIL INQUIRY</button>
<p id="formStatus" role="status" aria-live="polite"></p>
</form></section>
<script>
document.getElementById("applyForm").addEventListener("submit",function(e){
e.preventDefault();
const f=this;
const data=new FormData(f);
const lines=[];
for(const [key,value] of data.entries()){lines.push(key+": "+value);}
const subject=encodeURIComponent("Assistance Inquiry - "+(data.get("Full name")||"Applicant"));
const body=encodeURIComponent(lines.join("\n"));
document.getElementById("formStatus").textContent="Your email application should open. Please review it and press Send in your email application to submit your inquiry.";
window.location.href="mailto:Info@TheFamilyForeclosureFoundation.Org?subject="+subject+"&body="+body;
});
</script>
`],
"/contact.html": ["Contact the Foundation", `
<div class="page-hero"><p class="eyebrow">GET IN TOUCH</p><h1>Contact the Foundation</h1><p>Questions about the Foundation, our mission, or available resource navigation?</p></div>
<section class="content"><div class="grid">
<div class="card"><h3>Email</h3><p><a href="mailto:Info@TheFamilyForeclosureFoundation.Org">Info@TheFamilyForeclosureFoundation.Org</a></p></div>
<div class="card"><h3>Website</h3><p><a href="${SITE}">thefamilyforeclosurefoundation.org</a></p></div>
<div class="card"><h3>Mailing Address</h3><p>1500 S. Dairy Ashford Rd., Suite 207<br>Houston, TX 77077</p></div>
</div><form class="form" id="contactForm"><fieldset><legend>Send an Inquiry</legend>
<div class="field"><label for="cname">Name *</label><input id="cname" name="Name" required></div>
<div class="field"><label for="cemail">Email *</label><input id="cemail" name="Email" type="email" required></div>
<div class="field"><label for="cmessage">Message *</label><textarea id="cmessage" name="Message" required></textarea></div>
<button class="btn gold" type="submit">PREPARE EMAIL</button><p id="contactStatus" role="status" aria-live="polite"></p>
</fieldset></form></section>
<script>
document.getElementById("contactForm").addEventListener("submit",function(e){
e.preventDefault();const d=new FormData(this);const subject=encodeURIComponent("Website Contact - "+d.get("Name"));const body=encodeURIComponent("Name: "+d.get("Name")+"\nEmail: "+d.get("Email")+"\n\n"+d.get("Message"));document.getElementById("contactStatus").textContent="Your email application should open. Please press Send to deliver your message.";window.location.href="mailto:Info@TheFamilyForeclosureFoundation.Org?subject="+subject+"&body="+body;
});
</script>
`],
"/asset-recovery.html": ["Asset Recovery", `
<div class="page-hero"><p class="eyebrow">KNOW YOUR OPTIONS</p><h1>Surplus Asset Recovery</h1><p>Learn about possible surplus proceeds or other recoverable funds following foreclosure.</p></div>
<section class="content">
<div class="card"><h3>What Are Surplus Proceeds?</h3><p>When a foreclosed property is sold for more than the amounts owed and applicable costs, additional proceeds may sometimes remain. Whether anyone can claim those funds depends on the applicable law and the circumstances of the sale.</p></div>
<div class="card"><h3>Who May Be Eligible?</h3><p>Eligibility depends on the state and county, the foreclosure process, junior liens, court orders, ownership interests, and other facts. Not every former owner is entitled to funds.</p></div>
<div class="card"><h3>Time Limits</h3><p>Deadlines vary by jurisdiction and type of foreclosure. Act promptly to identify the applicable process and verify deadlines with the responsible court, trustee, government office, or qualified attorney.</p></div>
<div class="card"><h3>How We Can Help</h3><p>The Foundation can provide general information, help you identify places to research potential funds, and connect you with qualified resources or attorneys. We do not file claims on your behalf or provide legal representation.</p></div>
<div class="card"><h3>Protect Yourself</h3><p>Be cautious of unsolicited offers and large percentage-based fees. Verify credentials, understand every agreement before signing, and consider consulting a qualified attorney.</p></div>
<div class="notice">This page is general information, not legal, tax, or financial advice. No recovery is promised or guaranteed.</div>
<a class="btn gold" href="/apply.html">REQUEST ASSISTANCE</a>
</section>
`],
"/privacy.html": ["Privacy Policy", `
<div class="page-hero"><p class="eyebrow">YOUR PRIVACY MATTERS</p><h1>Privacy Policy</h1><p>Information about how the Foundation intends to handle inquiries received through this website.</p></div>
<section class="content">
<div class="card"><h3>Information We Collect</h3><p>If you contact us, you may provide your name, email address, telephone number, property information, and details about your request.</p></div>
<div class="card"><h3>How We Use Information</h3><p>We use information to understand your inquiry, communicate with you, and identify relevant resources or referrals.</p></div>
<div class="card"><h3>Sharing Information</h3><p>We do not sell personal information. We aim to share relevant information with outside organizations only with your consent or as otherwise permitted or required by law.</p></div>
<div class="card"><h3>Data Security</h3><p>We take reasonable steps to protect information, but no online transmission or electronic storage method can be guaranteed completely secure. Do not send passwords, Social Security numbers, or bank credentials through this website.</p></div>
<div class="card"><h3>Your Choices</h3><p>You may contact us to request access to, correction of, or deletion of information you previously provided, subject to applicable requirements.</p></div>
<div class="card"><h3>Contact</h3><p>Questions about privacy may be sent to <a href="mailto:Info@TheFamilyForeclosureFoundation.Org">Info@TheFamilyForeclosureFoundation.Org</a>.</p></div>
<div class="notice">This policy text should be reviewed against the Foundation's actual data handling practices before publication. It does not replace legal advice.</div>
</section>
`]
};

function escapeHtml(s) {
 return String(s).replace(/[&<>"']/g, c => ({
  "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"
 })[c]);
}

function render(title, body) {
 const links = [
  ["/","Home"],["/programs.html","Programs"],["/who-we-serve.html","Who We Serve"],
  ["/resources.html","Resources & FAQ"],["/about.html","About"],
  ["/asset-recovery.html","Asset Recovery"],["/apply.html","Request Assistance"],
  ["/contact.html","Contact"]
 ];
 return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#062f50">
<meta name="description" content="The Family Foreclosure Foundation connects families affected by foreclosure with practical resource navigation, community partnerships, and possible recovery information.">
<title>${escapeHtml(title)} | ${BRAND}</title>
<style>${CSS}</style>
</head>
<body>
<header class="header">
<a class="brand" href="/" aria-label="The Family Foreclosure Foundation home">${BRAND}<small>FAMILIES HELPING FAMILIES</small></a>
<nav aria-label="Main navigation">${links.map(([url,label])=>`<a href="${url}">${label}</a>`).join("")}</nav>
</header>
<main>${body}</main>
<footer>
<div class="footer-grid">
<div><h3>${BRAND}</h3><p>Bridging the gap between foreclosure and the possibility of returning to homeownership through family stabilization, resource navigation, and community partnerships.</p><p><strong>Because every family is somebody's whole entire world.</strong></p></div>
<div><h3>Contact</h3><p>1500 S. Dairy Ashford Rd., Suite 207<br>Houston, TX 77077</p><p><a href="mailto:Info@TheFamilyForeclosureFoundation.Org">${EMAIL}</a></p><p><a href="/privacy.html">Privacy Policy</a></p></div>
</div>
<p>Information on this website is general in nature. Services and eligibility depend on individual circumstances and resource availability. No outcome is guaranteed.</p>
</footer>
</body>
</html>`;
}

export default {
 async fetch(request) {
  const url = new URL(request.url);
  let path = decodeURIComponent(url.pathname);
  if (path !== "/" && path.endsWith("/")) path = path.slice(0,-1);
  if (path === "/index.html") path = "/";
  if (path === "/favicon.ico") return new Response(null,{status:204});
  const entry = pages[path];
  if (!entry) {
   return new Response(render("Page Not Found",`<section class="content center"><h1>Page Not Found</h1><p>The page you requested could not be found.</p><a class="btn gold" href="/">RETURN HOME</a></section>`),{
    status:404,headers:{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store"}
   });
  }
  return new Response(render(entry[0],entry[1]),{
   headers:{
    "Content-Type":"text/html; charset=utf-8",
    "Cache-Control":"public, max-age=300",
    "X-Content-Type-Options":"nosniff",
    "Referrer-Policy":"strict-origin-when-cross-origin"
   }
  });
 }
};
