import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const T = {
  en: {
    badge: "20+ Years Manufacturing Excellence",
    h1a: "Precision Parts.",
    h1b: "Hong Kong Quality.",
    h1c: "China Factory Price.",
    sub: "Concorde Innovation is a Hong Kong manufacturer supplying precision metal and plastic components to clients across Europe, America and Asia. ISO 9001:2015 certified. One contact. Factory-direct pricing.",
    cta1: "Request a Quote",
    cta2: "Our Products",
    trust: "Trusted by clients in Europe, North America & Asia",

    statsTitle: "By The Numbers",
    stats: [
      { val:"20+", label:"Years in Business" },
      { val:"70%", label:"Export to Europe" },
      { val:"25%", label:"Export to Americas" },
      { val:"ISO", label:"9001:2015 Certified" },
    ],

    productsTitle: "Our Products",
    productsSub: "Full range of precision metal and plastic components — manufactured in our Guangdong facility and exported worldwide.",
    products: [
      { code:"01", title:"Metal & Plastic-Metal Parts", body:"Custom metal components, plastic-metal combination parts and sub-assemblies. High precision, tight tolerances, any volume.", img:"/images/hero-main.jpg" },
      { code:"02", title:"Stamping & Sheet Metal", body:"Metal stamping, sheet metal fabrication and stainless steel parts. Progressive dies, single-station, complex geometries.", img:"/images/product1.jpg" },
      { code:"03", title:"CNC Machining", body:"Auto lathe and CNC turned parts. Precision machining in steel, stainless, aluminium, brass and copper alloys.", img:"/images/product3.jpg" },
      { code:"04", title:"Metal Injection Molding", body:"MIM and PIM (Powder Injection Molding) for high-volume complex metal components. Near-net shape, excellent surface finish.", img:"/images/product4.jpg" },
      { code:"05", title:"Plastic Injection Molding", body:"Custom plastic injection molded parts. ABS, PP, PC, PA, POM and engineering resins. Mold development included.", img:"/images/samples.jpg" },
      { code:"06", title:"Surface Treatment", body:"Zinc plating, nickel, chrome, anodizing, black oxide, painting and powder coating. All finishes coordinated in-house.", img:"/images/product2.jpg" },
    ],

    whyTitle: "Why Concorde Innovation?",
    whySub: "Over two decades of manufacturing expertise combined with Hong Kong's international standards.",
    whys: [
      {
        n:"01", title:"Hong Kong Entity",
        points:["Contracts and invoices in English","Payment to HK bank account — no China wire transfer risk","Full legal protection under Hong Kong commercial law","English-speaking team for seamless communication"],
      },
      {
        n:"02", title:"ISO 9001:2015 Certified",
        points:["Quality management system certified to ISO 9001:2015","All export products follow international quality standards","Rigorous incoming material inspection","Full traceability and documentation for every order"],
      },
      {
        n:"03", title:"Competitive Factory Pricing",
        points:["Direct factory pricing — no middleman markup","20+ years of supplier relationships in Guangdong","Volume pricing available from prototype to mass production","Transparent quotation with full cost breakdown"],
      },
      {
        n:"04", title:"One-Stop Solution",
        points:["From design review to delivery — one contact handles all","In-house engineering support and DFM analysis","Assembly, packaging and logistics coordination","Prototype to production under one roof"],
      },
    ],

    mfgTitle: "Manufacturing Capabilities",
    mfgSub: "State-of-the-art equipment and trained personnel in our Guangdong production facility.",
    capabilities: [
      { title:"Metal Stamping", detail:"Progressive & transfer dies, 20–400 ton presses" },
      { title:"CNC / Auto Lathe", detail:"Swiss-type, multi-spindle, ±0.01mm tolerance" },
      { title:"Injection Molding", detail:"20–1000 ton machines, multi-cavity molds" },
      { title:"MIM / PIM", detail:"Complex geometries, high-volume, net-shape" },
      { title:"Assembly", detail:"Sub-assembly, kitting, quality inspection" },
      { title:"Surface Finishing", detail:"Plating, coating, painting — in-house coordination" },
    ],

    industriesTitle: "Industries Served",
    industries: [
      { icon:"💻", name:"Office Equipment & Accessories" },
      { icon:"🔧", name:"Industrial Equipment" },
      { icon:"🚗", name:"Automotive Components" },
      { icon:"⚡", name:"Electronics & Electrical" },
      { icon:"🏥", name:"Medical Devices" },
      { icon:"🏠", name:"Consumer Products" },
    ],

    ctaTitle: "Ready to Start Your Project?",
    ctaSub: "Send us your drawings or enquiry. We respond within 48 hours with a competitive quote.",
    ctaBtn: "Get a Free Quote",
  },

  zhTW: {
    badge: "20年以上製造卓越",
    h1a: "精密零件。",
    h1b: "香港品質。",
    h1c: "工廠直供價格。",
    sub: "協和精工是一家香港製造商，為歐洲、美洲及亞洲客戶供應精密金屬及塑膠零件。ISO 9001:2015認證，一個聯絡窗口，工廠直供定價。",
    cta1: "立即詢價",
    cta2: "我們的產品",
    trust: "深受歐洲、北美及亞洲客戶信賴",
    statsTitle: "數字說明一切",
    stats: [
      { val:"20+", label:"年業務經驗" },
      { val:"70%", label:"出口歐洲" },
      { val:"25%", label:"出口美洲" },
      { val:"ISO", label:"9001:2015認證" },
    ],
    productsTitle: "我們的產品",
    productsSub: "全系列精密金屬及塑膠零件——在廣東廠房製造，出口全球。",
    products: [
      { code:"01", title:"金屬及塑膠金屬零件", body:"定制金屬零件、塑膠金屬組合件及半成品組裝，高精度、嚴公差、任何數量。", img:"/images/hero-main.jpg" },
      { code:"02", title:"沖壓及鈑金件", body:"金屬沖壓、鈑金加工及不鏽鋼零件，連續模、單工位、複雜幾何形狀。", img:"/images/product1.jpg" },
      { code:"03", title:"CNC加工件", body:"自動車床及CNC車削零件，精密加工鋼、不鏽鋼、鋁、黃銅及銅合金。", img:"/images/product3.jpg" },
      { code:"04", title:"金屬注射成型", body:"MIM及PIM粉末注射成型，適合大批量複雜金屬零件，近淨形，表面光潔度優良。", img:"/images/product4.jpg" },
      { code:"05", title:"塑膠注塑成型", body:"定制塑膠注塑零件，ABS、PP、PC、PA、POM及工程塑料，包含模具開發。", img:"/images/samples.jpg" },
      { code:"06", title:"表面處理", body:"鍍鋅、鍍鎳、鍍鉻、陽極氧化、發黑、噴漆及粉末塗層，一站式協調。", img:"/images/product2.jpg" },
    ],
    whyTitle: "為何選擇協和精工？",
    whySub: "二十多年製造專業，結合香港國際標準。",
    whys: [
      {
        n:"01", title:"香港實體",
        points:["英文合約及發票","付款至香港銀行賬戶——無中國電匯風險","受香港商業法律全面保障","英語團隊，溝通無障礙"],
      },
      {
        n:"02", title:"ISO 9001:2015認證",
        points:["品質管理體系通過ISO 9001:2015認證","所有出口產品符合國際品質標準","嚴格的來料檢驗","每份訂單全程追溯及文件記錄"],
      },
      {
        n:"03", title:"工廠直供競爭定價",
        points:["工廠直供定價——無中間商加價","廣東20年以上供應商關係","從打樣到量產均可提供批量定價","透明報價，包含完整成本明細"],
      },
      {
        n:"04", title:"一站式解決方案",
        points:["從設計審查到交貨，一個聯絡處理所有事宜","內部工程支援及DFM分析","組裝、包裝及物流統籌","打樣至量產一條龍服務"],
      },
    ],
    mfgTitle: "製造能力",
    mfgSub: "廣東廠房配備最先進設備及訓練有素的人員。",
    capabilities: [
      { title:"金屬沖壓", detail:"連續模及轉移模，20至400噸壓力機" },
      { title:"CNC/自動車床", detail:"瑞士型、多主軸，公差±0.01mm" },
      { title:"注塑成型", detail:"20至1000噸機器，多腔模具" },
      { title:"MIM/PIM", detail:"複雜幾何形狀，大批量，淨形" },
      { title:"組裝", detail:"半成品組裝、套件、品質檢驗" },
      { title:"表面處理", detail:"電鍍、塗層、噴漆——一站式統籌" },
    ],
    industriesTitle: "服務行業",
    industries: [
      { icon:"💻", name:"辦公設備及配件" },
      { icon:"🔧", name:"工業設備" },
      { icon:"🚗", name:"汽車零部件" },
      { icon:"⚡", name:"電子及電氣" },
      { icon:"🏥", name:"醫療器械" },
      { icon:"🏠", name:"消費品" },
    ],
    ctaTitle: "準備開始您的項目了嗎？",
    ctaSub: "發送圖紙或詢盤，我們將在48小時內提供競爭性報價。",
    ctaBtn: "免費獲取報價",
  },

  zhCN: {
    badge: "20年以上制造卓越",
    h1a: "精密零件。",
    h1b: "香港品质。",
    h1c: "工厂直供价格。",
    sub: "协和精工是一家香港制造商，为欧洲、美洲及亚洲客户供应精密金属及塑胶零件。ISO 9001:2015认证，一个联络窗口，工厂直供定价。",
    cta1: "立即询价",
    cta2: "我们的产品",
    trust: "深受欧洲、北美及亚洲客户信赖",
    statsTitle: "数字说明一切",
    stats: [
      { val:"20+", label:"年业务经验" },
      { val:"70%", label:"出口欧洲" },
      { val:"25%", label:"出口美洲" },
      { val:"ISO", label:"9001:2015认证" },
    ],
    productsTitle: "我们的产品",
    productsSub: "全系列精密金属及塑胶零件——在广东厂房制造，出口全球。",
    products: [
      { code:"01", title:"金属及塑胶金属零件", body:"定制金属零件、塑胶金属组合件及半成品组装，高精度、严公差、任何数量。", img:"/images/hero-main.jpg" },
      { code:"02", title:"冲压及钣金件", body:"金属冲压、钣金加工及不锈钢零件，连续模、单工位、复杂几何形状。", img:"/images/product1.jpg" },
      { code:"03", title:"CNC加工件", body:"自动车床及CNC车削零件，精密加工钢、不锈钢、铝、黄铜及铜合金。", img:"/images/product3.jpg" },
      { code:"04", title:"金属注射成型", body:"MIM及PIM粉末注射成型，适合大批量复杂金属零件，近净形，表面光洁度优良。", img:"/images/product4.jpg" },
      { code:"05", title:"塑胶注塑成型", body:"定制塑胶注塑零件，ABS、PP、PC、PA、POM及工程塑料，包含模具开发。", img:"/images/samples.jpg" },
      { code:"06", title:"表面处理", body:"镀锌、镀镍、镀铬、阳极氧化、发黑、喷漆及粉末涂层，一站式协调。", img:"/images/product2.jpg" },
    ],
    whyTitle: "为何选择协和精工？",
    whySub: "二十多年制造专业，结合香港国际标准。",
    whys: [
      {
        n:"01", title:"香港实体",
        points:["英文合约及发票","付款至香港银行账户——无中国电汇风险","受香港商业法律全面保障","英语团队，沟通无障碍"],
      },
      {
        n:"02", title:"ISO 9001:2015认证",
        points:["品质管理体系通过ISO 9001:2015认证","所有出口产品符合国际品质标准","严格的来料检验","每份订单全程追溯及文件记录"],
      },
      {
        n:"03", title:"工厂直供竞争定价",
        points:["工厂直供定价——无中间商加价","广东20年以上供应商关系","从打样到量产均可提供批量定价","透明报价，包含完整成本明细"],
      },
      {
        n:"04", title:"一站式解决方案",
        points:["从设计审查到交货，一个联络处理所有事宜","内部工程支援及DFM分析","组装、包装及物流统筹","打样至量产一条龙服务"],
      },
    ],
    mfgTitle: "制造能力",
    mfgSub: "广东厂房配备最先进设备及训练有素的人员。",
    capabilities: [
      { title:"金属冲压", detail:"连续模及转移模，20至400吨压力机" },
      { title:"CNC/自动车床", detail:"瑞士型、多主轴，公差±0.01mm" },
      { title:"注塑成型", detail:"20至1000吨机器，多腔模具" },
      { title:"MIM/PIM", detail:"复杂几何形状，大批量，净形" },
      { title:"组装", detail:"半成品组装、套件、品质检验" },
      { title:"表面处理", detail:"电镀、涂层、喷漆——一站式统筹" },
    ],
    industriesTitle: "服务行业",
    industries: [
      { icon:"💻", name:"办公设备及配件" },
      { icon:"🔧", name:"工业设备" },
      { icon:"🚗", name:"汽车零部件" },
      { icon:"⚡", name:"电子及电气" },
      { icon:"🏥", name:"医疗器械" },
      { icon:"🏠", name:"消费品" },
    ],
    ctaTitle: "准备开始您的项目了吗？",
    ctaSub: "发送图纸或询盘，我们将在48小时内提供竞争性报价。",
    ctaBtn: "免费获取报价",
  },
};

