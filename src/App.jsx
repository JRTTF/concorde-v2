import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import WhyUs from "./pages/WhyUs";

const C = {
  navy:"#1B2D4F", navyDark:"#111e35", navyFaint:"#1B2D4F0d",
  silver:"#C0C0C0", silverDark:"#8a8a8a",
  text:"#1a1a2e", textLight:"#8a95a3",
  bg:"#f5f6f8", bgWhite:"#ffffff", border:"#dde2ea",
};

const NAV = {
  en:   { links:[{l:"Home",p:"/"},{l:"Products",p:"/products"},{l:"Why Us",p:"/why-us"},{l:"About",p:"/about"},{l:"Contact",p:"/contact"}], cta:"Get Quote" },
  zhTW: { links:[{l:"首頁",p:"/"},{l:"產品",p:"/products"},{l:"為何選我們",p:"/why-us"},{l:"關於我們",p:"/about"},{l:"聯繫我們",p:"/contact"}], cta:"立即詢價" },
  zhCN: { links:[{l:"首页",p:"/"},{l:"产品",p:"/products"},{l:"为何选我们",p:"/why-us"},{l:"关于我们",p:"/about"},{l:"联系我们",p:"/contact"}], cta:"立即询价" },
};

function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const n = NAV[lang];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Barlow:wght@300;400;500&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        .nav-lnk{font-family:'Rajdhani',sans-serif;font-size:12px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:${C.textLight};cursor:pointer;transition:color .2s;text-decoration:none;white-space:nowrap}
        .nav-lnk:hover,.nav-lnk.active{color:${C.navy}}
        .lang-pill{font-family:'Rajdhani',sans-serif;font-size:11px;font-weight:600;letter-spacing:.1em;background:none;border:1px solid ${C.border};color:${C.textLight};padding:4px 10px;cursor:pointer;transition:all .2s}
        .lang-pill:hover,.lang-pill.on{border-color:${C.navy};color:${C.navy};background:${C.navyFaint}}
        .btn-cta{display:inline-flex;align-items:center;background:${C.navy};color:#fff;font-family:'Rajdhani',sans-serif;font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:9px 18px;border:none;cursor:pointer;transition:background .2s;text-decoration:none;white-space:nowrap}
        .btn-cta:hover{background:${C.navyDark}}
        .hamburger{display:none;flex-direction:column;justify-content:center;gap:5px;background:none;border:none;cursor:pointer;padding:6px;margin-left:auto}
        .hamburger span{display:block;width:22px;height:2px;background:${C.navy};border-radius:1px;transition:all .2s}
        .mobile-menu{display:none;position:fixed;top:66px;left:0;right:0;z-index:199;background:${C.navy};padding:12px 0;box-shadow:0 8px 24px rgba(0,0,0,.2)}
        .mobile-menu.open{display:block}
        .mobile-menu-lnk{display:block;font-family:'Rajdhani',sans-serif;font-size:15px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.8);text-decoration:none;padding:14px 28px;border-bottom:1px solid rgba(255,255,255,.07);transition:background .15s,color .15s}
        .mobile-menu-lnk:hover,.mobile-menu-lnk.active{background:rgba(255,255,255,.07);color:#fff}
        .nav-desktop-links{display:flex;align-items:center;gap:20;flex-wrap:nowrap}
        body{margin:0;padding:0}
        @media(max-width:768px){
          .nav-desktop-links{display:none!important}
          .hamburger{display:flex!important}
        }
      `}</style>
      <nav style={{
        position:"fixed",top:0,left:0,right:0,zIndex:200,height:66,
        padding:"0 40px",display:"flex",alignItems:"center",justifyContent:"space-between",
        background:scrolled?"rgba(245,246,248,.97)":"rgba(245,246,248,.7)",
        backdropFilter:"blur(18px)",
        borderBottom:scrolled?`1px solid ${C.border}`:"1px solid transparent",
        transition:"all .35s",
      }}>
        <Link to="/" style={{ display:"flex",alignItems:"center",gap:12,textDecoration:"none",flexShrink:0 }}>
          <div style={{ width:40,height:40,background:`linear-gradient(135deg,${C.silver},${C.silverDark})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:700,color:"#fff",clipPath:"polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%)",fontFamily:"'Rajdhani',sans-serif" }}>CI</div>
          <div>
            <div style={{ fontFamily:"'Rajdhani',sans-serif",fontSize:13,fontWeight:700,letterSpacing:".15em",color:C.navy }}>CONCORDE</div>
            <div style={{ fontFamily:"'Rajdhani',sans-serif",fontSize:8,letterSpacing:".22em",color:C.silver,marginTop:1 }}>INNOVATION LIMITED</div>
          </div>
        </Link>

        <div className="nav-desktop-links" style={{ display:"flex",alignItems:"center",gap:20,flexWrap:"nowrap" }}>
          {n.links.map((l,i)=>(
            <Link key={i} to={l.p} className={`nav-lnk ${location.pathname===l.p?"active":""}`}>{l.l}</Link>
          ))}
          <div style={{ display:"flex",gap:3,flexShrink:0 }}>
            {[{k:"en",l:"EN"},{k:"zhTW",l:"繁"},{k:"zhCN",l:"简"}].map(o=>(
              <button key={o.k} className={`lang-pill ${lang===o.k?"on":""}`} onClick={()=>setLang(o.k)}>{o.l}</button>
            ))}
          </div>
          <Link to="/contact" className="btn-cta">{n.cta}</Link>
        </div>

        {/* Mobile right: lang pills + hamburger */}
        <div style={{ display:"flex",alignItems:"center",gap:6,marginLeft:"auto" }} className="mobile-right">
          <style>{`@media(min-width:769px){.mobile-right{display:none!important}}`}</style>
          <div style={{ display:"flex",gap:3 }}>
            {[{k:"en",l:"EN"},{k:"zhTW",l:"繁"},{k:"zhCN",l:"简"}].map(o=>(
              <button key={o.k} className={`lang-pill ${lang===o.k?"on":""}`} onClick={()=>setLang(o.k)}>{o.l}</button>
            ))}
          </div>
          <button className="hamburger" onClick={()=>setMenuOpen(v=>!v)} aria-label="Toggle menu">
            <span style={{ transform:menuOpen?"rotate(45deg) translate(5px,5px)":"none" }}/>
            <span style={{ opacity:menuOpen?0:1 }}/>
            <span style={{ transform:menuOpen?"rotate(-45deg) translate(5px,-5px)":"none" }}/>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu ${menuOpen?"open":""}`}>
        {n.links.map((l,i)=>(
          <Link key={i} to={l.p} className={`mobile-menu-lnk ${location.pathname===l.p?"active":""}`} onClick={()=>setMenuOpen(false)}>{l.l}</Link>
        ))}
        <Link to="/contact" onClick={()=>setMenuOpen(false)} style={{ display:"block",margin:"12px 20px 4px",background:"#fff",color:C.navy,fontFamily:"'Rajdhani',sans-serif",fontSize:13,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",padding:"13px 20px",textDecoration:"none",textAlign:"center" }}>{n.cta}</Link>
      </div>
    </>
  );
}

function Footer({ lang }) {
  const tagline = {
    en:"ISO 9001:2015 certified precision manufacturer — plastic injection, cold forging and turning parts. Exporting to Europe, Americas and Asia for 20+ years.",
    zhTW:"ISO 9001:2015認證精密製造商——注塑件、冷鍛件及車削零件。出口歐洲、美洲及亞洲逾20年。",
    zhCN:"ISO 9001:2015认证精密制造商——注塑件、冷锻件及车削零件。出口欧洲、美洲及亚洲逾20年。",
  };
  return (
    <footer style={{ background:"#111e35", padding:"44px 40px" }}>
      <div style={{ maxWidth:1080, margin:"0 auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:20, marginBottom:28, paddingBottom:28, borderBottom:"1px solid rgba(255,255,255,.07)" }}>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <div style={{ width:36,height:36,background:`linear-gradient(135deg,${C.silver},${C.silverDark})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"#fff",clipPath:"polygon(5px 0%,100% 0%,calc(100% - 5px) 100%,0% 100%)",fontFamily:"'Rajdhani',sans-serif" }}>CI</div>
            <div>
              <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:12, fontWeight:700, letterSpacing:".13em", color:"#e8ecf2" }}>CONCORDE INNOVATION LIMITED</div>
              <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:8, letterSpacing:".18em", color:"rgba(255,255,255,.22)", marginTop:1 }}>協和精密有限公司 · 协和精密有限公司</div>
            </div>
          </div>
          <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:12, fontWeight:300, color:"rgba(255,255,255,.3)", maxWidth:380, lineHeight:1.7 }}>{tagline[lang]}</p>
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
          <span style={{ fontFamily:"'Barlow',sans-serif", fontSize:11, color:"rgba(255,255,255,.22)" }}>© 2026 Concorde Innovation Limited. All rights reserved.</span>
          <div style={{ display:"flex", gap:20 }}>
            {[["WhatsApp","https://wa.me/85266336017"],["Email","mailto:info@concordeinnovation.com"]].map(([l,h])=>(
              <a key={l} href={h} style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:11, fontWeight:600, letterSpacing:".1em", textTransform:"uppercase", color:"rgba(255,255,255,.3)", textDecoration:"none" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState("en");
  return (
    <>
      <Navbar lang={lang} setLang={setLang}/>
      <div style={{ paddingTop:66 }}>
        <Routes>
          <Route path="/" element={<Home lang={lang}/>}/>
          <Route path="/products" element={<Services lang={lang}/>}/>
          <Route path="/why-us" element={<WhyUs lang={lang}/>}/>
          <Route path="/about" element={<About lang={lang}/>}/>
          <Route path="/contact" element={<Contact lang={lang}/>}/>
        </Routes>
      </div>
      <Footer lang={lang}/>
    </>
  );
}
