import { useState } from "react";
import { Link } from "react-router-dom";

const T = {
  en: {
    badge: "Our Products",
    title: "Full Range of Precision Components",
    sub: "Metal casting, CNC machining, stamping, plastic injection and more — manufactured in Guangdong and exported worldwide for 20+ years.",
    cats: ["All","Die Casting","Stamping","CNC Machining","Plastic Injection","Investment Casting","Extrusion","Surface Treatment"],
    products: [
      { cat:"Die Casting", title:"Zinc Alloy Die Casting Parts", desc:"Custom Zamak/zinc alloy die casting. High precision, complex geometries, excellent surface finish. ISO 9001 certified.", img:"/images/product-flatlay.jpg" },
      { cat:"Die Casting", title:"Aluminium Die Casting Housing", desc:"Custom IP65 aluminium die casting control box, junction enclosure and auto parts. Powder coated finish available.", img:"/images/product-assorted.jpg" },
      { cat:"Die Casting", title:"Customised Die Casting Service", desc:"High-precision metal sand mold casting. Carbon steel, zinc alloy, aluminium radiator and structural parts.", img:"/images/product-flatlay2.jpg" },
      { cat:"Stamping", title:"Precision Metal Stamping Parts", desc:"Progressive and transfer die stamping. Sheet metal fabrication, stainless steel, carbon steel and copper alloys.", img:"/images/product-flatlay3.jpg" },
      { cat:"Stamping", title:"Rose Gold Aluminium Stamping", desc:"High-end rose gold aluminium alloy intercom casing. Premium sheet metal fabrication for consumer electronics.", img:"/images/product-balldet.jpg" },
      { cat:"Stamping", title:"Sheet Metal Fabrication", desc:"Custom sheet metal bending, forming, welding and punching. Stainless steel, aluminium, carbon steel.", img:"/images/product-mixed.jpg" },
      { cat:"CNC Machining", title:"Precision CNC Machining Parts", desc:"Custom stainless steel CNC machining. 3D model, wire EDM, broaching, painted surface. ISO 9001 certified.", img:"/images/factory-cnc-row.jpg" },
      { cat:"CNC Machining", title:"5-Axis CNC Machining Centre", desc:"Precision 5-axis machining for micro mechanical parts. Milling, turning, lathing, drilling and wire EDM.", img:"/images/factory-cnc-dh600.jpg" },
      { cat:"CNC Machining", title:"Aluminium & Stainless CNC Parts", desc:"Customised CNC machining of aluminium plates and stainless steel accessories for industrial equipment.", img:"/images/factory-edm.jpg" },
      { cat:"Plastic Injection", title:"ABS Plastic Injection Moulding", desc:"OEM wall-mounted grey ABS plastic tool storage box. Custom injection moulding, ISO 9001 certified, industrial use.", img:"/images/plastic-tray.jpg" },
      { cat:"Plastic Injection", title:"Consumer Plastic Housing", desc:"Bluetooth speaker housings, electronic enclosures, cosmetic packaging. High-gloss and textured surface finishes.", img:"/images/plastic-speaker-red.jpg" },
      { cat:"Plastic Injection", title:"Cosmetic & Packaging Components", desc:"Precision plastic caps, bottles and closures. Chrome, pearl and metallic surface finishes available.", img:"/images/plastic-cosmetic1.jpg" },
      { cat:"Investment Casting", title:"Stainless Steel Lost Wax Casting", desc:"Custom stainless steel lost wax casting and OEM investment castings. Complex geometries, excellent mechanical properties.", img:"/images/product-brass.jpg" },
      { cat:"Investment Casting", title:"Precision Lock & Security Parts", desc:"Custom precise casting for intelligent lock bolt and security hardware. Lost wax process for tight tolerances.", img:"/images/product-ballscrew.jpg" },
      { cat:"Investment Casting", title:"Ductile Iron Investment Casting", desc:"Custom steel grey ductile iron casting parts. Industrial precision, powder pattern metal casting foundry.", img:"/images/product-copper.jpg" },
      { cat:"Extrusion", title:"Aluminium Extrusion Profiles", desc:"Custom aluminium extrusion profiles for industrial, architectural and electronic heat dissipation applications.", img:"/images/plastic-rod.jpg" },
      { cat:"Extrusion", title:"Plastic Extrusion Parts", desc:"Custom plastic extrusion rods, tubes and profiles. PP, ABS, PVC and engineering plastics available.", img:"/images/plastic-rods.jpg" },
      { cat:"Surface Treatment", title:"Plating & Anodizing", desc:"Zinc plating, nickel, chrome, anodizing (clear, black, colour), black oxide and phosphating for all product types.", img:"/images/product-knurled.jpg" },
      { cat:"Surface Treatment", title:"Painting & Powder Coating", desc:"Spray painting, powder coating, pad printing, silk screen printing and laser engraving coordination.", img:"/images/product-setscrew.jpg" },
      { cat:"Surface Treatment", title:"Copper & Brass Precision Parts", desc:"Copper weld studs, brass threaded inserts, terminals and electrical connectors. Tin, nickel, gold plating available.", img:"/images/product-copper.jpg" },
    ],
    ctaTitle: "Request a Quote",
    ctaSub: "Send us your drawings or specifications. We respond within 48 hours.",
    ctaBtn: "Get a Free Quote →",
  },
  zhTW: {
    badge: "我們的產品",
    title: "全系列精密零件",
    sub: "壓鑄、CNC加工、沖壓、注塑等——在廣東製造，出口全球逾20年。",
    cats: ["全部","壓鑄","沖壓","CNC加工","塑膠注塑","精密鑄造","擠出成型","表面處理"],
    products: [
      { cat:"壓鑄", title:"鋅合金壓鑄零件", desc:"定制Zamak/鋅合金壓鑄，高精度，複雜幾何形狀，優良表面光潔度，ISO 9001認證。", img:"/images/product-flatlay.jpg" },
      { cat:"壓鑄", title:"鋁合金壓鑄外殼", desc:"定制IP65鋁合金壓鑄控制盒、接線盒及汽車零件，可提供粉末噴塗表面處理。", img:"/images/product-assorted.jpg" },
      { cat:"壓鑄", title:"定制壓鑄服務", desc:"高精度金屬砂型鑄造，碳鋼、鋅合金、鋁散熱器及結構件。", img:"/images/product-flatlay2.jpg" },
      { cat:"沖壓", title:"精密金屬沖壓零件", desc:"連續模及轉移模沖壓，鈑金加工，不鏽鋼、碳鋼及銅合金。", img:"/images/product-flatlay3.jpg" },
      { cat:"沖壓", title:"玫瑰金鋁合金沖壓", desc:"高端玫瑰金鋁合金對講機外殼，適用於消費電子的高端鈑金加工。", img:"/images/product-balldet.jpg" },
      { cat:"沖壓", title:"鈑金加工", desc:"定制鈑金折彎、成型、焊接及沖孔，不鏽鋼、鋁、碳鋼。", img:"/images/product-mixed.jpg" },
      { cat:"CNC加工", title:"精密CNC加工零件", desc:"定制不鏽鋼CNC加工，3D模型、線切割、拉削、噴漆表面，ISO 9001認證。", img:"/images/factory-cnc-row.jpg" },
      { cat:"CNC加工", title:"五軸CNC加工中心", desc:"微型機械零件精密五軸加工，銑削、車削、車床、鑽削及線切割。", img:"/images/factory-cnc-dh600.jpg" },
      { cat:"CNC加工", title:"鋁及不鏽鋼CNC零件", desc:"定制工業設備用鋁板及不鏽鋼金屬配件CNC加工。", img:"/images/factory-edm.jpg" },
      { cat:"塑膠注塑", title:"ABS塑膠注塑成型", desc:"OEM壁掛式灰色ABS塑膠工具收納盒，定制注塑，ISO 9001認證，工業用途。", img:"/images/plastic-tray.jpg" },
      { cat:"塑膠注塑", title:"消費品塑膠外殼", desc:"藍牙喇叭外殼、電子外殼、化妝品包裝，高光及紋理表面處理。", img:"/images/plastic-speaker-red.jpg" },
      { cat:"塑膠注塑", title:"化妝品及包裝零件", desc:"精密塑膠蓋、瓶子及封口，可提供鍍鉻、珍珠及金屬光澤表面處理。", img:"/images/plastic-cosmetic1.jpg" },
      { cat:"精密鑄造", title:"不鏽鋼失蠟鑄造", desc:"定制不鏽鋼失蠟鑄造及OEM精密鑄造，複雜幾何形狀，優良力學性能。", img:"/images/product-brass.jpg" },
      { cat:"精密鑄造", title:"精密鎖具及安防零件", desc:"智能鎖螺栓及安防硬件定制精密鑄造，失蠟工藝確保嚴格公差。", img:"/images/product-ballscrew.jpg" },
      { cat:"精密鑄造", title:"球墨鑄鐵精密鑄造", desc:"定制鋼灰色球墨鑄鐵零件，工業精密鑄造，粉末模型金屬鑄造廠。", img:"/images/product-copper.jpg" },
      { cat:"擠出成型", title:"鋁合金擠出型材", desc:"定制鋁合金擠出型材，適用於工業、建築及電子散熱應用。", img:"/images/plastic-rod.jpg" },
      { cat:"擠出成型", title:"塑膠擠出零件", desc:"定制塑膠擠出棒、管及型材，提供PP、ABS、PVC及工程塑料。", img:"/images/plastic-rods.jpg" },
      { cat:"表面處理", title:"電鍍及陽極氧化", desc:"鍍鋅、鍍鎳、鍍鉻、陽極氧化（透明、黑色、彩色）、發黑及磷化。", img:"/images/product-knurled.jpg" },
      { cat:"表面處理", title:"噴漆及粉末塗層", desc:"噴漆、粉末塗層、移印、絲印及激光雕刻統籌。", img:"/images/product-setscrew.jpg" },
      { cat:"表面處理", title:"銅及黃銅精密零件", desc:"銅焊接螺柱、黃銅螺紋嵌件、端子及電氣連接器，可電鍍錫、鎳、金。", img:"/images/product-copper.jpg" },
    ],
    ctaTitle: "立即詢價",
    ctaSub: "發送圖紙或規格，我們將在48小時內回覆。",
    ctaBtn: "免費獲取報價 →",
  },
  zhCN: {
    badge: "我们的产品",
    title: "全系列精密零件",
    sub: "压铸、CNC加工、冲压、注塑等——在广东制造，出口全球逾20年。",
    cats: ["全部","压铸","冲压","CNC加工","塑胶注塑","精密铸造","挤出成型","表面处理"],
    products: [
      { cat:"压铸", title:"锌合金压铸零件", desc:"定制Zamak/锌合金压铸，高精度，复杂几何形状，优良表面光洁度，ISO 9001认证。", img:"/images/product-flatlay.jpg" },
      { cat:"压铸", title:"铝合金压铸外壳", desc:"定制IP65铝合金压铸控制盒、接线盒及汽车零件，可提供粉末喷涂表面处理。", img:"/images/product-assorted.jpg" },
      { cat:"压铸", title:"定制压铸服务", desc:"高精度金属砂型铸造，碳钢、锌合金、铝散热器及结构件。", img:"/images/product-flatlay2.jpg" },
      { cat:"冲压", title:"精密金属冲压零件", desc:"连续模及转移模冲压，钣金加工，不锈钢、碳钢及铜合金。", img:"/images/product-flatlay3.jpg" },
      { cat:"冲压", title:"玫瑰金铝合金冲压", desc:"高端玫瑰金铝合金对讲机外壳，适用于消费电子的高端钣金加工。", img:"/images/product-balldet.jpg" },
      { cat:"冲压", title:"钣金加工", desc:"定制钣金折弯、成型、焊接及冲孔，不锈钢、铝、碳钢。", img:"/images/product-mixed.jpg" },
      { cat:"CNC加工", title:"精密CNC加工零件", desc:"定制不锈钢CNC加工，3D模型、线切割、拉削、喷漆表面，ISO 9001认证。", img:"/images/factory-cnc-row.jpg" },
      { cat:"CNC加工", title:"五轴CNC加工中心", desc:"微型机械零件精密五轴加工，铣削、车削、车床、钻削及线切割。", img:"/images/factory-cnc-dh600.jpg" },
      { cat:"CNC加工", title:"铝及不锈钢CNC零件", desc:"定制工业设备用铝板及不锈钢金属配件CNC加工。", img:"/images/factory-edm.jpg" },
      { cat:"塑胶注塑", title:"ABS塑胶注塑成型", desc:"OEM壁挂式灰色ABS塑胶工具收纳盒，定制注塑，ISO 9001认证，工业用途。", img:"/images/plastic-tray.jpg" },
      { cat:"塑胶注塑", title:"消费品塑胶外壳", desc:"蓝牙喇叭外壳、电子外壳、化妆品包装，高光及纹理表面处理。", img:"/images/plastic-speaker-red.jpg" },
      { cat:"塑胶注塑", title:"化妆品及包装零件", desc:"精密塑胶盖、瓶子及封口，可提供镀铬、珍珠及金属光泽表面处理。", img:"/images/plastic-cosmetic1.jpg" },
      { cat:"精密铸造", title:"不锈钢失蜡铸造", desc:"定制不锈钢失蜡铸造及OEM精密铸造，复杂几何形状，优良力学性能。", img:"/images/product-brass.jpg" },
      { cat:"精密铸造", title:"精密锁具及安防零件", desc:"智能锁螺栓及安防硬件定制精密铸造，失蜡工艺确保严格公差。", img:"/images/product-ballscrew.jpg" },
      { cat:"精密铸造", title:"球墨铸铁精密铸造", desc:"定制钢灰色球墨铸铁零件，工业精密铸造，粉末模型金属铸造厂。", img:"/images/product-copper.jpg" },
      { cat:"挤出成型", title:"铝合金挤出型材", desc:"定制铝合金挤出型材，适用于工业、建筑及电子散热应用。", img:"/images/plastic-rod.jpg" },
      { cat:"挤出成型", title:"塑胶挤出零件", desc:"定制塑胶挤出棒、管及型材，提供PP、ABS、PVC及工程塑料。", img:"/images/plastic-rods.jpg" },
      { cat:"表面处理", title:"电镀及阳极氧化", desc:"镀锌、镀镍、镀铬、阳极氧化（透明、黑色、彩色）、发黑及磷化。", img:"/images/product-knurled.jpg" },
      { cat:"表面处理", title:"喷漆及粉末涂层", desc:"喷漆、粉末涂层、移印、丝印及激光雕刻统筹。", img:"/images/product-setscrew.jpg" },
      { cat:"表面处理", title:"铜及黄铜精密零件", desc:"铜焊接螺柱、黄铜螺纹嵌件、端子及电气连接器，可电镀锡、镍、金。", img:"/images/product-copper.jpg" },
    ],
    ctaTitle: "立即询价",
    ctaSub: "发送图纸或规格，我们将在48小时内回复。",
    ctaBtn: "免费获取报价 →",
  },
};

