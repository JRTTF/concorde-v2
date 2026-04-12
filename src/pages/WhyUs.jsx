import { Link } from "react-router-dom";

const T = {
  en: {
    badge: "Why Choose Us",
    title: "A Reliable Manufacturing Partner Since 2000",
    sub: "Concorde Innovation delivers seamless solutions from product design to the production of premium-quality components — trusted by clients across Europe, the Americas and Asia.",

    intro: "Concorde Innovation has been in business for over twenty years, catering to the metal and plastic manufacturing industry. With our own factory in Guangdong, China, we manufacture metal parts, sheet metal, stainless steel, plastic-metal parts and more. Our products have a wide range and cater to a wide spectrum of customer needs.",
    mission: "Our mission is to excel as a leading component supplier for complete machine manufacturers. Leveraging our profound experience in mold design, plastic injection molding, cold forging, stamping and precision machining, we empower clients to optimize product design — boosting its rationality, production efficiency, and service life simultaneously.",
    philosophy: "Guided by the philosophy of building long-term, mutually beneficial partnerships, Concorde Innovation always rises to challenges with full accountability. This commitment has won us consistent recognition and trust from our customers across five continents.",
    inviteTitle: "We warmly invite you to partner with Concorde Innovation.",
    inviteSub: "Choosing us will prove to be one of your most rewarding business decisions.",

    servicesTitle: "Our Services",
    services: [
      { icon:"🏭", title:"In-House One-Stop Solution", desc:"From tooling and production through surface treatment, assembly and shipping — all handled under one roof in our Guangdong facility." },
      { icon:"⚙️", title:"Engineering Expertise", desc:"Our in-house engineering team provides DFM analysis, mold design and technical feedback to optimise your product before production begins." },
      { icon:"💰", title:"High Quality Production with Competitive Pricing", desc:"ISO 9001 certified quality management at every stage. Direct factory pricing — no middlemen, no hidden markup, MOQ flexible." },
      { icon:"💡", title:"Value-Added & Innovative Products", desc:"We go beyond standard manufacturing — offering innovative solutions, design improvements and value-added services tailored to each client." },
    ],

    capsTitle: "Production Capabilities",
    caps: [
      { icon:"🔧", label:"Assembly" },
      { icon:"🪛", label:"Metal & Plastic-Metal Parts" },
      { icon:"📐", label:"Stamping / Sheet Metal / Stainless Steel" },
      { icon:"⚙️", label:"Machining — Auto & CNC Lathe" },
      { icon:"🏭", label:"Plastic Injection Molding" },
      { icon:"🔩", label:"Metal Injection Molding (MIM)" },
    ],

    statsTitle: "By The Numbers",
    stats: [
      { val:"20+", label:"Years in Business" },
      { val:"200+", label:"Global Clients" },
      { val:"20+", label:"Countries Served" },
      { val:"80%", label:"Staff Retention Rate" },
    ],

    exportTitle: "Our Export Markets",
    exports: [
      { flag:"🇪🇺", region:"Europe", pct:"70%", countries:"UK, Germany, France, Italy, Spain, Netherlands, Scandinavia" },
      { flag:"🇺🇸", region:"Americas", pct:"25%", countries:"USA, Canada, Brazil and growing South American market" },
      { flag:"🌏", region:"Asia & Others", pct:"5%", countries:"Japan, South Korea, Australia, Southeast Asia, Middle East" },
    ],

    processTitle: "Our Quality Control Process",
    steps: [
      { n:"01", t:"DFM Analysis", b:"Engineering review of your drawings before production — we flag issues early." },
      { n:"02", t:"Material Inspection", b:"All raw materials certified and inspected on arrival at our facility." },
      { n:"03", t:"In-Process QC", b:"Quality checks at every production stage — stamping, machining, molding, finishing." },
      { n:"04", t:"100% Final Inspection", b:"Every shipment 100% inspected. Full report with dimensions, photos and certifications." },
    ],

    ctaTitle: "Start Your Project Today",
    ctaSub: "Send us your drawings. Quote within 48 hours. Samples before mass production.",
    ctaBtn: "Get a Free Quote →",
  },

  zhTW: {
    badge: "為何選擇我們",
    title: "自2000年起，值得信賴的製造夥伴",
    sub: "協和精密提供從產品設計到優質零件生產的一站式解決方案——深受歐洲、美洲及亞洲客戶信賴。",

    intro: "協和精密在金屬及塑膠製造業深耕逾二十年。我們在廣東設有自己的工廠，生產金屬零件、鈑金、不鏽鋼件、塑金件等各類產品，品種齊全，能滿足各行各業的廣泛需求。",
    mission: "我們的使命是成為整機製造商的領先零件供應商。憑藉我們在模具設計、塑膠注塑、冷鍛、衝壓及精密加工方面的深厚經驗，我們幫助客戶優化產品設計——同時提升其合理性、生產效率及使用壽命。",
    philosophy: "秉持建立長期互利合作關係的理念，協和精密始終以高度責任感應對每一項挑戰。這一承諾為我們贏得了來自五大洲客戶的持續認可與信賴。",
    inviteTitle: "誠摯邀請您與協和精密建立合作。",
    inviteSub: "選擇我們，將是您最明智的商業決策之一。",

    servicesTitle: "我們的服務",
    services: [
      { icon:"🏭", title:"廠內一站式解決方案", desc:"從開模、生產、表面處理到組裝及出貨——全部在廣東廠房一條龍完成。" },
      { icon:"⚙️", title:"工程技術支援", desc:"內部工程團隊提供DFM分析、模具設計及技術反饋，在生產前優化您的產品設計。" },
      { icon:"💰", title:"高品質生產，具競爭力定價", desc:"ISO 9001認證的全程品質管控。工廠直供定價，無中間商，無隱藏費用，起訂量靈活。" },
      { icon:"💡", title:"增值及創新產品與服務", desc:"超越標準製造——為每位客戶提供創新解決方案、設計改善及增值服務。" },
    ],

    capsTitle: "生產能力",
    caps: [
      { icon:"🔧", label:"組裝" },
      { icon:"🪛", label:"金屬及塑金零件" },
      { icon:"📐", label:"衝壓件 / 鈑金 / 不鏽鋼" },
      { icon:"⚙️", label:"加工件——自動車床及CNC" },
      { icon:"🏭", label:"塑膠注塑成型" },
      { icon:"🔩", label:"金屬注射成型（MIM）" },
    ],

    statsTitle: "數字說明一切",
    stats: [
      { val:"20+", label:"年業務經驗" },
      { val:"200+", label:"全球客戶" },
      { val:"20+", label:"服務國家" },
      { val:"80%", label:"員工留任率" },
    ],

    exportTitle: "我們的出口市場",
    exports: [
      { flag:"🇪🇺", region:"歐洲", pct:"70%", countries:"英國、德國、法國、意大利、西班牙、荷蘭、北歐" },
      { flag:"🇺🇸", region:"美洲", pct:"25%", countries:"美國、加拿大、巴西及不斷增長的南美市場" },
      { flag:"🌏", region:"亞洲及其他", pct:"5%", countries:"日本、韓國、澳洲、東南亞、中東" },
    ],

    processTitle: "我們的品質管控流程",
    steps: [
      { n:"01", t:"DFM分析", b:"生產前對您的圖紙進行工程審查——我們提前發現問題。" },
      { n:"02", t:"來料檢驗", b:"所有原材料到廠後即進行認證及檢驗。" },
      { n:"03", t:"在制品品質管控", b:"每個生產環節的品質檢查——沖壓、加工、注塑、表面處理。" },
      { n:"04", t:"100%最終檢驗", b:"每批貨100%檢驗，包含尺寸、照片及認證的完整報告。" },
    ],

    ctaTitle: "立即開始您的項目",
    ctaSub: "發送圖紙，48小時內報價，量產前提供打樣。",
    ctaBtn: "免費獲取報價 →",
  },

  zhCN: {
    badge: "为何选择我们",
    title: "自2000年起，值得信赖的制造伙伴",
    sub: "协和精密提供从产品设计到优质零件生产的一站式解决方案——深受欧洲、美洲及亚洲客户信赖。",

    intro: "协和精密在金属及塑胶制造业深耕逾二十年。我们在广东设有自己的工厂，生产金属零件、钣金、不锈钢件、塑金件等各类产品，品种齐全，能满足各行各业的广泛需求。",
    mission: "我们的使命是成为整机制造商的领先零件供应商。凭借我们在模具设计、塑胶注塑、冷锻、冲压及精密加工方面的深厚经验，我们帮助客户优化产品设计——同时提升其合理性、生产效率及使用寿命。",
    philosophy: "秉持建立长期互利合作关系的理念，协和精密始终以高度责任感应对每一项挑战。这一承诺为我们赢得了来自五大洲客户的持续认可与信赖。",
    inviteTitle: "诚挚邀请您与协和精密建立合作。",
    inviteSub: "选择我们，将是您最明智的商业决策之一。",

    servicesTitle: "我们的服务",
    services: [
      { icon:"🏭", title:"厂内一站式解决方案", desc:"从开模、生产、表面处理到组装及出货——全部在广东厂房一条龙完成。" },
      { icon:"⚙️", title:"工程技术支持", desc:"内部工程团队提供DFM分析、模具设计及技术反馈，在生产前优化您的产品设计。" },
      { icon:"💰", title:"高品质生产，具竞争力定价", desc:"ISO 9001认证的全程品质管控。工厂直供定价，无中间商，无隐藏费用，起订量灵活。" },
      { icon:"💡", title:"增值及创新产品与服务", desc:"超越标准制造——为每位客户提供创新解决方案、设计改善及增值服务。" },
    ],

    capsTitle: "生产能力",
    caps: [
      { icon:"🔧", label:"组装" },
      { icon:"🪛", label:"金属及塑金零件" },
      { icon:"📐", label:"冲压件 / 钣金 / 不锈钢" },
      { icon:"⚙️", label:"加工件——自动车床及CNC" },
      { icon:"🏭", label:"塑胶注塑成型" },
      { icon:"🔩", label:"金属注射成型（MIM）" },
    ],

    statsTitle: "数字说明一切",
    stats: [
      { val:"20+", label:"年业务经验" },
      { val:"200+", label:"全球客户" },
      { val:"20+", label:"服务国家" },
      { val:"80%", label:"员工留任率" },
    ],

    exportTitle: "我们的出口市场",
    exports: [
      { flag:"🇪🇺", region:"欧洲", pct:"70%", countries:"英国、德国、法国、意大利、西班牙、荷兰、北欧" },
      { flag:"🇺🇸", region:"美洲", pct:"25%", countries:"美国、加拿大、巴西及不断增长的南美市场" },
      { flag:"🌏", region:"亚洲及其他", pct:"5%", countries:"日本、韩国、澳洲、东南亚、中东" },
    ],

    processTitle: "我们的品质管控流程",
    steps: [
      { n:"01", t:"DFM分析", b:"生产前对您的图纸进行工程审查——我们提前发现问题。" },
      { n:"02", t:"来料检验", b:"所有原材料到厂后即进行认证及检验。" },
      { n:"03", t:"在制品品质管控", b:"每个生产环节的品质检查——冲压、加工、注塑、表面处理。" },
      { n:"04", t:"100%最终检验", b:"每批货100%检验，包含尺寸、照片及认证的完整报告。" },
    ],

    ctaTitle: "立即开始您的项目",
    ctaSub: "发送图纸，48小时内报价，量产前提供打样。",
    ctaBtn: "免费获取报价 →",
  },
};

