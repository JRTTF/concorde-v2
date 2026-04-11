import { useState } from "react";
import { Link } from "react-router-dom";

const T = {
  en: {
    badge: "Our Products",
    title: "Plastic Injection & Precision Metal Parts",
    sub: "Specialising in plastic injection molding and cold forged metal fasteners — manufactured in Guangdong and exported worldwide for 20+ years.",
    cats: ["All","Plastic Injection","Cold Forging & Metal","Surface Treatment"],
    products: [
      // PLASTIC - main focus
      { cat:"Plastic Injection", title:"Custom Plastic Injection Molding", desc:"ABS, PP, PC, PA, POM and engineering resins. From 100-piece prototypes to mass production. Tight tolerances, consistent quality.", img:"/images/plastic-speaker-angle.jpg" },
      { cat:"Plastic Injection", title:"Consumer Electronics Housing", desc:"Bluetooth speaker housings, electronic enclosures and device shells. Complex multi-part assemblies with snap fits and inserts.", img:"/images/plastic-speaker-red.jpg" },
      { cat:"Plastic Injection", title:"Portable Speaker Shell", desc:"High-quality portable Bluetooth speaker housing. Rugged design with integrated handle, multi-colour options available.", img:"/images/plastic-speaker-grey.jpg" },
      { cat:"Plastic Injection", title:"Industrial Enclosure & Tray", desc:"Black ABS injection moulded industrial tray and enclosures. Custom hole patterns, ribs and mounting features.", img:"/images/plastic-tray.jpg" },
      { cat:"Plastic Injection", title:"Electronic Control Box", desc:"Black plastic electronic control box with green PCB terminal blocks. Custom cavities, wall thickness and surface finish.", img:"/images/plastic-enclosure1.jpg" },
      { cat:"Plastic Injection", title:"Cosmetic Packaging Components", desc:"Precision plastic caps, lids and jars for cosmetic and personal care. Chrome, pearl and metallic surface finishes.", img:"/images/plastic-cosmetic1.jpg" },
      { cat:"Plastic Injection", title:"Perfume Cap & Closure", desc:"Luxury perfume bottle cap with insert. High-gloss finish, tight dimensional tolerances for cap-to-bottle fit.", img:"/images/plastic-cap1.jpg" },
      { cat:"Plastic Injection", title:"Transparent Plastic Clip", desc:"Crystal-clear precision plastic clips and fasteners. PC/PMMA material, excellent clarity and dimensional accuracy.", img:"/images/plastic-clip1.jpg" },
      { cat:"Plastic Injection", title:"Coloured Fan Blade Components", desc:"Multi-colour injection moulded fan blade components. PP material, multiple colours in single production run.", img:"/images/plastic-fans.jpg" },
      { cat:"Plastic Injection", title:"Plastic Rod & Profile", desc:"Custom plastic rods and cylindrical profiles. PP, ABS and nylon. Injection moulded for tight length and diameter tolerances.", img:"/images/plastic-rod.jpg" },
      { cat:"Plastic Injection", title:"Mold & Tooling Development", desc:"Single and multi-cavity mold development. Full DFM analysis, T0/T1/T2 trial runs. Mold ownership stays with you.", img:"/images/factory-injection.jpg" },
      { cat:"Plastic Injection", title:"Overmolding & Insert Molding", desc:"Two-shot molding, metal insert encapsulation and soft-touch TPU/TPE overmolding for complex product designs.", img:"/images/plastic-ball-black.jpg" },
      // METAL - secondary
      { cat:"Cold Forging & Metal", title:"Cold Forged Set Screws", desc:"Stainless steel and carbon steel set screws. Hex socket, slotted and various tip types. High-volume cold forging.", img:"/images/product-setscrew.jpg" },
      { cat:"Cold Forging & Metal", title:"Ball Plunger Screws", desc:"Stainless steel and brass ball point set screws. Spring-loaded ball tip for positioning and detent applications.", img:"/images/product-ballscrew.jpg" },
      { cat:"Cold Forging & Metal", title:"Mixed Precision Fasteners", desc:"Full range of screws, bolts, nuts and special fasteners. Stainless steel, carbon steel, brass and copper. Custom specs welcome.", img:"/images/product-mixed.jpg" },
      { cat:"Cold Forging & Metal", title:"Copper & Brass Weld Studs", desc:"Copper weld studs, brass inserts and standoffs for welding and press-fit applications. Various sizes and thread specs.", img:"/images/product-copper.jpg" },
      { cat:"Cold Forging & Metal", title:"Ball-End & Special Screws", desc:"Specialty ball-end plunger assemblies in stainless and brass. Gold, silver and blue anodized finish options.", img:"/images/product-plunger.jpg" },
      { cat:"Cold Forging & Metal", title:"Aluminium Insert Components", desc:"Precision aluminium threaded inserts for plastic assemblies. Heat-set and press-fit options for injection moulded parts.", img:"/images/product-insert.jpg" },
      // SURFACE
      { cat:"Surface Treatment", title:"Zinc & Nickel Plating", desc:"Zinc plating, nickel plating, chrome and black oxide for all metal fasteners. Full material certs provided.", img:"/images/product-knurled.jpg" },
      { cat:"Surface Treatment", title:"Painting & Powder Coating", desc:"Spray painting, powder coating, pad printing and silk screen. Coordinated across all plastic and metal products.", img:"/images/product-black.jpg" },
    ],
    ctaTitle: "Request a Quote",
    ctaSub: "Send us your drawings or specifications. We respond within 48 hours.",
    ctaBtn: "Get a Free Quote →",
  },
  zhTW: {
    badge: "我們的產品",
    title: "塑膠注塑及精密金屬零件",
    sub: "專注塑膠注塑及冷鍛精密緊固件——在廣東製造，出口全球逾20年。",
    cats: ["全部","塑膠注塑","冷鍛及五金","表面處理"],
    products: [
      { cat:"塑膠注塑", title:"定制塑膠注塑成型", desc:"ABS、PP、PC、PA、POM及工程塑料，從100件打樣到量產，嚴格公差，品質穩定。", img:"/images/plastic-speaker-angle.jpg" },
      { cat:"塑膠注塑", title:"消費電子外殼", desc:"藍牙喇叭外殼、電子外殼及設備殼體，複雜多件組件，含卡扣及嵌件。", img:"/images/plastic-speaker-red.jpg" },
      { cat:"塑膠注塑", title:"便攜喇叭外殼", desc:"高質量便攜藍牙喇叭外殼，堅固設計，一體手提，多色選擇。", img:"/images/plastic-speaker-grey.jpg" },
      { cat:"塑膠注塑", title:"工業外殼及托盤", desc:"黑色ABS注塑工業托盤及外殼，定制孔位、加強筋及安裝特徵。", img:"/images/plastic-tray.jpg" },
      { cat:"塑膠注塑", title:"電子控制盒", desc:"黑色塑膠電子控制盒，配綠色PCB接線端子，定制腔體、壁厚及表面處理。", img:"/images/plastic-enclosure1.jpg" },
      { cat:"塑膠注塑", title:"化妝品包裝零件", desc:"化妝品及個人護理精密塑膠蓋、瓶蓋及瓶子，可提供鍍鉻、珍珠及金屬光澤表面。", img:"/images/plastic-cosmetic1.jpg" },
      { cat:"塑膠注塑", title:"香水瓶蓋及封口", desc:"奢華香水瓶蓋含嵌件，高光澤表面，蓋與瓶配合嚴格尺寸公差。", img:"/images/plastic-cap1.jpg" },
      { cat:"塑膠注塑", title:"透明塑膠夾件", desc:"水晶透明精密塑膠夾及緊固件，PC/PMMA材料，優良透明度及尺寸精度。", img:"/images/plastic-clip1.jpg" },
      { cat:"塑膠注塑", title:"彩色風扇葉片零件", desc:"多色注塑風扇葉片零件，PP材料，單次生產多種顏色。", img:"/images/plastic-fans.jpg" },
      { cat:"塑膠注塑", title:"塑膠棒及型材", desc:"定制塑膠棒及圓形型材，PP、ABS及尼龍，注塑成型確保嚴格長度及直徑公差。", img:"/images/plastic-rod.jpg" },
      { cat:"塑膠注塑", title:"模具及工具開發", desc:"單腔及多腔模具開發，完整DFM分析，T0/T1/T2試模，模具所有權歸客戶。", img:"/images/factory-injection.jpg" },
      { cat:"塑膠注塑", title:"包覆及嵌件成型", desc:"雙料成型、金屬嵌件包覆及軟觸感TPU/TPE包覆，適用複雜產品設計。", img:"/images/plastic-ball-black.jpg" },
      { cat:"冷鍛及五金", title:"冷鍛頂絲", desc:"不鏽鋼及碳鋼頂絲，六角槽、一字槽及各種端頭類型，大批量冷鍛。", img:"/images/product-setscrew.jpg" },
      { cat:"冷鍛及五金", title:"滾珠頂絲", desc:"不鏽鋼及黃銅球頭頂絲，彈簧加載球頭，適用於定位及定位應用。", img:"/images/product-ballscrew.jpg" },
      { cat:"冷鍛及五金", title:"混合精密緊固件", desc:"全系列螺絲、螺栓、螺母及特殊緊固件，不鏽鋼、碳鋼、黃銅及銅，歡迎定制。", img:"/images/product-mixed.jpg" },
      { cat:"冷鍛及五金", title:"銅及黃銅焊接螺柱", desc:"銅焊接螺柱、黃銅嵌件及支柱，適用於焊接及壓入應用，多種尺寸及螺紋規格。", img:"/images/product-copper.jpg" },
      { cat:"冷鍛及五金", title:"球頭及特殊螺絲", desc:"不鏽鋼及黃銅特殊球頭柱塞組件，金色、銀色及藍色陽極氧化飾面選擇。", img:"/images/product-plunger.jpg" },
      { cat:"冷鍛及五金", title:"鋁製嵌件零件", desc:"塑膠組件用精密鋁製螺紋嵌件，熱壓及壓入選項，適用於注塑零件。", img:"/images/product-insert.jpg" },
      { cat:"表面處理", title:"鍍鋅及鍍鎳", desc:"所有金屬緊固件的鍍鋅、鍍鎳、鍍鉻及發黑，提供完整材料認證。", img:"/images/product-knurled.jpg" },
      { cat:"表面處理", title:"噴漆及粉末塗層", desc:"噴漆、粉末塗層、移印及絲印，統籌所有塑膠及金屬產品。", img:"/images/product-black.jpg" },
    ],
    ctaTitle: "立即詢價",
    ctaSub: "發送圖紙或規格，我們將在48小時內回覆。",
    ctaBtn: "免費獲取報價 →",
  },
  zhCN: {
    badge: "我们的产品",
    title: "塑胶注塑及精密金属零件",
    sub: "专注塑胶注塑及冷锻精密紧固件——在广东制造，出口全球逾20年。",
    cats: ["全部","塑胶注塑","冷锻及五金","表面处理"],
    products: [
      { cat:"塑胶注塑", title:"定制塑胶注塑成型", desc:"ABS、PP、PC、PA、POM及工程塑料，从100件打样到量产，严格公差，品质稳定。", img:"/images/plastic-speaker-angle.jpg" },
      { cat:"塑胶注塑", title:"消费电子外壳", desc:"蓝牙喇叭外壳、电子外壳及设备壳体，复杂多件组件，含卡扣及嵌件。", img:"/images/plastic-speaker-red.jpg" },
      { cat:"塑胶注塑", title:"便携喇叭外壳", desc:"高质量便携蓝牙喇叭外壳，坚固设计，一体手提，多色选择。", img:"/images/plastic-speaker-grey.jpg" },
      { cat:"塑胶注塑", title:"工业外壳及托盘", desc:"黑色ABS注塑工业托盘及外壳，定制孔位、加强筋及安装特征。", img:"/images/plastic-tray.jpg" },
      { cat:"塑胶注塑", title:"电子控制盒", desc:"黑色塑胶电子控制盒，配绿色PCB接线端子，定制腔体、壁厚及表面处理。", img:"/images/plastic-enclosure1.jpg" },
      { cat:"塑胶注塑", title:"化妆品包装零件", desc:"化妆品及个人护理精密塑胶盖、瓶盖及瓶子，可提供镀铬、珍珠及金属光泽表面。", img:"/images/plastic-cosmetic1.jpg" },
      { cat:"塑胶注塑", title:"香水瓶盖及封口", desc:"奢华香水瓶盖含嵌件，高光泽表面，盖与瓶配合严格尺寸公差。", img:"/images/plastic-cap1.jpg" },
      { cat:"塑胶注塑", title:"透明塑胶夹件", desc:"水晶透明精密塑胶夹及紧固件，PC/PMMA材料，优良透明度及尺寸精度。", img:"/images/plastic-clip1.jpg" },
      { cat:"塑胶注塑", title:"彩色风扇叶片零件", desc:"多色注塑风扇叶片零件，PP材料，单次生产多种颜色。", img:"/images/plastic-fans.jpg" },
      { cat:"塑胶注塑", title:"塑胶棒及型材", desc:"定制塑胶棒及圆形型材，PP、ABS及尼龙，注塑成型确保严格长度及直径公差。", img:"/images/plastic-rod.jpg" },
      { cat:"塑胶注塑", title:"模具及工具开发", desc:"单腔及多腔模具开发，完整DFM分析，T0/T1/T2试模，模具所有权归客户。", img:"/images/factory-injection.jpg" },
      { cat:"塑胶注塑", title:"包覆及嵌件成型", desc:"双料成型、金属嵌件包覆及软触感TPU/TPE包覆，适用复杂产品设计。", img:"/images/plastic-ball-black.jpg" },
      { cat:"冷锻及五金", title:"冷锻顶丝", desc:"不锈钢及碳钢顶丝，六角槽、一字槽及各种端头类型，大批量冷锻。", img:"/images/product-setscrew.jpg" },
      { cat:"冷锻及五金", title:"滚珠顶丝", desc:"不锈钢及黄铜球头顶丝，弹簧加载球头，适用于定位及定位应用。", img:"/images/product-ballscrew.jpg" },
      { cat:"冷锻及五金", title:"混合精密紧固件", desc:"全系列螺丝、螺栓、螺母及特殊紧固件，不锈钢、碳钢、黄铜及铜，欢迎定制。", img:"/images/product-mixed.jpg" },
      { cat:"冷锻及五金", title:"铜及黄铜焊接螺柱", desc:"铜焊接螺柱、黄铜嵌件及支柱，适用于焊接及压入应用，多种尺寸及螺纹规格。", img:"/images/product-copper.jpg" },
      { cat:"冷锻及五金", title:"球头及特殊螺丝", desc:"不锈钢及黄铜特殊球头柱塞组件，金色、银色及蓝色阳极氧化饰面选择。", img:"/images/product-plunger.jpg" },
      { cat:"冷锻及五金", title:"铝制嵌件零件", desc:"塑胶组件用精密铝制螺纹嵌件，热压及压入选项，适用于注塑零件。", img:"/images/product-insert.jpg" },
      { cat:"表面处理", title:"镀锌及镀镍", desc:"所有金属紧固件的镀锌、镀镍、镀铬及发黑，提供完整材料认证。", img:"/images/product-knurled.jpg" },
      { cat:"表面处理", title:"喷漆及粉末涂层", desc:"喷漆、粉末涂层、移印及丝印，统筹所有塑胶及金属产品。", img:"/images/product-black.jpg" },
    ],
    ctaTitle: "立即询价",
    ctaSub: "发送图纸或规格，我们将在48小时内回复。",
    ctaBtn: "免费获取报价 →",
  },
};