const C = {
  navy:"#1B2D4F", navyDark:"#111e35", navyFaint:"#1B2D4F0d",
  silver:"#C0C0C0", silverDark:"#8a8a8a",
  text:"#1a1a2e", textMid:"#4a5568", textLight:"#8a95a3",
  bg:"#f5f6f8", bgWhite:"#ffffff", border:"#dde2ea",
};

export default function Services({ lang = "en" }) {
  const t = T[lang] || T.en;
  const [active, setActive] = useState("All");

  const filtered = active === "All" || active === "全部"
    ? t.products
    : t.products.filter(p => p.cat === active);

  return (
    <div style={{ fontFamily:"'Rajdhani','Barlow',sans-serif", background:C.bg, color:C.text }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Barlow:wght@300;400;500&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        .eyebrow{font-family:'Rajdhani',sans-serif;font-size:11px;font-weight:600;letter-spacing:.26em;text-transform:uppercase;color:${C.silver};margin-bottom:14px;display:flex;align-items:center;gap:10px}
        .eyebrow::before{content:'';display:inline-block;width:28px;height:1.5px;background:linear-gradient(90deg,${C.silver},transparent)}
        .btn-navy{display:inline-flex;align-items:center;background:#fff;color:${C.navy};font-family:'Rajdhani',sans-serif;font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:14px 32px;text-decoration:none;transition:background .2s}
        .btn-navy:hover{background:${C.silver}}
        .cat-btn{font-family:'Rajdhani',sans-serif;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;background:${C.bgWhite};border:1px solid ${C.border};color:${C.textMid};padding:8px 16px;cursor:pointer;transition:all .2s;white-space:nowrap}
        .cat-btn:hover,.cat-btn.on{background:${C.navy};border-color:${C.navy};color:#fff}
        .prod-card{background:${C.bgWhite};border:1px solid ${C.border};overflow:hidden;transition:box-shadow .2s,transform .2s}
        .prod-card:hover{box-shadow:0 6px 24px rgba(27,45,79,.1);transform:translateY(-2px)}
        .prod-img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;background:${C.bg}}
        @media(max-width:900px){.grid{grid-template-columns:1fr 1fr!important}.px{padding-left:20px!important;padding-right:20px!important}}
        @media(max-width:560px){.grid{grid-template-columns:1fr!important}.cats{flex-wrap:wrap!important}}
      `}</style>

      {/* HERO */}
      <div style={{ background:C.navy, padding:"90px 48px 60px" }} className="px">
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div className="eyebrow">{t.badge}</div>
          <h1 style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:"clamp(30px,4vw,56px)", fontWeight:700, color:"#e8ecf2", lineHeight:1.1, marginBottom:18 }}>{t.title}</h1>
          <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:15, fontWeight:300, color:"rgba(255,255,255,.5)", maxWidth:580, lineHeight:1.85 }}>{t.sub}</p>
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <div style={{ background:C.bgWhite, borderBottom:`1px solid ${C.border}`, position:"sticky", top:66, zIndex:100 }}>
        <div className="px" style={{ maxWidth:1200, margin:"0 auto", padding:"0 48px" }}>
          <div className="cats" style={{ display:"flex", gap:2, overflowX:"auto", paddingBottom:0 }}>
            {t.cats.map((c,i)=>(
              <button key={i} className={`cat-btn ${active===c?"on":""}`}
                onClick={()=>setActive(c)}
                style={{ borderRadius:0, borderTop:"none", borderBottom: active===c?`2px solid ${C.navy}`:"2px solid transparent", padding:"14px 20px" }}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <section className="px" style={{ padding:"48px 48px 80px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ marginBottom:20, fontFamily:"'Barlow',sans-serif", fontSize:13, color:C.textLight }}>
            {filtered.length} {lang==="en"?"products":"個產品"}
          </div>
          <div className="grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16 }}>
            {filtered.map((p,i)=>(
              <div key={i} className="prod-card">
                <img src={p.img} alt={p.title} className="prod-img"
                  onError={e=>{ e.target.style.background=C.bg; e.target.style.minHeight="180px"; }}/>
                <div style={{ padding:"1rem" }}>
                  <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:10, fontWeight:600, letterSpacing:".16em", color:C.navy, background:C.navyFaint, display:"inline-block", padding:"2px 8px", marginBottom:8, border:`1px solid ${C.navy}22` }}>{p.cat}</div>
                  <h3 style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:15, fontWeight:600, color:C.text, letterSpacing:".03em", marginBottom:6, lineHeight:1.3 }}>{p.title}</h3>
                  <p style={{ fontFamily:"'Barlow',sans-serif", fontSize:12, fontWeight:300, color:C.textMid, lineHeight:1.7 }}>{p.desc}</p>
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
          <Link to="/contact" className="btn-navy">{t.ctaBtn}</Link>
        </div>
      </section>
    </div>
  );
}
