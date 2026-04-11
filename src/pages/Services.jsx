import { useState } from "react";
import { Link } from "react-router-dom";

const T = {
  en: {
    badge: "Our Products",
    title: "Full Range of Precision Components",
    sub: "Metal parts, plastic components and surface finishing — manufactured in our Guangdong facility and exported worldwide for over 20 years.",
    filterAll: "All", filterMetal: "Metal", filterPlastic: "Plastic",
    products: [
      { code:"01", cat:"Metal", tag:"Metal & Plastic-Metal",
        title:"Metal & Plastic-Metal Parts",
        hero:"Custom metal components and plastic-metal combination parts. High precision, tight tolerances, any volume — from prototypes to mass production.",
        points:["Stainless steel, carbon steel, brass, copper, aluminium","Plastic-metal combination and insert parts","Sub-assembly and component kitting","Prototype to high-volume production","Full dimensional inspection reports"],
        img:"/images/product-flatlay.jpg" },
      { code:"02", cat:"Metal", tag:"Stamping",
        title:"Stamping & Sheet Metal",
        hero:"Metal stamping and sheet metal fabrication. Progressive dies, single-station and transfer tooling for complex geometries at high volume.",
        points:["Progressive and single-station die stamping","Sheet metal bending, forming and welding","Stainless steel, carbon steel, copper alloys","Tolerances down to ±0.05mm","High-volume capacity with consistent quality"],
        img:"/images/product-assorted.jpg" },
      { code:"03", cat:"Metal", tag:"CNC Machining",
        title:"CNC & Auto Lathe Machining",
        hero:"Precision CNC turned and milled parts. Swiss-type and multi-spindle auto lathes for complex, tight-tolerance components.",
        points:["CNC turning, milling and grinding","Swiss-type and multi-spindle auto lathe","Steel, stainless, aluminium, brass, copper","Tolerances to ±0.01mm","Complete inspection with CMM verification"],
        img:"/images/factory-cnc-row.jpg" },
      { code:"04", cat:"Metal", tag:"MIM / PIM",
        title:"Metal Injection Molding (MIM)",
        hero:"Powder Injection Molding for complex, high-volume metal components. Near-net shape forming with excellent mechanical properties.",
        points:["Metal Injection Molding (MIM)","Ceramic Injection Molding (CIM)","Complex geometries impossible with machining","High-volume, consistent quality","Excellent surface finish — minimal post-processing"],
        img:"/images/product-brass.jpg" },
      { code:"05", cat:"Plastic", tag:"Injection Molding",
        title:"Plastic Injection Molding",
        hero:"Custom plastic injection molded components. Engineering resins, multi-cavity molds, from prototype tooling to full production.",
        points:["ABS, PP, PC, PA, POM, PMMA, TPU and more","Single and multi-cavity mold development","Overmolding, insert molding, two-shot","Tolerances to ±0.05mm","DFM analysis and first article included"],
        img:"/images/plastic-speaker-angle.jpg" },
      { code:"06", cat:"Both", tag:"Surface Treatment",
        title:"Surface Treatment & Finishing",
        hero:"Complete surface finishing coordination across all product types. One quote covers everything from plating to painting.",
        points:["Zinc plating, nickel, chrome plating","Anodizing — clear, black, colour","Black oxide, phosphating","Spray painting, powder coating","Pad printing, silk screen, laser engraving"],
        img:"/images/product-mixed.jpg" },
    ],
    isoTitle: "ISO 9001:2015 Certified",
    isoBody: "Our Guangdong manufacturing facility is accredited to ISO 9001:2015 quality management standards. All export products undergo rigorous quality control — from incoming material inspection to final dimensional verification before shipment.",
    ctaTitle: "Request a Quote",
    ctaSub: "Send us your drawings or specifications. We'll respond within 48 hours with competitive pricing.",
    ctaBtn: "Get a Free Quote →",
  },
  zhTW: {
    badge: "我們的產品",
    title: "全系列精密零件",
    sub: "金屬零件、塑膠零件及表面處理——在廣東廠房製造，出口全球逾20年。",
    filterAll: "全部", filterMetal: "金屬", filterPlastic: "塑膠",
    products: [
      { code:"01", cat:"Metal", tag:"金屬及塑膠金屬",
        title:"金屬及塑膠金屬零件",
        hero:"定制金屬零件及塑膠金屬組合件，高精度、嚴公差，任何數量——從打樣到量產。",
        points:["不鏽鋼、碳鋼、黃銅、銅、鋁","塑膠金屬組合及嵌件零件","半成品組裝及套件","打樣至大批量生產","完整尺寸檢驗報告"],
        img:"/images/product-flatlay.jpg" },
      { code:"02", cat:"Metal", tag:"沖壓",
        title:"沖壓及鈑金件",
        hero:"金屬沖壓及鈑金加工，連續模、單工位及轉移模，適合大批量複雜幾何形狀。",
        points:["連續模及單工位模沖壓","鈑金折彎、成型及焊接","不鏽鋼、碳鋼、銅合金","公差低至±0.05mm","大批量產能，品質穩定"],
        img:"/images/product-assorted.jpg" },
      { code:"03", cat:"Metal", tag:"CNC加工",
        title:"CNC及自動車床加工",
        hero:"精密CNC車削及銑削零件，瑞士型及多主軸自動車床，適合複雜高精度零件。",
        points:["CNC車削、銑削及磨削","瑞士型及多主軸自動車床","鋼、不鏽鋼、鋁、黃銅、銅","公差至±0.01mm","三坐標測量機完整檢驗"],
        img:"/images/factory-cnc-row.jpg" },
      { code:"04", cat:"Metal", tag:"MIM/PIM",
        title:"金屬注射成型（MIM）",
        hero:"粉末注射成型，適合複雜大批量金屬零件，近淨形成型，力學性能優良。",
        points:["金屬注射成型（MIM）","陶瓷注射成型（CIM）","複雜幾何形狀，機加工難以實現","大批量，品質穩定","表面光潔度優良，後處理少"],
        img:"/images/product-brass.jpg" },
      { code:"05", cat:"Plastic", tag:"注塑成型",
        title:"塑膠注塑成型",
        hero:"定制塑膠注塑零件，工程塑料，多腔模具，從打樣模具到全量產。",
        points:["ABS、PP、PC、PA、POM、PMMA、TPU等","單腔及多腔模具開發","包覆成型、嵌件成型、雙料成型","公差至±0.05mm","包含DFM分析及首件檢驗"],
        img:"/images/plastic-speaker-angle.jpg" },
      { code:"06", cat:"Both", tag:"表面處理",
        title:"表面處理及光飾",
        hero:"所有產品類型的完整表面處理統籌，一份報價涵蓋從電鍍到噴漆的所有工序。",
        points:["鍍鋅、鍍鎳、鍍鉻","陽極氧化——透明、黑色、彩色","發黑、磷化","噴漆、粉末塗層","移印、絲印、激光雕刻"],
        img:"/images/product-mixed.jpg" },
    ],
    isoTitle: "ISO 9001:2015認證",
    isoBody: "我們的廣東製造廠房通過ISO 9001:2015品質管理標準認證。所有出口產品均經過嚴格品質控制——從來料檢驗到出貨前最終尺寸驗證。",
    ctaTitle: "立即詢價",
    ctaSub: "發送圖紙或規格，我們將在48小時內提供競爭性報價。",
    ctaBtn: "免費獲取報價 →",
  },
  zhCN: {
    badge: "我们的产品",
    title: "全系列精密零件",
    sub: "金属零件、塑胶零件及表面处理——在广东厂房制造，出口全球逾20年。",
    filterAll: "全部", filterMetal: "金属", filterPlastic: "塑胶",
    products: [
      { code:"01", cat:"Metal", tag:"金属及塑胶金属",
        title:"金属及塑胶金属零件",
        hero:"定制金属零件及塑胶金属组合件，高精度、严公差，任何数量——从打样到量产。",
        points:["不锈钢、碳钢、黄铜、铜、铝","塑胶金属组合及嵌件零件","半成品组装及套件","打样至大批量生产","完整尺寸检验报告"],
        img:"/images/product-flatlay.jpg" },
      { code:"02", cat:"Metal", tag:"冲压",
        title:"冲压及钣金件",
        hero:"金属冲压及钣金加工，连续模、单工位及转移模，适合大批量复杂几何形状。",
        points:["连续模及单工位模冲压","钣金折弯、成型及焊接","不锈钢、碳钢、铜合金","公差低至±0.05mm","大批量产能，品质稳定"],
        img:"/images/product-assorted.jpg" },
      { code:"03", cat:"Metal", tag:"CNC加工",
        title:"CNC及自动车床加工",
        hero:"精密CNC车削及铣削零件，瑞士型及多主轴自动车床，适合复杂高精度零件。",
        points:["CNC车削、铣削及磨削","瑞士型及多主轴自动车床","钢、不锈钢、铝、黄铜、铜","公差至±0.01mm","三坐标测量机完整检验"],
        img:"/images/factory-cnc-row.jpg" },
      { code:"04", cat:"Metal", tag:"MIM/PIM",
        title:"金属注射成型（MIM）",
        hero:"粉末注射成型，适合复杂大批量金属零件，近净形成型，力学性能优良。",
        points:["金属注射成型（MIM）","陶瓷注射成型（CIM）","复杂几何形状，机加工难以实现","大批量，品质稳定","表面光洁度优良，后处理少"],
        img:"/images/product-brass.jpg" },
      { code:"05", cat:"Plastic", tag:"注塑成型",
        title:"塑胶注塑成型",
        hero:"定制塑胶注塑零件，工程塑料，多腔模具，从打样模具到全量产。",
        points:["ABS、PP、PC、PA、POM、PMMA、TPU等","单腔及多腔模具开发","包覆成型、嵌件成型、双料成型","公差至±0.05mm","包含DFM分析及首件检验"],
        img:"/images/plastic-speaker-angle.jpg" },
      { code:"06", cat:"Both", tag:"表面处理",
        title:"表面处理及光饰",
        hero:"所有产品类型的完整表面处理统筹，一份报价涵盖从电镀到喷漆的所有工序。",
        points:["镀锌、镀镍、镀铬","阳极氧化——透明、黑色、彩色","发黑、磷化","喷漆、粉末涂层","移印、丝印、激光雕刻"],
        img:"/images/product-mixed.jpg" },
    ],
    isoTitle: "ISO 9001:2015认证",
    isoBody: "我们的广东制造厂房通过ISO 9001:2015品质管理标准认证。所有出口产品均经过严格品质控制——从来料检验到出货前最终尺寸验证。",
    ctaTitle: "立即询价",
    ctaSub: "发送图纸或规格，我们将在48小时内提供竞争性报价。",
    ctaBtn: "免费获取报价 →",
  },
};