const C = {
  navy:"#1B2D4F", navyDark:"#111e35", navyLight:"#e8ecf2", navyFaint:"#1B2D4F0d",
  silver:"#C0C0C0", silverDark:"#8a8a8a",
  text:"#1a1a2e", textMid:"#4a5568", textLight:"#8a95a3",
  bg:"#f5f6f8", bgWhite:"#ffffff", bgPanel:"#f0f2f5", border:"#dde2ea",
  green:"#22c55e",
};

function Img({ src, alt, ratio="60%", style={} }) {
  return (
    <div style={{ position:"relative", width:"100%", paddingBottom:ratio, overflow:"hidden", background:C.bgPanel, border:`1.5px dashed ${C.border}`, ...style }}>
      {src
        ? <img src={src} alt={alt||""} style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }}/>
        : <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:10, color:C.silver, letterSpacing:".16em", textTransform:"uppercase" }}>{alt}</span>
          </div>
      }
    </div>
  );
}

export default function Home({ lang = "en" }) {
  const [scrolled, setScrolled] = useState(false);
  const t = T[lang] || T.en;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ fontFamily:"'Rajdhani','Barlow',sans-serif", background:C.bg, color:C.text }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Barlow:wght@300;400;500&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .fu{animation:fadeUp .75s cubic-bezier(.16,1,.3,1) both}
        .d1{animation-delay:.06s}.d2{animation-delay:.18s}.d3{animation-delay:.30s}.d4{animation-delay:.44s}
        .eyebrow{font-family:'Rajdhani',sans-serif;font-size:11px;font-weight:600;letter-spacing:.26em;text-transform:uppercase;color:${C.navy};margin-bottom:14px;display:flex;align-items:center;gap:10px}
        .eyebrow::before{content:'';display:inline-block;width:28px;height:1.5px;background:linear-gradient(90deg,${C.navy},${C.silver})}
        .btn-navy{display:inline-flex;align-items:center;gap:8px;background:${C.navy};color:#fff;font-family:'Rajdhani',sans-serif;font-size:13px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:13px 28px;border:none;cursor:pointer;text-decoration:none;transition:background .2s,transform .15s}
        .btn-navy:hover{background:${C.navyDark};transform:translateY(-1px)}
        .btn-outline{display:inline-flex;align-items:center;gap:8px;background:transparent;color:${C.navy};font-family:'Rajdhani',sans-serif;font-size:13px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;padding:12px 28px;border:1.5px solid ${C.navy}55;cursor:pointer;text-decoration:none;transition:border-color .2s,background .2s}
        .btn-outline:hover{border-color:${C.navy};background:${C.navyFaint}}
        .prod-card{background:${C.bgWhite};border:1px solid ${C.border};border-top:3px solid transparent;overflow:hidden;transition:border-top-color .25s,box-shadow .2s,transform .2s}
        .prod-card:hover{border-top-color:${C.navy};box-shadow:0 8px 28px rgba(27,45,79,.09);transform:translateY(-2px)}
        .why-card{background:${C.bgWhite};border:1px solid ${C.border};border-top:3px solid ${C.navy};padding:1.75rem}
        .cap-item{background:${C.bgWhite};border:1px solid ${C.border};padding:1.25rem 1.5rem;border-left:3px solid transparent;transition:border-left-color .2s}
        .cap-item:hover{border-left-color:${C.navy}}
        .mq-track{display:flex;animation:marquee 28s linear infinite;width:max-content}
        .mq-item{font-family:'Rajdhani',sans-serif;font-size:11px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:${C.textLight};padding:13px 32px;border-right:1px solid ${C.border};white-space:nowrap}
        @media(max-width:960px){.two-col,.three-col{grid-template-columns:1fr!important}.four-col{grid-template-columns:1fr 1fr!important}.px{padding-left:20px!important;padding-right:20px!important}}
      `}</style>

      {/* ── HERO ── */}
      <section className="px" style={{ minHeight:"100vh", display:"grid", gridTemplateColumns:"1fr 1fr", alignItems:"center", gap:56, padding:"120px 48px 80px", background:`linear-gradient(155deg,${C.bgWhite} 0%,${C.bg} 60%,${C.navyLight} 100%)`, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, zIndex:0, backgroundImage:`radial-gradient(${C.navy}18 1px,transparent 1px)`, backgroundSize:"32px 32px" }}/>
        <div style={{ position:"absolute", right:0, top:0, bottom:0, width:4, background:`linear-gradient(180deg,transparent,${C.navy},${C.silver}77,transparent)`, opacity:.5 }}/>

        <div style={{ position:"relative", zIndex:1 }}>
          <div className="fu d1" style={{ display:"inline-flex", alignItems:"center", gap:8, background:C.bgWhite, border:`1px solid ${C.border}`, borderLeft:`3px solid ${C.green}`, padding:"6px 16px", marginBottom:32, fontFamily:"'Rajdhani',sans-serif", fontSize:11, fontWeight:600, letterSpacing:".16em", color:C.textLight, textTransform:"uppercase" }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:C.green, display:"inline-block" }}/>
            {t.badge}
          </div>
          <h1 className="fu d2" style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:"clamp(38px,5vw,72px)", fontWeight:700, lineHeight:1.08, color:C.text, marginBottom:4 }}>{t.h1a}</h1>
          <h1 className="fu d2" style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:"clamp(38px,5vw,72px)", fontWeight:700, lineHeight:1.08, color:C.navy, marginBottom:4 }}>{t.h1b}</h1>
          <h1 className="fu d2" style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:"clamp(38px,5vw,72px)", fontWeight:700, lineHeight:1.08, color:C.text, marginBottom:28 }}>{t.h1c}</h1>
          <p className="fu d3" style={{ fontFamily:"'Barlow',sans-serif", fontSize:15, fontWeight:300, color:C.textMid, lineHeight:1.85, marginBottom:36, maxWidth:480 }}>{t.sub}</p>
          <div className="fu d4" style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:28 }}>
            <Link to="/contact" className="btn-navy">{t.cta1}</Link>
            <Link to="/products" className="btn-outline">{t.cta2}</Link>
          </div>
          <div style={{ fontFamily:"'Barlow',sans-serif", fontSize:12, color:C.textLight }}>
            🇺🇸 🇬🇧 🇩🇪 🇫🇷 🇦🇺 &nbsp;{t.trust}
          </div>
        </div>

        <div style={{ position:"relative", zIndex:1 }}>
          <Img src="/images/hero-main.jpg" alt="Precision parts" ratio="68%"/>
          <div style={{ position:"absolute", bottom:-18, left:-18, background:C.navy, padding:"14px 20px", boxShadow:`0 8px 28px rgba(27,45,79,.28)` }}>
            <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:9, fontWeight:600, letterSpacing:".18em", color:C.silver, textTransform:"uppercase", marginBottom:2 }}>Headquarters</div>
            <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:15, fontWeight:700, color:"#fff" }}>Hong Kong 🇭🇰</div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div style={{ background:C.navy }}>
        <div className="px" style={{ maxWidth:1080, margin:"0 auto", padding:"48px 48px", display:"grid", gridTemplateColumns:"repeat(4,1fr)" }} className="four-col px">
          {t.stats.map((s,i)=>(
            <div key={i} style={{ textAlign:"center", padding:"8px 0", borderRight: i<3?`1px solid rgba(255,255,255,.12)`:"none" }}>
              <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:42, fontWeight:700, color:"#fff", lineHeight:1 }}>{s.val}</div>
              <div style={{ fontFamily:"'Barlow',sans-serif", fontSize:12, fontWeight:300, color:C.silver, marginTop:6, letterSpacing:".06em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── INDUSTRIES MARQUEE ── */}
      <div style={{ background:C.bgWhite, borderBottom:`1px solid ${C.border}`, overflow:"hidden" }}>
        <div className="mq-track">
          {[...t.industries,...t.industries].map((ind,i)=>(
            <span key={i} className="mq-item">{ind.icon} {ind.name}</span>
          ))}
        </div>
      </div>

      {/* ── PRODUCTS ── */}
      <section className="px" style={{ padding:"90px 48px", background:C.bg }}>
        <div style={{ maxWidth:1080, margin:"0 auto" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:48, flexWrap:"wrap", gap:16 }}>
            <div>
              <div className="eyebrow">{t.productsTitle}</div>
              <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:15, fontWeight:300, color:C.textMid, maxWidth:440, lineHeight:1.8 }}>{t.productsSub}</p>
            </div>
            <Link to="/products" className="btn-outline">
              {lang==="en"?"View All Products →":lang==="zhTW"?"查看全部產品 →":"查看全部产品 →"}
            </Link>
          </div>
          <div className="three-col" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:2 }}>
            {t.products.map((p,i)=>(
              <div key={i} className="prod-card">
                <Img src={p.img} alt={p.title} ratio="52%"/>
                <div style={{ padding:"1.25rem 1.5rem" }}>
                  <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:10, fontWeight:600, letterSpacing:".2em", color:C.silverDark, marginBottom:8 }}>{p.code}</div>
                  <h3 style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:16, fontWeight:600, color:C.text, letterSpacing:".03em", marginBottom:8 }}>{p.title}</h3>
                  <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:13, fontWeight:300, color:C.textMid, lineHeight:1.75 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="px" style={{ padding:"90px 48px", background:C.bgWhite }}>
        <div style={{ maxWidth:1080, margin:"0 auto" }}>
          <div style={{ marginBottom:48 }}>
            <div className="eyebrow">{t.whyTitle}</div>
            <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:15, fontWeight:300, color:C.textMid, maxWidth:480, lineHeight:1.8 }}>{t.whySub}</p>
          </div>
          <div className="two-col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:2 }}>
            {t.whys.map((w,i)=>(
              <div key={i} className="why-card">
                <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
                  <div style={{ width:32, height:32, background:C.navy, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <span style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:13, fontWeight:700, color:"#fff" }}>{w.n}</span>
                  </div>
                  <h3 style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:17, fontWeight:600, color:C.text, letterSpacing:".03em" }}>{w.title}</h3>
                </div>
                <ul style={{ listStyle:"none", padding:0, display:"flex", flexDirection:"column", gap:8 }}>
                  {w.points.map((p,j)=>(
                    <li key={j} style={{ display:"flex", alignItems:"flex-start", gap:10 }}>
                      <svg style={{ flexShrink:0, marginTop:3 }} width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={{ fontFamily:"'Barlow',sans-serif", fontSize:13, fontWeight:300, color:C.textMid, lineHeight:1.7 }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="px" style={{ padding:"90px 48px", background:C.bg }}>
        <div style={{ maxWidth:1080, margin:"0 auto" }}>
          <div style={{ marginBottom:48 }}>
            <div className="eyebrow">{t.mfgTitle}</div>
            <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:15, fontWeight:300, color:C.textMid, maxWidth:480, lineHeight:1.8 }}>{t.mfgSub}</p>
          </div>
          <div className="three-col" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:2 }}>
            {t.capabilities.map((c,i)=>(
              <div key={i} className="cap-item">
                <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:15, fontWeight:600, color:C.text, letterSpacing:".03em", marginBottom:6 }}>{c.title}</div>
                <div style={{ fontFamily:"'Barlow',sans-serif", fontSize:12, fontWeight:300, color:C.textMid }}>{c.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO ROW ── */}
      <section className="px" style={{ padding:"0 48px 90px", background:C.bg }}>
        <div style={{ maxWidth:1080, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:2 }}>
          <Img src="/images/factory.jpg" alt="Factory floor" ratio="65%"/>
          <Img src="/images/qc.jpg" alt="Production" ratio="65%"/>
          <Img src="/images/team.jpg" alt="Team" ratio="65%"/>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px" style={{ padding:"80px 48px", background:C.navy }}>
        <div style={{ maxWidth:1080, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:32 }}>
          <div>
            <h2 style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:"clamp(24px,3vw,42px)", fontWeight:700, color:"#e8ecf2", letterSpacing:".02em", marginBottom:10 }}>{t.ctaTitle}</h2>
            <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:14, fontWeight:300, color:"rgba(255,255,255,.5)", maxWidth:480 }}>{t.ctaSub}</p>
          </div>
          <Link to="/contact" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#fff", color:C.navy, fontFamily:"'Rajdhani',sans-serif", fontSize:13, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", padding:"16px 36px", textDecoration:"none", transition:"background .2s", whiteSpace:"nowrap" }}>
            {t.ctaBtn} →
          </Link>
        </div>
      </section>
    </div>
  );
}
