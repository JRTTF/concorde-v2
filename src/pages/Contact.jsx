import { useState } from "react";

const T = {
  en: {
    badge: "Get In Touch",
    title: "Start Your Sourcing Project",
    sub: "Tell us what you need. We'll respond within 48 hours with honest advice and competitive pricing — no obligation, no sales pitch.",
    waBtn: "Chat on WhatsApp Now",
    waNote: "Fastest response — typically reply within 2 hours during HK business hours",
    orDivider: "or send us a detailed enquiry",
    formName: "Your Name *",
    formCo: "Company",
    formEmail: "Email Address *",
    formPhone: "Phone / WhatsApp",
    formCountry: "Country",
    formType: "What do you need?",
    formTypeOpts: [
      "Plastic Injection Parts",
      "Precision Metal Fasteners",
      "Both Plastic & Metal",
      "Surface Treatment",
      "Not sure — need advice",
    ],
    formQty: "Estimated Quantity",
    formQtyOpts: ["< 500 pcs","500 – 5,000 pcs","5,000 – 50,000 pcs","50,000+ pcs","Not sure yet"],
    formMsg: "Describe your product or project (material, dimensions, timeline, any special requirements)",
    formFile: "Attach drawings or reference images (STL / STEP / PDF / JPG)",
    formSubmit: "Send Enquiry →",
    formNote: "🔒  All enquiries are strictly confidential. NDA available on request. We respond within 48 hours.",
    infoTitle: "Contact Information",
    info: [
      { label:"WhatsApp", value:"+852 6633 6017", link:"https://wa.me/85266336017" },
      { label:"Email", value:"info@concordeinnovation.com", link:"mailto:info@concordeinnovation.com" },
      { label:"HQ", value:"Tuen Mun, Hong Kong 🇭🇰", link:null },
      { label:"Sourcing Region", value:"Pearl River Delta, Guangdong", link:null },
    ],
    hoursTitle: "Business Hours",
    hours: [
      { day:"Monday – Friday", time:"09:00 – 18:00 HKT" },
      { day:"Saturday", time:"09:00 – 13:00 HKT" },
      { day:"Sunday", time:"Closed" },
    ],
    faqTitle: "Quick Answers",
    faqs: [
      { q:"How fast can I get a quote?", a:"We typically respond within 48 hours with pricing from multiple factories." },
      { q:"What's the minimum order quantity?", a:"No fixed MOQ — we work with orders from 100 pcs prototypes to millions in mass production." },
      { q:"Do you sign NDAs?", a:"Yes, always. We sign an NDA before reviewing any drawings or product details." },
      { q:"How do I pay?", a:"Payment is made to our Hong Kong company bank account in USD or HKD. No direct payment to China factories." },
    ],
  },
  zhTW: {
    badge: "聯繫我們",
    title: "開始您的採購項目",
    sub: "告訴我們您的需求，我們將在48小時內提供誠實建議及競爭性報價——無任何義務，無銷售壓力。",
    waBtn: "立即 WhatsApp 聯繫",
    waNote: "最快回覆方式——香港辦公時間內通常2小時內回覆",
    orDivider: "或發送詳細詢盤",
    formName: "您的姓名 *",
    formCo: "公司名稱",
    formEmail: "電子郵件 *",
    formPhone: "電話 / WhatsApp",
    formCountry: "國家/地區",
    formType: "您需要什麼？",
    formTypeOpts: ["塑膠注塑零件","精密金屬緊固件","塑膠及五金均需要","表面處理","不確定——需要建議"],
    formQty: "預估數量",
    formQtyOpts: ["< 500件","500 – 5,000件","5,000 – 50,000件","50,000件以上","暫不確定"],
    formMsg: "描述您的產品或項目（材料、尺寸、交期、特殊要求）",
    formFile: "上傳圖紙或參考圖片（STL / STEP / PDF / JPG）",
    formSubmit: "發送詢盤 →",
    formNote: "🔒  所有詢盤嚴格保密，可應要求提供保密協議，我們將在48小時內回覆。",
    infoTitle: "聯絡資料",
    info: [
      { label:"WhatsApp", value:"+852 6633 6017", link:"https://wa.me/85266336017" },
      { label:"電子郵件", value:"info@concordeinnovation.com", link:"mailto:info@concordeinnovation.com" },
      { label:"總部", value:"香港屯門 🇭🇰", link:null },
      { label:"採購地區", value:"廣東珠三角", link:null },
    ],
    hoursTitle: "辦公時間",
    hours: [
      { day:"星期一至五", time:"09:00 – 18:00 HKT" },
      { day:"星期六", time:"09:00 – 13:00 HKT" },
      { day:"星期日", time:"休息" },
    ],
    faqTitle: "常見問題",
    faqs: [
      { q:"多快能收到報價？", a:"我們通常在48小時內提供多家工廠的競爭性報價。" },
      { q:"最低起訂量是多少？", a:"沒有固定MOQ，我們承接100件打樣到百萬件量產的訂單。" },
      { q:"你們簽保密協議嗎？", a:"是的，我們在審閱任何圖紙或產品資料前均會先簽署保密協議。" },
      { q:"如何付款？", a:"付款至我們的香港公司銀行賬戶，以美元或港幣結算，無需直接向中國工廠付款。" },
    ],
  },
  zhCN: {
    badge: "联系我们",
    title: "开始您的采购项目",
    sub: "告诉我们您的需求，我们将在48小时内提供诚实建议及竞争性报价——无任何义务，无销售压力。",
    waBtn: "立即 WhatsApp 联系",
    waNote: "最快回复方式——香港办公时间内通常2小时内回复",
    orDivider: "或发送详细询盘",
    formName: "您的姓名 *",
    formCo: "公司名称",
    formEmail: "电子邮件 *",
    formPhone: "电话 / WhatsApp",
    formCountry: "国家/地区",
    formType: "您需要什么？",
    formTypeOpts: ["塑胶注塑零件","精密金属紧固件","塑胶及五金均需要","表面处理","不确定——需要建议"],
    formQty: "预估数量",
    formQtyOpts: ["< 500件","500 – 5,000件","5,000 – 50,000件","50,000件以上","暂不确定"],
    formMsg: "描述您的产品或项目（材料、尺寸、交期、特殊要求）",
    formFile: "上传图纸或参考图片（STL / STEP / PDF / JPG）",
    formSubmit: "发送询盘 →",
    formNote: "🔒  所有询盘严格保密，可应要求提供保密协议，我们将在48小时内回复。",
    infoTitle: "联络资料",
    info: [
      { label:"WhatsApp", value:"+852 6633 6017", link:"https://wa.me/85266336017" },
      { label:"电子邮件", value:"info@concordeinnovation.com", link:"mailto:info@concordeinnovation.com" },
      { label:"总部", value:"香港屯门 🇭🇰", link:null },
      { label:"采购地区", value:"广东珠三角", link:null },
    ],
    hoursTitle: "办公时间",
    hours: [
      { day:"周一至周五", time:"09:00 – 18:00 HKT" },
      { day:"周六", time:"09:00 – 13:00 HKT" },
      { day:"周日", time:"休息" },
    ],
    faqTitle: "常见问题",
    faqs: [
      { q:"多快能收到报价？", a:"我们通常在48小时内提供多家工厂的竞争性报价。" },
      { q:"最低起订量是多少？", a:"没有固定MOQ，我们承接100件打样到百万件量产的订单。" },
      { q:"你们签保密协议吗？", a:"是的，我们在审阅任何图纸或产品资料前均会先签署保密协议。" },
      { q:"如何付款？", a:"付款至我们的香港公司银行账户，以美元或港币结算，无需直接向中国工厂付款。" },
    ],
  },
};