const C = {
  navy:"#1B2D4F", navyDark:"#111e35", navyFaint:"#1B2D4F0d",
  silver:"#C0C0C0", text:"#1a1a2e", textMid:"#4a5568", textLight:"#8a95a3",
  bg:"#f5f6f8", bgWhite:"#ffffff", border:"#dde2ea",
};

const CAT_COLORS = {
  "Plastic Injection":"#0ea5e9","塑膠注塑":"#0ea5e9","塑胶注塑":"#0ea5e9",
  "Cold Forging & Metal":"#64748b","冷鍛及五金":"#64748b","冷锻及五金":"#64748b",
  "Surface Treatment":"#8b5cf6","表面處理":"#8b5cf6","表面处理":"#8b5cf6",
};

export default function Services({ lang = "en" }) {
  const t = T[lang] || T.en;
  const [active, setActive] = useState(t.cats[0]);

  const allKey = t.cats[0];
  const filtered = active === allKey ? t.products : t.products.filter(p => p.cat === active);

  return (
    <div style={{ fontFamily:"'Rajdhani','Barlow',sans-serif", background:C.bg, color:C.text }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Barlow:wght@300;400;500&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        .eyebrow{font-family:'Rajdhani',sans-serif;font-size:11px;font-weight:600;letter-spacing:.26em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:14px;display:flex;align-items:center;gap:10px}
        .eyebrow::before{content:'';display:inline-block;width:28px;height:1.5px;background:rgba(255,255,255,.3)}
        .cat-btn{font-family:'Rajdhani',sans-serif;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;background:none;border:none;border-bottom:2px solid transparent;color:#8a95a3;padding:16px 20px;cursor:pointer;transition:all .2s;white-space:nowrap}
        .cat-btn:hover{color:${C.navy}}
        .cat-btn.on{color:${C.navy};border-bottom-color:${C.navy}}
        .prod-card{background:${C.bgWhite};border:1px solid ${C.border};overflow:hidden;transition:box-shadow .2s,transform .15s;cursor:default}
        .prod-card:hover{box-shadow:0 8px 28px rgba(27,45,79,.1);transform:translateY(-3px)}
        .prod-img{width:100%;aspect-ratio:1;object-fit:cover;display:block;background:#f0f2f5}
        .btn-wh{display:inline-flex;align-items:center;background:#fff;color:${C.navy};font-family:'Rajdhani',sans-serif;font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:14px 32px;text-decoration:none;transition:opacity .2s}
        .btn-wh:hover{opacity:.85}
        @media(max-width:1100px){.grid{grid-template-columns:repeat(3,1fr)!important}}
        @media(max-width:760px){.grid{grid-template-columns:1fr 1fr!important}.px{padding-left:20px!important;padding-right:20px!important}}
        @media(max-width:480px){.grid{grid-template-columns:1fr!important}}
      `}</style>

      {/* HERO */}
      <div style={{ background:C.navy, padding:"90px 48px 60px" }} className="px">
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div className="eyebrow">{t.badge}</div>
          <h1 style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:"clamp(28px,4vw,54px)", fontWeight:700, color:"#e8ecf2", lineHeight:1.1, marginBottom:18 }}>{t.title}</h1>
          <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:15, fontWeight:300, color:"rgba(255,255,255,.5)", maxWidth:580, lineHeight:1.85 }}>{t.sub}</p>

          {/* Stats */}
          <div style={{ display:"flex", gap:40, marginTop:40, flexWrap:"wrap" }}>
            {[["12+","Plastic Products"],["6+","Metal Products"],["20+","Years Experience"],["ISO","9001:2015"]].map(([v,l])=>(
              <div key={l}>
                <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:32, fontWeight:700, color:"#fff", lineHeight:1 }}>{v}</div>
                <div style={{ fontFamily:"'Barlow',sans-serif", fontSize:11, fontWeight:300, color:"rgba(255,255,255,.4)", marginTop:4, letterSpacing:".06em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STICKY FILTER TAB BAR */}
      <div style={{ background:C.bgWhite, borderBottom:`1px solid ${C.border}`, position:"sticky", top:66, zIndex:100 }}>
        <div className="px" style={{ maxWidth:1200, margin:"0 auto", padding:"0 48px", display:"flex", overflowX:"auto" }}>
          {t.cats.map((c,i)=>(
            <button key={i} className={`cat-btn ${active===c?"on":""}`} onClick={()=>setActive(c)}>{c}</button>
          ))}
          <div style={{ marginLeft:"auto", display:"flex", alignItems:"center", paddingRight:4 }}>
            <span style={{ fontFamily:"'Barlow',sans-serif", fontSize:12, color:C.textLight, whiteSpace:"nowrap" }}>
              {filtered.length} {lang==="en"?"items":lang==="zhTW"?"個產品":"个产品"}
            </span>
          </div>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <section className="px" style={{ padding:"40px 48px 80px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div className="grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16 }}>
            {filtered.map((p,i)=>(
              <div key={i} className="prod-card">
                <div style={{ position:"relative" }}>
                  <img src={p.img} alt={p.title} className="prod-img"
                    onError={e=>{ e.target.style.minHeight="200px"; e.target.style.background="#f0f2f5"; e.target.style.display="block"; }}/>
                  <div style={{ position:"absolute", top:10, left:10, background: CAT_COLORS[p.cat]||C.navy, color:"#fff", fontFamily:"'Rajdhani',sans-serif", fontSize:9, fontWeight:600, letterSpacing:".14em", textTransform:"uppercase", padding:"3px 8px" }}>
                    {p.cat}
                  </div>
                </div>
                <div style={{ padding:"1rem 1.1rem 1.25rem" }}>
                  <h3 style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:14, fontWeight:600, color:C.text, letterSpacing:".03em", marginBottom:6, lineHeight:1.3 }}>{p.title}</h3>
                  <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:11, fontWeight:300, color:C.textMid, lineHeight:1.7 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px" style={{ padding:"70px 48px", background:C.navy }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:32 }}>
          <div>
            <h2 style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:"clamp(22px,3vw,40px)", fontWeight:700, color:"#e8ecf2", marginBottom:10 }}>{t.ctaTitle}</h2>
            <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:14, fontWeight:300, color:"rgba(255,255,255,.5)", maxWidth:440 }}>{t.ctaSub}</p>
          </div>
          <Link to="/contact" className="btn-wh">{t.ctaBtn}</Link>
        </div>
      </section>
    </div>
  );
}