const C = {
  navy:"#1B2D4F", navyDark:"#111e35", navyFaint:"#1B2D4F0d",
  silver:"#C0C0C0", silverDark:"#8a8a8a",
  text:"#1a1a2e", textMid:"#4a5568", textLight:"#8a95a3",
  bg:"#f5f6f8", bgWhite:"#ffffff", border:"#dde2ea", green:"#22c55e",
};

function Img({ src, alt, ratio="55%" }) {
  return (
    <div style={{ position:"relative", width:"100%", paddingBottom:ratio, overflow:"hidden", background:"#f0f2f5", border:`1.5px dashed ${C.border}` }}>
      {src && <img src={src} alt={alt||""} style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }}/>}
    </div>
  );
}

export default function Services({ lang = "en" }) {
  const t = T[lang] || T.en;
  const [filter, setFilter] = useState("all");

  const filtered = t.products.filter(p => {
    if (filter === "all") return true;
    if (filter === "metal") return p.cat === "Metal" || p.cat === "Both";
    if (filter === "plastic") return p.cat === "Plastic" || p.cat === "Both";
    return true;
  });

  return (
    <div style={{ fontFamily:"'Rajdhani','Barlow',sans-serif", background:C.bg, color:C.text }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Barlow:wght@300;400;500&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        .eyebrow{font-family:'Rajdhani',sans-serif;font-size:11px;font-weight:600;letter-spacing:.26em;text-transform:uppercase;color:${C.silver};margin-bottom:14px;display:flex;align-items:center;gap:10px}
        .eyebrow::before{content:'';display:inline-block;width:28px;height:1.5px;background:linear-gradient(90deg,${C.silver},transparent)}
        .btn-navy{display:inline-flex;align-items:center;gap:8px;background:${C.navy};color:#fff;font-family:'Rajdhani',sans-serif;font-size:13px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:14px 32px;border:none;cursor:pointer;text-decoration:none;transition:background .2s}
        .btn-navy:hover{background:${C.navyDark}}
        .filter-btn{font-family:'Rajdhani',sans-serif;font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;background:none;border:1px solid ${C.border};color:${C.textLight};padding:7px 20px;cursor:pointer;transition:all .2s}
        .filter-btn:hover,.filter-btn.on{background:${C.navy};border-color:${C.navy};color:#fff}
        .prod-card{background:${C.bgWhite};border:1px solid ${C.border};overflow:hidden}
        .point-item{display:flex;align-items:flex-start;gap:10px;padding:8px 0;border-bottom:1px solid ${C.border}}
        .point-item:last-child{border-bottom:none}
        @media(max-width:900px){.two-col{grid-template-columns:1fr!important}.px{padding-left:20px!important;padding-right:20px!important}}
      `}</style>

      {/* HERO */}
      <div style={{ background:C.navy, padding:"90px 48px 60px" }} className="px">
        <div style={{ maxWidth:1080, margin:"0 auto" }}>
          <div className="eyebrow">{t.badge}</div>
          <h1 style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:"clamp(32px,4.5vw,60px)", fontWeight:700, color:"#e8ecf2", lineHeight:1.1, marginBottom:18 }}>{t.title}</h1>
          <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:15, fontWeight:300, color:"rgba(255,255,255,.5)", maxWidth:560, lineHeight:1.85 }}>{t.sub}</p>
        </div>
      </div>

      {/* PRODUCTS */}
      <section className="px" style={{ padding:"60px 48px 90px" }}>
        <div style={{ maxWidth:1080, margin:"0 auto" }}>
          {/* Filter */}
          <div style={{ display:"flex", gap:4, marginBottom:40 }}>
            {[["all",t.filterAll],["metal",t.filterMetal],["plastic",t.filterPlastic]].map(([k,l])=>(
              <button key={k} className={`filter-btn ${filter===k?"on":""}`} onClick={()=>setFilter(k)}>{l}</button>
            ))}
          </div>

          {/* Product cards */}
          <div style={{ display:"flex", flexDirection:"column", gap:2 }}>
            {filtered.map((p,i)=>(
              <div key={i} className="prod-card">
                <div className="two-col" style={{ display:"grid", gridTemplateColumns: i%2===0?"1fr 1.2fr":"1.2fr 1fr" }}>
                  {i%2===0 ? <>
                    <div style={{ padding:"2.5rem" }}>
                      <div style={{ display:"flex", gap:8, marginBottom:16, alignItems:"center" }}>
                        <span style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:10, fontWeight:600, letterSpacing:".2em", color:C.navy, background:C.navyFaint, border:`1px solid ${C.navy}22`, padding:"3px 10px" }}>{p.tag}</span>
                        <span style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:10, color:C.silverDark, letterSpacing:".18em" }}>{p.code}</span>
                      </div>
                      <h2 style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:24, fontWeight:700, color:C.text, letterSpacing:".02em", marginBottom:12 }}>{p.title}</h2>
                      <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:14, fontWeight:300, color:C.textMid, lineHeight:1.85, marginBottom:20 }}>{p.hero}</p>
                      <div>
                        {p.points.map((pt,j)=>(
                          <div key={j} className="point-item">
                            <svg style={{ flexShrink:0, marginTop:3 }} width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            <span style={{ fontFamily:"'Barlow',sans-serif", fontSize:13, fontWeight:300, color:C.textMid, lineHeight:1.7 }}>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Img src={p.img} alt={p.title} ratio="65%"/>
                  </> : <>
                    <Img src={p.img} alt={p.title} ratio="65%"/>
                    <div style={{ padding:"2.5rem" }}>
                      <div style={{ display:"flex", gap:8, marginBottom:16, alignItems:"center" }}>
                        <span style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:10, fontWeight:600, letterSpacing:".2em", color:C.navy, background:C.navyFaint, border:`1px solid ${C.navy}22`, padding:"3px 10px" }}>{p.tag}</span>
                        <span style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:10, color:C.silverDark, letterSpacing:".18em" }}>{p.code}</span>
                      </div>
                      <h2 style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:24, fontWeight:700, color:C.text, letterSpacing:".02em", marginBottom:12 }}>{p.title}</h2>
                      <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:14, fontWeight:300, color:C.textMid, lineHeight:1.85, marginBottom:20 }}>{p.hero}</p>
                      <div>
                        {p.points.map((pt,j)=>(
                          <div key={j} className="point-item">
                            <svg style={{ flexShrink:0, marginTop:3 }} width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            <span style={{ fontFamily:"'Barlow',sans-serif", fontSize:13, fontWeight:300, color:C.textMid, lineHeight:1.7 }}>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO STRIP */}
      <div className="px" style={{ background:C.navyFaint, borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}`, padding:"40px 48px" }}>
        <div style={{ maxWidth:1080, margin:"0 auto", display:"flex", gap:24, alignItems:"flex-start" }}>
          <div style={{ width:48, height:48, background:C.navy, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div>
            <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:16, fontWeight:700, color:C.navy, letterSpacing:".06em", marginBottom:6 }}>{t.isoTitle}</div>
            <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:13, fontWeight:300, color:C.textMid, lineHeight:1.8, maxWidth:700 }}>{t.isoBody}</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="px" style={{ padding:"80px 48px", background:C.navy }}>
        <div style={{ maxWidth:1080, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:32 }}>
          <div>
            <h2 style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:"clamp(24px,3vw,40px)", fontWeight:700, color:"#e8ecf2", marginBottom:10 }}>{t.ctaTitle}</h2>
            <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:14, fontWeight:300, color:"rgba(255,255,255,.5)", maxWidth:440 }}>{t.ctaSub}</p>
          </div>
          <Link to="/contact" className="btn-navy" style={{ background:"#fff", color:C.navy }}>{t.ctaBtn}</Link>
        </div>
      </section>
    </div>
  );
}