const C = {
  navy:"#1B2D4F", navyDark:"#111e35", navyFaint:"#1B2D4F0d",
  silver:"#C0C0C0", silverDark:"#8a8a8a",
  text:"#1a1a2e", textMid:"#4a5568", textLight:"#8a95a3",
  bg:"#f5f6f8", bgWhite:"#ffffff", bgPanel:"#f0f2f5", border:"#dde2ea",
  green:"#22c55e", wa:"#25D366",
};

export default function Contact({ lang = "en" }) {
  const t = T[lang] || T.en;
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily:"'Rajdhani','Barlow',sans-serif", background:C.bg, color:C.text, minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Barlow:wght@300;400;500&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        .f-input{width:100%;background:${C.bgWhite};border:1px solid ${C.border};color:${C.text};font-family:'Barlow',sans-serif;font-size:14px;padding:12px 16px;outline:none;transition:border-color .2s,box-shadow .2s}
        .f-input:focus{border-color:${C.navy}88;box-shadow:0 0 0 3px ${C.navy}10}
        .f-input::placeholder{color:#bbb}
        .eyebrow{font-family:'Rajdhani',sans-serif;font-size:11px;font-weight:600;letter-spacing:.26em;text-transform:uppercase;color:${C.navy};margin-bottom:12px;display:flex;align-items:center;gap:10px}
        .eyebrow::before{content:'';display:inline-block;width:28px;height:1.5px;background:linear-gradient(90deg,${C.navy},${C.silver})}
        .faq-item{border-bottom:1px solid ${C.border};cursor:pointer;transition:background .2s}
        .faq-item:hover{background:${C.bgPanel}}
        .wa-btn{display:inline-flex;align-items:center;justify-content:center;gap:12px;background:${C.wa};color:#fff;font-family:'Rajdhani',sans-serif;font-size:16px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:18px 40px;border:none;cursor:pointer;text-decoration:none;width:100%;transition:background .2s,transform .15s}
        .wa-btn:hover{background:#1da851;transform:translateY(-1px)}
        .btn-navy{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:${C.navy};color:#fff;font-family:'Rajdhani',sans-serif;font-size:13px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:14px 28px;border:none;cursor:pointer;width:100%;transition:background .2s,transform .15s}
        .btn-navy:hover{background:${C.navyDark};transform:translateY(-1px)}
        .info-row{padding:16px 0;border-bottom:1px solid ${C.border};display:flex;flex-direction:column;gap:3px}
        .info-row:last-child{border-bottom:none}
        @media(max-width:900px){.contact-grid{grid-template-columns:1fr!important}.px{padding-left:20px!important;padding-right:20px!important}}
      `}</style>

      {/* Hero strip */}
      <div style={{ background:C.navy, padding:"80px 48px 60px" }} className="px">
        <div style={{ maxWidth:1080, margin:"0 auto" }}>
          <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:11, fontWeight:600, letterSpacing:".26em", textTransform:"uppercase", color:C.silver, marginBottom:16, display:"flex", alignItems:"center", gap:10 }}>
            <span style={{ display:"inline-block", width:28, height:1.5, background:`linear-gradient(90deg,${C.silver},transparent)` }}/>
            {t.badge}
          </div>
          <h1 style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:"clamp(32px,4vw,58px)", fontWeight:700, color:"#e8ecf2", lineHeight:1.1, letterSpacing:".02em", marginBottom:16 }}>
            {t.title}
          </h1>
          <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:15, fontWeight:300, color:"rgba(255,255,255,.55)", maxWidth:560, lineHeight:1.85 }}>
            {t.sub}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="px" style={{ padding:"60px 48px 90px" }}>
        <div style={{ maxWidth:1080, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1.6fr", gap:56 }} className="contact-grid">

          {/* Left column */}
          <div>
            {/* WhatsApp CTA */}
            <div style={{ marginBottom:32 }}>
              <a href="https://wa.me/85266336017" target="_blank" rel="noopener noreferrer" className="wa-btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t.waBtn}
              </a>
              <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:12, fontWeight:300, color:C.textLight, marginTop:10, textAlign:"center", lineHeight:1.6 }}>
                {t.waNote}
              </p>
            </div>

            {/* Divider */}
            <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:32 }}>
              <div style={{ flex:1, height:1, background:C.border }}/>
              <span style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:11, fontWeight:600, letterSpacing:".14em", color:C.textLight, textTransform:"uppercase", whiteSpace:"nowrap" }}>{t.orDivider}</span>
              <div style={{ flex:1, height:1, background:C.border }}/>
            </div>

            {/* Contact info */}
            <div style={{ background:C.bgWhite, border:`1px solid ${C.border}`, borderTop:`3px solid ${C.navy}`, padding:"1.5rem", marginBottom:24 }}>
              <div className="eyebrow">{t.infoTitle}</div>
              {t.info.map((c,i)=>(
                <div key={i} className="info-row">
                  <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:10, fontWeight:600, letterSpacing:".2em", color:C.textLight, textTransform:"uppercase" }}>{c.label}</div>
                  {c.link
                    ? <a href={c.link} style={{ fontFamily:"'Barlow',sans-serif", fontSize:14, color:C.navy, textDecoration:"none" }}>{c.value}</a>
                    : <div style={{ fontFamily:"'Barlow',sans-serif", fontSize:14, color:C.text }}>{c.value}</div>
                  }
                </div>
              ))}
            </div>

            {/* Hours */}
            <div style={{ background:C.bgWhite, border:`1px solid ${C.border}`, padding:"1.5rem", marginBottom:24 }}>
              <div className="eyebrow">{t.hoursTitle}</div>
              {t.hours.map((h,i)=>(
                <div key={i} style={{ display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom: i<t.hours.length-1?`1px solid ${C.border}`:"none" }}>
                  <span style={{ fontFamily:"'Barlow',sans-serif", fontSize:13, color:C.textMid }}>{h.day}</span>
                  <span style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:13, fontWeight:600, color: h.time==="Closed"||h.time==="休息"?C.textLight:C.navy }}>{h.time}</span>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div style={{ background:C.bgWhite, border:`1px solid ${C.border}`, padding:"1.5rem" }}>
              <div className="eyebrow">{t.faqTitle}</div>
              {t.faqs.map((f,i)=>(
                <div key={i} className="faq-item" onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"14px 0" }}>
                    <span style={{ fontFamily:"'Barlow',sans-serif", fontSize:13, fontWeight:500, color:C.text, paddingRight:16 }}>{f.q}</span>
                    <span style={{ color:C.navy, fontSize:18, fontWeight:300, flexShrink:0, transition:"transform .2s", transform:openFaq===i?"rotate(45deg)":"rotate(0deg)" }}>+</span>
                  </div>
                  {openFaq===i&&(
                    <div style={{ fontFamily:"'Barlow',sans-serif", fontSize:13, fontWeight:300, color:C.textMid, lineHeight:1.75, paddingBottom:14 }}>{f.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right column — enquiry form */}
          <div>
            {submitted ? (
              <div style={{ background:C.bgWhite, border:`1px solid ${C.border}`, borderTop:`3px solid ${C.green}`, padding:"3rem 2rem", textAlign:"center" }}>
                <div style={{ fontSize:48, marginBottom:16 }}>✅</div>
                <h3 style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:24, fontWeight:700, color:C.text, marginBottom:12 }}>
                  {lang==="en"?"Enquiry Received!":lang==="zhTW"?"詢盤已收到！":"询盘已收到！"}
                </h3>
                <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:14, fontWeight:300, color:C.textMid, lineHeight:1.8, maxWidth:360, margin:"0 auto 24px" }}>
                  {lang==="en"?"We'll get back to you within 48 hours. For urgent matters, please WhatsApp us directly.":
                   lang==="zhTW"?"我們將在48小時內回覆您。如有緊急事項，請直接WhatsApp我們。":
                   "我们将在48小时内回复您。如有紧急事项，请直接WhatsApp我们。"}
                </p>
                <a href="https://wa.me/85266336017" target="_blank" rel="noopener noreferrer" className="wa-btn" style={{ maxWidth:300, margin:"0 auto" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Us
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background:C.bgWhite, border:`1px solid ${C.border}`, borderTop:`3px solid ${C.navy}`, padding:"2rem" }}>
                <div className="eyebrow" style={{ marginBottom:24 }}>Enquiry Form</div>
                <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                    <input className="f-input" placeholder={t.formName} required/>
                    <input className="f-input" placeholder={t.formCo}/>
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                    <input className="f-input" type="email" placeholder={t.formEmail} required/>
                    <input className="f-input" placeholder={t.formPhone}/>
                  </div>
                  <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                    <input className="f-input" placeholder={t.formCountry}/>
                    <select className="f-input" style={{ appearance:"none", cursor:"pointer" }}>
                      <option value="" disabled>{t.formType}</option>
                      {t.formTypeOpts.map((o,i)=><option key={i}>{o}</option>)}
                    </select>
                  </div>
                  <select className="f-input" style={{ appearance:"none", cursor:"pointer" }}>
                    <option value="" disabled>{t.formQty}</option>
                    {t.formQtyOpts.map((o,i)=><option key={i}>{o}</option>)}
                  </select>
                  <textarea className="f-input" rows={5} style={{ resize:"vertical" }} placeholder={t.formMsg}/>
                  <label style={{ display:"flex", alignItems:"center", gap:12, padding:"12px 16px", background:C.bg, border:`1.5px dashed ${C.border}`, cursor:"pointer" }}
                    onMouseEnter={e=>e.currentTarget.style.borderColor=C.navy}
                    onMouseLeave={e=>e.currentTarget.style.borderColor=C.border}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1v10M4 5l4-4 4 4M2 13h12" stroke={C.silver} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span style={{ fontFamily:"'Barlow',sans-serif", fontSize:12, color:C.textLight }}>{t.formFile}</span>
                    <input type="file" multiple accept=".stl,.step,.stp,.iges,.igs,.pdf,.jpg,.jpeg,.png" style={{ display:"none" }}/>
                  </label>
                  <button type="submit" className="btn-navy">{t.formSubmit}</button>
                  <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:11, color:C.textLight, lineHeight:1.7, textAlign:"center" }}>{t.formNote}</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