const C = {
  navy:"#1B2D4F", navyDark:"#111e35", navyFaint:"#1B2D4F0d",
  silver:"#C0C0C0", silverDark:"#8a8a8a",
  text:"#1a1a2e", textMid:"#4a5568", textLight:"#8a95a3",
  bg:"#f5f6f8", bgWhite:"#ffffff", border:"#dde2ea",
};

export default function WhyUs({ lang = "en" }) {
  const t = T[lang] || T.en;
  return (
    <div style={{ fontFamily:"'Rajdhani','Barlow',sans-serif", background:C.bg, color:C.text }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Barlow:wght@300;400;500&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        .eyebrow-dark{font-family:'Rajdhani',sans-serif;font-size:11px;font-weight:600;letter-spacing:.26em;text-transform:uppercase;color:${C.silver};margin-bottom:14px;display:flex;align-items:center;gap:10px}
        .eyebrow-dark::before{content:'';display:inline-block;width:28px;height:1.5px;background:linear-gradient(90deg,${C.silver},transparent)}
        .eyebrow-light{font-family:'Rajdhani',sans-serif;font-size:11px;font-weight:600;letter-spacing:.26em;text-transform:uppercase;color:${C.navy};margin-bottom:14px;display:flex;align-items:center;gap:10px}
        .eyebrow-light::before{content:'';display:inline-block;width:28px;height:1.5px;background:linear-gradient(90deg,${C.navy},${C.silver})}
        .stat-box{text-align:center;padding:24px 16px;border-right:1px solid rgba(255,255,255,.12)}
        .stat-box:last-child{border-right:none}
        .step-card{background:${C.bgWhite};border:1px solid ${C.border};border-top:3px solid ${C.navy};padding:1.5rem;text-align:center}
        .cap-card{background:${C.bgWhite};border:1px solid ${C.border};padding:1.4rem 1.2rem;display:flex;flex-direction:column;align-items:center;gap:10px;transition:box-shadow .2s,transform .15s}
        .cap-card:hover{box-shadow:0 6px 20px rgba(27,45,79,.1);transform:translateY(-2px)}
        .divider{width:48px;height:3px;background:${C.navy};margin:24px 0}
        @media(max-width:960px){.three-col{grid-template-columns:1fr 1fr!important}.four-col{grid-template-columns:1fr 1fr!important}.six-col{grid-template-columns:repeat(3,1fr)!important}.px{padding-left:20px!important;padding-right:20px!important}}
        @media(max-width:600px){.three-col,.four-col,.six-col{grid-template-columns:1fr 1fr!important}}
      `}</style>

      {/* HERO */}
      <div style={{ background:C.navy, padding:"90px 48px 60px" }} className="px">
        <div style={{ maxWidth:1080, margin:"0 auto" }}>
          <div className="eyebrow-dark">{t.badge}</div>
          <h1 style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:"clamp(28px,4vw,56px)", fontWeight:700, color:"#e8ecf2", lineHeight:1.1, marginBottom:18 }}>{t.title}</h1>
          <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:15, fontWeight:300, color:"rgba(255,255,255,.5)", maxWidth:580, lineHeight:1.85 }}>{t.sub}</p>
        </div>
      </div>

      {/* STATS BAR */}
      <div style={{ background:C.navyDark }}>
        <div className="four-col px" style={{ maxWidth:1080, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)" }}>
          {t.stats.map((s,i)=>(
            <div key={i} className="stat-box">
              <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:40, fontWeight:700, color:"#fff", lineHeight:1 }}>{s.val}</div>
              <div style={{ fontFamily:"'Barlow',sans-serif", fontSize:12, fontWeight:300, color:C.silver, marginTop:6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US — text section */}
      <section className="px" style={{ padding:"80px 48px" }}>
        <div style={{ maxWidth:1080, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }} className="three-col">
          {/* Left: text */}
          <div>
            <div className="eyebrow-light">{t.badge}</div>
            <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:16, fontWeight:400, color:C.text, lineHeight:1.9, marginBottom:20 }}>
              {t.intro}
            </p>
            <div className="divider"/>
            <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:14, fontWeight:300, color:C.textMid, lineHeight:1.9, marginBottom:20 }}>
              {t.mission}
            </p>
            <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:14, fontWeight:300, color:C.textMid, lineHeight:1.9, marginBottom:32 }}>
              {t.philosophy}
            </p>
            <div style={{ borderLeft:`3px solid ${C.navy}`, paddingLeft:20 }}>
              <p style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:16, fontWeight:600, color:C.navy, marginBottom:4 }}>{t.inviteTitle}</p>
              <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:13, fontWeight:300, color:C.textMid }}>{t.inviteSub}</p>
            </div>
          </div>

          {/* Right: factory image */}
          <div style={{ position:"relative" }}>
            <img src="/images/factory-injection.jpg" alt="Concorde Innovation facility"
              style={{ width:"100%", objectFit:"cover", display:"block", aspectRatio:"4/3" }}/>
            <div style={{ position:"absolute", bottom:0, left:0, right:0, background:"linear-gradient(transparent, rgba(27,45,79,.85))", padding:"32px 24px 20px" }}>
              <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:12, fontWeight:300, color:"rgba(255,255,255,.75)" }}>
                {lang==="en"?"Guangdong manufacturing facility — production from tooling to finished goods.":
                 lang==="zhTW"?"廣東製造廠房——從模具到成品的一條龍生產。":
                 "广东制造厂房——从模具到成品的一条龙生产。"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — 4 cards */}
      <section className="px" style={{ padding:"0 48px 70px" }}>
        <div style={{ maxWidth:1080, margin:"0 auto" }}>
          <div className="eyebrow-light" style={{ marginBottom:28 }}>{t.servicesTitle}</div>
          <div className="four-col" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:2 }}>
            {t.services.map((s,i)=>(
              <div key={i} style={{ background:C.bgWhite, border:`1px solid ${C.border}`, borderTop:`3px solid ${C.navy}`, padding:"1.5rem" }}>
                <div style={{ fontSize:28, marginBottom:12 }}>{s.icon}</div>
                <h3 style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:14, fontWeight:700, color:C.text, letterSpacing:".03em", marginBottom:10, lineHeight:1.35 }}>{s.title}</h3>
                <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:12, fontWeight:300, color:C.textMid, lineHeight:1.8 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="px" style={{ padding:"0 48px 80px" }}>
        <div style={{ maxWidth:1080, margin:"0 auto" }}>
          <div className="eyebrow-light" style={{ marginBottom:28 }}>{t.capsTitle}</div>
          <div className="six-col" style={{ display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:2 }}>
            {t.caps.map((c,i)=>(
              <div key={i} className="cap-card">
                <span style={{ fontSize:26 }}>{c.icon}</span>
                <span style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:12, fontWeight:600, color:C.text, letterSpacing:".04em", textAlign:"center", lineHeight:1.3 }}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPORT MARKETS */}
      <section className="px" style={{ padding:"70px 48px", background:C.navy }}>
        <div style={{ maxWidth:1080, margin:"0 auto" }}>
          <div className="eyebrow-dark" style={{ marginBottom:40 }}>{t.exportTitle}</div>
          <div className="three-col" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:2 }}>
            {t.exports.map((e,i)=>(
              <div key={i} style={{ background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.1)", padding:"2rem" }}>
                <div style={{ fontSize:32, marginBottom:10 }}>{e.flag}</div>
                <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:44, fontWeight:700, color:"#fff", lineHeight:1, marginBottom:4 }}>{e.pct}</div>
                <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:13, fontWeight:600, color:C.silver, letterSpacing:".1em", textTransform:"uppercase", marginBottom:10 }}>{e.region}</div>
                <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:12, fontWeight:300, color:"rgba(255,255,255,.45)", lineHeight:1.75 }}>{e.countries}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY PROCESS */}
      <section className="px" style={{ padding:"70px 48px", background:C.bgWhite }}>
        <div style={{ maxWidth:1080, margin:"0 auto" }}>
          <div className="eyebrow-light" style={{ marginBottom:40 }}>{t.processTitle}</div>
          <div className="four-col" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:2 }}>
            {t.steps.map((s,i)=>(
              <div key={i} className="step-card">
                <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:36, fontWeight:700, color:C.navy, opacity:.12, lineHeight:1, marginBottom:-2 }}>{s.n}</div>
                <h3 style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:14, fontWeight:600, color:C.text, letterSpacing:".04em", marginBottom:8 }}>{s.t}</h3>
                <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:12, fontWeight:300, color:C.textMid, lineHeight:1.75 }}>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px" style={{ padding:"80px 48px", background:C.navy }}>
        <div style={{ maxWidth:1080, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:32 }}>
          <div>
            <h2 style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:"clamp(24px,3vw,42px)", fontWeight:700, color:"#e8ecf2", marginBottom:10 }}>{t.ctaTitle}</h2>
            <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:14, fontWeight:300, color:"rgba(255,255,255,.5)", maxWidth:440 }}>{t.ctaSub}</p>
          </div>
          <Link to="/contact" style={{ display:"inline-flex", alignItems:"center", background:"#fff", color:C.navy, fontFamily:"'Rajdhani',sans-serif", fontSize:13, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", padding:"16px 32px", textDecoration:"none" }}>{t.ctaBtn}</Link>
        </div>
      </section>
    </div>
  );
}
