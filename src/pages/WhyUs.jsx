import { Link } from "react-router-dom";

const T = {
  en: {
    badge: "Why Choose Us",
    title: "A Responsible & Technically Proficient Manufacturer",
    sub: "For over 20 years, Concorde Innovation has exported precision metal and plastic components to clients across Europe, the Americas, Asia and beyond.",

    advantages: [
      { n:"01", icon:"🏭", title:"Own Factory, Experienced Team",
        body:"We operate our own manufacturing facility in Guangdong with a stable, experienced workforce.",
        points:[
          "80% of our production staff have worked with us for over 10 years",
          "In-house engineering team with 15+ years average experience",
          "9,500 sq.m. of production space across Shenzhen and Dongguan",
          "Full range of equipment: stamping, CNC, injection molding, MIM",
          "Stable workforce means consistent quality order after order",
        ]},
      { n:"02", icon:"✅", title:"ISO 9001:2015 Certified Quality",
        body:"We follow rigorous international quality standards at every stage — from raw material to finished product.",
        points:[
          "ISO 9001:2015 certified (Cert. No. 21424Q0221R0S, valid to July 2027)",
          "100% product inspection before every shipment",
          "CMM, hardness tester and roughness meter in-house",
          "Full inspection report included: dimensions, material certs, heat treatment data",
          "Operation instructions issued once sample is approved",
        ]},
      { n:"03", icon:"💰", title:"Competitive Pricing, Small Orders Welcome",
        body:"Direct factory pricing with no intermediary markup. We work with clients of all sizes.",
        points:[
          "Factory-direct pricing — no middleman, no hidden markup",
          "Small orders welcomed — no unreasonable MOQ",
          "Quotation within 48 hours of receiving drawings",
          "50% deposit, balance before shipment — flexible for established clients",
          "Trade assurance available for new clients",
        ]},
      { n:"04", icon:"🎯", title:"Precision Tolerances, Tight Specs",
        body:"Our equipment and processes are built for accuracy. We regularly achieve tolerances that many factories cannot.",
        points:[
          "Tolerances within ±0.01mm achievable on CNC machined parts",
          "4-axis and 5-axis CNC with 1000-block look-ahead function",
          "Swiss-type auto lathe for complex small-diameter parts",
          "Progressive die stamping for high-volume sheet metal",
          "Multi-cavity injection molds for plastic components",
        ]},
      { n:"05", icon:"🔄", title:"One-Stop Service, Full Traceability",
        body:"From drawing to delivery, we handle everything in-house — design, tooling, production, finishing and shipping.",
        points:[
          "Mold design → mold making → production → surface treatment → assembly → packing → shipping",
          "DFM analysis and engineering feedback on your drawings",
          "Full material certification and traceability for every order",
          "NDA available — all client information kept strictly confidential",
          "Prototype samples available before mass production commitment",
        ]},
      { n:"06", icon:"🌍", title:"20+ Years Export Experience",
        body:"We have been exporting precision components to global clients for over two decades. We understand what international buyers need.",
        points:[
          "Products exported to 20+ countries across 5 continents",
          "Regular clients in UK, USA, France, Germany, Spain, Australia and more",
          "English-speaking export team — clear communication, no guesswork",
          "Experienced in international shipping, customs and documentation",
          "Hong Kong entity — payments in USD or HKD to HK bank account",
        ]},
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

    langTitle: "We Speak Your Language",
    langs: ["🇬🇧 English","🇩🇪 Deutsch","🇫🇷 Français","🇪🇸 Español","🇯🇵 日本語","🇰🇷 한국어","🇨🇳 中文"],
    langNote: "Our export team communicates fluently in multiple languages — no translation delay, no miscommunication.",

    ctaTitle: "Start Your Project Today",
    ctaSub: "Send us your drawings. Quote within 48 hours. Samples before mass production.",
    ctaBtn: "Get a Free Quote →",
  },

  zhTW: {
    badge: "為何選擇我們",
    title: "負責任且技術精湛的製造商",
    sub: "逾20年來，協和精工向歐洲、美洲、亞洲及全球各地的客戶出口精密金屬及塑膠零件。",
    advantages: [
      { n:"01", icon:"🏭", title:"自有工廠，經驗豐富的團隊",
        body:"我們在廣東擁有自己的製造廠房，擁有穩定、經驗豐富的員工隊伍。",
        points:["80%的生產員工在我們公司工作超過10年","內部工程團隊平均擁有15年以上經驗","深圳及東莞共9,500平方米的生產空間","完整設備：沖壓、CNC、注塑、MIM","穩定的員工隊伍確保訂單品質一致"] },
      { n:"02", icon:"✅", title:"ISO 9001:2015認證品質",
        body:"我們在每個環節遵循嚴格的國際品質標準——從原材料到成品。",
        points:["ISO 9001:2015認證（證書號：21424Q0221R0S，有效至2027年7月）","每次出貨前100%產品檢驗","內部三坐標測量機、硬度計及粗糙度儀","完整檢驗報告：尺寸、材料證書、熱處理數據","樣品審批後出具作業指導書"] },
      { n:"03", icon:"💰", title:"競爭定價，歡迎小訂單",
        body:"工廠直供定價，無中間商加價，我們服務各種規模的客戶。",
        points:["工廠直供定價——無中間商，無隱藏費用","歡迎小訂單，無不合理的最低起訂量","收到圖紙後48小時內報價","50%訂金，出貨前付餘款——對老客戶靈活安排","新客戶可使用貿易保障"] },
      { n:"04", icon:"🎯", title:"精密公差，嚴格規格",
        body:"我們的設備和工藝專為精度而建，我們能達到許多工廠無法實現的公差。",
        points:["CNC加工件可實現±0.01mm公差","四軸及五軸CNC，支持1000塊前瞻功能","瑞士型自動車床，適合複雜小徑零件","大批量鈑金的連續模沖壓","塑膠零件的多腔注塑模具"] },
      { n:"05", icon:"🔄", title:"一站式服務，完整追溯",
        body:"從圖紙到交貨，我們一站式處理——設計、模具、生產、表面處理及運輸。",
        points:["模具設計→製模→生產→表面處理→組裝→包裝→運輸","對您圖紙的DFM分析及工程反饋","每份訂單完整材料認證及追溯性","可提供保密協議——客戶資料嚴格保密","量產前可提供打樣"] },
      { n:"06", icon:"🌍", title:"20年以上出口經驗",
        body:"我們向全球客戶出口精密零件已逾二十年，深諳國際買家的需求。",
        points:["產品出口至五大洲20多個國家","英國、美國、法國、德國、西班牙、澳洲等長期客戶","英語出口團隊——溝通清晰，無猜測","精通國際運輸、海關及文件","香港實體——以美元或港幣付款至香港銀行賬戶"] },
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
    langTitle: "我們說您的語言",
    langs: ["🇬🇧 English","🇩🇪 Deutsch","🇫🇷 Français","🇪🇸 Español","🇯🇵 日本語","🇰🇷 한국어","🇨🇳 中文"],
    langNote: "我們的出口團隊能流利溝通多種語言——無翻譯延誤，無溝通誤解。",
    ctaTitle: "立即開始您的項目",
    ctaSub: "發送圖紙，48小時內報價，量產前提供打樣。",
    ctaBtn: "免費獲取報價 →",
  },

  zhCN: {
    badge: "为何选择我们",
    title: "负责任且技术精湛的制造商",
    sub: "逾20年来，协和精工向欧洲、美洲、亚洲及全球各地的客户出口精密金属及塑胶零件。",
    advantages: [
      { n:"01", icon:"🏭", title:"自有工厂，经验丰富的团队",
        body:"我们在广东拥有自己的制造厂房，拥有稳定、经验丰富的员工队伍。",
        points:["80%的生产员工在我们公司工作超过10年","内部工程团队平均拥有15年以上经验","深圳及东莞共9,500平方米的生产空间","完整设备：冲压、CNC、注塑、MIM","稳定的员工队伍确保订单品质一致"] },
      { n:"02", icon:"✅", title:"ISO 9001:2015认证品质",
        body:"我们在每个环节遵循严格的国际品质标准——从原材料到成品。",
        points:["ISO 9001:2015认证（证书号：21424Q0221R0S，有效至2027年7月）","每次出货前100%产品检验","内部三坐标测量机、硬度计及粗糙度仪","完整检验报告：尺寸、材料证书、热处理数据","样品审批后出具作业指导书"] },
      { n:"03", icon:"💰", title:"竞争定价，欢迎小订单",
        body:"工厂直供定价，无中间商加价，我们服务各种规模的客户。",
        points:["工厂直供定价——无中间商，无隐藏费用","欢迎小订单，无不合理的最低起订量","收到图纸后48小时内报价","50%订金，出货前付余款——对老客户灵活安排","新客户可使用贸易保障"] },
      { n:"04", icon:"🎯", title:"精密公差，严格规格",
        body:"我们的设备和工艺专为精度而建，我们能达到许多工厂无法实现的公差。",
        points:["CNC加工件可实现±0.01mm公差","四轴及五轴CNC，支持1000块前瞻功能","瑞士型自动车床，适合复杂小径零件","大批量钣金的连续模冲压","塑胶零件的多腔注塑模具"] },
      { n:"05", icon:"🔄", title:"一站式服务，完整追溯",
        body:"从图纸到交货，我们一站式处理——设计、模具、生产、表面处理及运输。",
        points:["模具设计→制模→生产→表面处理→组装→包装→运输","对您图纸的DFM分析及工程反馈","每份订单完整材料认证及追溯性","可提供保密协议——客户资料严格保密","量产前可提供打样"] },
      { n:"06", icon:"🌍", title:"20年以上出口经验",
        body:"我们向全球客户出口精密零件已逾二十年，深谙国际买家的需求。",
        points:["产品出口至五大洲20多个国家","英国、美国、法国、德国、西班牙、澳洲等长期客户","英语出口团队——沟通清晰，无猜测","精通国际运输、海关及文件","香港实体——以美元或港币付款至香港银行账户"] },
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
    langTitle: "我们说您的语言",
    langs: ["🇬🇧 English","🇩🇪 Deutsch","🇫🇷 Français","🇪🇸 Español","🇯🇵 日本語","🇰🇷 한국어","🇨🇳 中文"],
    langNote: "我们的出口团队能流利沟通多种语言——无翻译延误，无沟通误解。",
    ctaTitle: "立即开始您的项目",
    ctaSub: "发送图纸，48小时内报价，量产前提供打样。",
    ctaBtn: "免费获取报价 →",
  },
};

const C = {
  navy:"#1B2D4F", navyDark:"#111e35", navyFaint:"#1B2D4F0d",
  silver:"#C0C0C0", silverDark:"#8a8a8a",
  text:"#1a1a2e", textMid:"#4a5568", textLight:"#8a95a3",
  bg:"#f5f6f8", bgWhite:"#ffffff", border:"#dde2ea", green:"#22c55e",
};

import { Link } from "react-router-dom";

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
        .adv-card{background:${C.bgWhite};border:1px solid ${C.border};border-top:3px solid ${C.navy};padding:0;overflow:hidden;transition:box-shadow .2s}
        .adv-card:hover{box-shadow:0 6px 24px rgba(27,45,79,.1)}
        .point-li{display:flex;align-items:flex-start;gap:10px;padding:9px 0;border-bottom:1px solid ${C.border}}
        .point-li:last-child{border-bottom:none}
        .stat-box{text-align:center;padding:24px 16px;border-right:1px solid rgba(255,255,255,.12)}
        .stat-box:last-child{border-right:none}
        .lang-pill{font-family:'Rajdhani',sans-serif;font-size:12px;font-weight:600;letter-spacing:.08em;background:${C.bgWhite};border:1px solid ${C.border};color:${C.textMid};padding:8px 16px;border-radius:0}
        .step-card{background:${C.bgWhite};border:1px solid ${C.border};border-top:3px solid ${C.navy};padding:1.5rem;text-align:center}
        @media(max-width:960px){.two-col{grid-template-columns:1fr!important}.three-col{grid-template-columns:1fr 1fr!important}.four-col{grid-template-columns:1fr 1fr!important}.px{padding-left:20px!important;padding-right:20px!important}}
        @media(max-width:600px){.three-col,.four-col{grid-template-columns:1fr!important}}
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
        <div className="px" style={{ maxWidth:1080, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)" }} className="four-col px">
          {t.stats.map((s,i)=>(
            <div key={i} className="stat-box">
              <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:40, fontWeight:700, color:"#fff", lineHeight:1 }}>{s.val}</div>
              <div style={{ fontFamily:"'Barlow',sans-serif", fontSize:12, fontWeight:300, color:C.silver, marginTop:6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ADVANTAGES — 3x2 grid */}
      <section className="px" style={{ padding:"70px 48px" }}>
        <div style={{ maxWidth:1080, margin:"0 auto" }}>
          <div className="three-col" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:2 }}>
            {t.advantages.map((a,i)=>(
              <div key={i} className="adv-card">
                <div style={{ padding:"1.5rem 1.5rem 0" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:12 }}>
                    <span style={{ fontSize:24 }}>{a.icon}</span>
                    <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:10, fontWeight:600, letterSpacing:".2em", color:C.navy }}>{a.n}</div>
                  </div>
                  <h3 style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:16, fontWeight:700, color:C.text, letterSpacing:".03em", marginBottom:10, lineHeight:1.3 }}>{a.title}</h3>
                  <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:12, fontWeight:300, color:C.textMid, lineHeight:1.75, marginBottom:14 }}>{a.body}</p>
                </div>
                <div style={{ padding:"0 1.5rem 1.5rem" }}>
                  {a.points.map((p,j)=>(
                    <div key={j} className="point-li">
                      <svg style={{ flexShrink:0, marginTop:3 }} width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span style={{ fontFamily:"'Barlow',sans-serif", fontSize:12, fontWeight:300, color:C.textMid, lineHeight:1.65 }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="px" style={{ padding:"0 48px 70px" }}>
        <div style={{ maxWidth:1080, margin:"0 auto", background:C.bgWhite, border:`1px solid ${C.border}`, borderLeft:`4px solid ${C.navy}`, padding:"1.5rem 2rem" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16 }}>
            <div>
              <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:14, fontWeight:700, color:C.text, marginBottom:4 }}>{t.langTitle}</div>
              <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:12, fontWeight:300, color:C.textMid }}>{t.langNote}</p>
            </div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
              {t.langs.map((l,i)=><span key={i} className="lang-pill">{l}</span>)}
            </div>
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

      {/* TEAM PHOTO */}
      <section className="px" style={{ padding:"0 48px 70px", background:C.bgWhite }}>
        <div style={{ maxWidth:1080, margin:"0 auto" }}>
          <div style={{ position:"relative" }}>
            <img src="/images/team.jpg" alt="Concorde Innovation team at factory" style={{ width:"100%", objectFit:"cover", display:"block", maxHeight:480 }}/>
            <div style={{ position:"absolute", bottom:0, left:0, right:0, background:"linear-gradient(transparent, rgba(27,45,79,.8))", padding:"40px 32px 24px" }}>
              <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:13, fontWeight:300, color:"rgba(255,255,255,.8)" }}>
                {lang==="en"?"Our team visiting partner factories in Guangdong — building relationships that ensure quality and reliability.":
                 lang==="zhTW"?"我們的團隊到訪廣東合作工廠——建立確保品質及可靠性的合作關係。":
                 "我们的团队到访广东合作工厂——建立确保品质及可靠性的合作关系。"}
              </p>
            </div>
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
