// import Header from "./components/Header";
// import Lancamentos from "./components/Lancamentos";

// function App() {
//   return (
//     <>
//       <Header />
//       <Lancamentos />
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";

// --- ÍCONES SVG NATIVOS ---
const Icon = ({ children, size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const ShoppingBag = (props) => (
  <Icon {...props}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </Icon>
);
const MenuIcon = (props) => (
  <Icon {...props}>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </Icon>
);
const X = (props) => (
  <Icon {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Icon>
);
const Camera = (props) => (
  <Icon {...props}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </Icon>
);
const Heart = (props) => (
  <Icon {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </Icon>
);
const Star = (props) => (
  <Icon {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </Icon>
);
const ArrowRight = (props) => (
  <Icon {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </Icon>
);
const Check = (props) => (
  <Icon {...props}>
    <polyline points="20 6 9 17 4 12" />
  </Icon>
);
const Instagram = (props) => (
  <Icon {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </Icon>
);
const Twitter = (props) => (
  <Icon {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </Icon>
);
const Facebook = (props) => (
  <Icon {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </Icon>
);

// --- DADOS ---

const PRODUCTS = [
  {
    id: 1,
    name: "Batom Velvet Matte",
    price: 89.9,
    category: "Lábios",
    shades: [
      { name: "Ruby Rush", hex: "#D72638", id: "p1-s1" },
      { name: "Nude Classic", hex: "#C58C85", id: "p1-s2" },
      { name: "Berry Wine", hex: "#722F37", id: "p1-s3" },
      { name: "Coral Sunset", hex: "#FF7F50", id: "p1-s4" },
    ],
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    name: "Blush Radiance",
    price: 119.9,
    category: "Bochechas",
    shades: [
      { name: "Peachy Glow", hex: "#FFB7B2", id: "p3-s1" },
      { name: "Rose Petal", hex: "#E0BFB8", id: "p3-s2" },
      { name: "Bronze Sun", hex: "#CD7F32", id: "p3-s3" },
    ],
    image:
      "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    name: "Iluminador Glow",
    price: 149.9,
    category: "Rosto",
    shades: [
      { name: "Champagne", hex: "#F3E5DC", id: "p2-s1" },
      { name: "Gold", hex: "#C68642", id: "p2-s3" },
    ],
    image:
      "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    name: "Base SkinFit",
    price: 159.9,
    category: "Rosto",
    shades: [
      { name: "Fair", hex: "#F9E4D4", id: "p4-s1" },
      { name: "Medium", hex: "#D1A384", id: "p4-s2" },
      { name: "Deep", hex: "#7B523B", id: "p4-s3" },
    ],
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&q=80&w=600",
  },
];

const SKIN_TONES = [
  { id: "fair", color: "#F9E4D4", name: "Claro" },
  { id: "light", color: "#EBCbb3", name: "Médio Claro" },
  { id: "medium", color: "#D1A384", name: "Médio" },
  { id: "tan", color: "#AE8061", name: "Bronzeado" },
  { id: "deep", color: "#7B523B", name: "Escuro" },
  { id: "rich", color: "#4B3023", name: "Retinto" },
];

// --- COMPONENTES ---

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [onClose]);
  return (
    <div className={`toast-notification ${type}`}>
      {type === "success" && <Check size={18} />}
      <span>{message}</span>
    </div>
  );
};

const Navigation = ({ cartCount, onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          <div className="logo" onClick={() => handleNavClick("home")}>
            PASSOIA
          </div>

          {/* Desktop Links */}
          <div className="nav-links desktop-only">
            <button
              onClick={() => handleNavClick("home")}
              className={activeSection === "home" ? "active" : ""}
            >
              Início
            </button>
            <button
              onClick={() => handleNavClick("try-on")}
              className={activeSection === "try-on" ? "active" : ""}
            >
              Studio Virtual
            </button>
            <button
              onClick={() => handleNavClick("shop")}
              className={activeSection === "shop" ? "active" : ""}
            >
              Produtos
            </button>
          </div>

          <div className="nav-icons">
            <button className="icon-btn cart-btn">
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="badge bounce">{cartCount}</span>
              )}
            </button>
            <button
              className="icon-btn mobile-only"
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuIcon size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <div className="mobile-header">
            <span className="logo">PASSOIA</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="mobile-links">
            <button onClick={() => handleNavClick("home")}>Início</button>
            <button onClick={() => handleNavClick("try-on")}>
              Studio Virtual
            </button>
            <button onClick={() => handleNavClick("shop")}>Produtos</button>
          </div>
        </div>
        <div
          className="mobile-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      </div>
    </>
  );
};

const ModelFace = ({ skinTone, lipColor, cheekColor, activeCategory }) => (
  <svg viewBox="0 0 400 500" className="model-svg">
    <defs>
      <filter id="blur-cheeks">
        <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
      </filter>
      <linearGradient id="skinShine" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="white" stopOpacity="0.25" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      d="M100,100 Q200,0 300,100 Q400,150 380,300 Q350,500 200,500 Q50,500 20,300 Q0,150 100,100"
      fill="#2A2A2A"
    />
    <path
      d="M140,380 L140,480 Q200,500 260,480 L260,380"
      fill={skinTone.color}
      style={{ filter: "brightness(0.9)" }}
    />
    <ellipse cx="200" cy="260" rx="110" ry="140" fill={skinTone.color} />
    <ellipse cx="200" cy="260" rx="110" ry="140" fill="url(#skinShine)" />
    <g className="eyes">
      <path d="M140,240 Q160,220 180,240 Q160,250 140,240" fill="#FFF" />
      <path d="M220,240 Q240,220 260,240 Q240,250 220,240" fill="#FFF" />
      <circle cx="160" cy="240" r="6" fill="#333" />
      <circle cx="240" cy="240" r="6" fill="#333" />
    </g>
    <path
      d="M130,225 Q160,205 185,225"
      fill="none"
      stroke="#4A3627"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.8"
    />
    <path
      d="M215,225 Q240,205 270,225"
      fill="none"
      stroke="#4A3627"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.8"
    />
    <g
      style={{
        opacity: activeCategory === "cheeks" ? 0.7 : 0,
        transition: "opacity 0.5s ease",
      }}
    >
      <ellipse
        cx="140"
        cy="290"
        rx="25"
        ry="18"
        fill={cheekColor.hex}
        filter="url(#blur-cheeks)"
      />
      <ellipse
        cx="260"
        cy="290"
        rx="25"
        ry="18"
        fill={cheekColor.hex}
        filter="url(#blur-cheeks)"
      />
    </g>
    <g transform="translate(0, 10)">
      <path
        d="M170,330 Q200,320 230,330 Q200,360 170,330"
        fill={lipColor.hex}
        opacity={activeCategory === "lips" ? 0.95 : 0.3}
        style={{ mixBlendMode: "multiply", transition: "fill 0.3s ease" }}
      />
      <path
        d="M185,332 Q200,328 215,332"
        fill="none"
        stroke="white"
        strokeWidth="2"
        opacity="0.4"
      />
    </g>
  </svg>
);

const VirtualStudio = ({ onAddToCart }) => {
  const [selectedSkinTone, setSelectedSkinTone] = useState(SKIN_TONES[2]);
  const [activeCategory, setActiveCategory] = useState("lips");
  const [selectedLipColor, setSelectedLipColor] = useState(
    PRODUCTS[0].shades[0]
  );
  const [selectedCheekColor, setSelectedCheekColor] = useState(
    PRODUCTS[1].shades[0]
  );

  const activeProduct = activeCategory === "lips" ? PRODUCTS[0] : PRODUCTS[1];
  const currentShade =
    activeCategory === "lips" ? selectedLipColor : selectedCheekColor;

  return (
    <section id="try-on" className="section studio-section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">EXPERIÊNCIA INTERATIVA</span>
          <h2>Passoia Virtual Studio</h2>
          <p>Teste sem medo. Veja como fica na sua pele.</p>
        </div>

        <div className="studio-card">
          <div className="visual-area">
            <ModelFace
              skinTone={selectedSkinTone}
              lipColor={selectedLipColor}
              cheekColor={selectedCheekColor}
              activeCategory={activeCategory}
            />
            <div className="live-badge">
              <Camera size={14} style={{ marginRight: 4 }} /> Simulação
            </div>
          </div>

          <div className="controls-area">
            <div className="control-group">
              <label>1. Tom de Pele</label>
              <div className="skin-tones-grid">
                {SKIN_TONES.map((tone) => (
                  <button
                    key={tone.id}
                    className={`tone-btn ${
                      selectedSkinTone.id === tone.id ? "active" : ""
                    }`}
                    style={{ backgroundColor: tone.color }}
                    onClick={() => setSelectedSkinTone(tone)}
                  />
                ))}
              </div>
            </div>

            <div className="control-group">
              <label>2. Produto</label>
              <div className="category-toggle">
                <button
                  className={activeCategory === "lips" ? "active" : ""}
                  onClick={() => setActiveCategory("lips")}
                >
                  Batom
                </button>
                <button
                  className={activeCategory === "cheeks" ? "active" : ""}
                  onClick={() => setActiveCategory("cheeks")}
                >
                  Blush
                </button>
              </div>
            </div>

            <div className="control-group">
              <label>
                3. Cor:{" "}
                <span style={{ color: currentShade.hex, fontWeight: 500 }}>
                  {currentShade.name}
                </span>
              </label>
              <div className="shades-grid">
                {activeProduct.shades.map((shade) => (
                  <button
                    key={shade.id}
                    className={`shade-btn ${
                      currentShade.id === shade.id ? "active" : ""
                    }`}
                    style={{ backgroundColor: shade.hex }}
                    onClick={() =>
                      activeCategory === "lips"
                        ? setSelectedLipColor(shade)
                        : setSelectedCheekColor(shade)
                    }
                  >
                    {currentShade.id === shade.id && (
                      <Check size={16} className="text-white" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="buy-action">
              <div className="product-summary">
                <h4>{activeProduct.name}</h4>
                <div className="price">
                  R$ {activeProduct.price.toFixed(2).replace(".", ",")}
                </div>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => onAddToCart(activeProduct)}
              >
                Comprar <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, onAdd }) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="product-card">
      <div className="card-image">
        <img src={product.image} alt={product.name} />
        <button
          className={`wishlist-btn ${isLiked ? "liked" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
        >
          <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
        </button>
        <div className="add-btn-container">
          <button onClick={onAdd} className="btn-add">
            Adicionar
          </button>
        </div>
      </div>
      <div className="card-info">
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="price">R$ {product.price.toFixed(2).replace(".", ",")}</p>
      </div>
    </div>
  );
};

const ShopSection = ({ onAddToCart }) => {
  const [filter, setFilter] = useState("Todos");
  const filtered =
    filter === "Todos"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === filter);
  const categories = ["Todos", ...new Set(PRODUCTS.map((p) => p.category))];

  return (
    <section id="shop" className="section shop-section">
      <div className="container">
        <div className="shop-header">
          <h2>Coleção</h2>
          <div className="filter-scroll">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="products-grid">
          {filtered.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onAdd={() => onAddToCart(prod)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function PassoiaApp() {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setNotification({
      message: `${product.name} adicionado!`,
      type: "success",
    });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-root">
      <style>{`
        :root {
          --primary: #E14D58;
          --primary-dark: #C13640;
          --bg: #F9F7F5;
          --white: #FFFFFF;
          --dark: #1A1A1A;
          --gray: #666;
          --light-gray: #E5E5E5;
          --border: #EEE;
          --shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        /* RESET */
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
        h1, h2, h3, h4 { font-family: 'Playfair Display', serif; color: var(--dark); font-weight: 700; }
        button { cursor: pointer; border: none; background: none; }
        img { max-width: 100%; display: block; }
        .text-white { stroke: white; }

        /* LAYOUT & CONTAINER */
        .app-root { background: var(--white); min-height: 100vh; overflow-x: hidden; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .section { padding: 4rem 0; }
        
        /* NAVBAR */
        .navbar { position: fixed; top: 0; left: 0; width: 100%; z-index: 100; padding: 20px 0; transition: all 0.3s; }
        .navbar.scrolled { background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); padding: 10px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        .nav-container { display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 1.5rem; font-weight: 800; letter-spacing: -1px; }
        
        .nav-links.desktop-only { display: flex; gap: 30px; }
        .nav-links button { font-weight: 500; color: var(--gray); transition: 0.3s; font-size: 0.95rem; }
        .nav-links button:hover, .nav-links button.active { color: var(--primary); }
        
        .nav-icons { display: flex; gap: 15px; align-items: center; }
        .icon-btn { position: relative; padding: 8px; border-radius: 50%; transition: 0.2s; }
        .icon-btn:hover { background: var(--light-gray); }
        .badge { position: absolute; top: 0; right: 0; background: var(--primary); color: white; font-size: 10px; width: 16px; height: 16px; border-radius: 50%; display: flex; justify-content: center; align-items: center; border: 2px solid white; }

        /* MOBILE MENU */
        .mobile-only { display: none; }
        .mobile-menu-overlay { position: fixed; inset: 0; z-index: 200; visibility: hidden; opacity: 0; transition: 0.3s; }
        .mobile-menu-overlay.open { visibility: visible; opacity: 1; }
        .mobile-backdrop { position: absolute; inset: 0; background: rgba(0,0,0,0.5); }
        .mobile-menu-content { position: absolute; top: 0; right: 0; width: 80%; max-width: 300px; height: 100%; background: white; transform: translateX(100%); transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1); padding: 20px; display: flex; flex-direction: column; }
        .mobile-menu-overlay.open .mobile-menu-content { transform: translateX(0); }
        .mobile-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
        .mobile-links { display: flex; flex-direction: column; gap: 20px; }
        .mobile-links button { text-align: left; font-size: 1.2rem; font-weight: 600; border-bottom: 1px solid var(--border); padding-bottom: 10px; }

        /* HERO */
        .hero { padding-top: 100px; padding-bottom: 60px; background: var(--bg); display: flex; align-items: center; min-height: 80vh; }
        .hero .container { display: flex; flex-direction: column; gap: 40px; }
        .hero-text { flex: 1; z-index: 2; }
        .hero-badge { display: inline-block; background: white; padding: 6px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; color: var(--primary); margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
        .hero h1 { font-size: clamp(2.5rem, 5vw, 4.5rem); line-height: 1.1; margin-bottom: 20px; }
        .hero p { font-size: 1.1rem; color: var(--gray); margin-bottom: 30px; max-width: 500px; }
        .hero-img { flex: 1; position: relative; }
        .hero-img img { width: 100%; border-radius: 20px; box-shadow: var(--shadow); }

        /* VIRTUAL STUDIO (RESPONSIVE) */
        .section-header { text-align: center; margin-bottom: 40px; }
        .subtitle { color: var(--primary); font-size: 0.8rem; font-weight: 700; letter-spacing: 2px; }
        
        .studio-card { background: white; border-radius: 20px; border: 1px solid var(--border); overflow: hidden; display: flex; flex-direction: column; box-shadow: var(--shadow); }
        
        .visual-area { background: #FAFAFA; position: relative; display: flex; justify-content: center; align-items: center; padding: 20px; aspect-ratio: 1/1; }
        .model-svg { width: 100%; max-height: 100%; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1)); transition: 0.5s; }
        .live-badge { position: absolute; bottom: 15px; left: 50%; transform: translateX(-50%); background: rgba(255,255,255,0.9); padding: 6px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; display: flex; align-items: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1); white-space: nowrap; }

        .controls-area { padding: 20px; display: flex; flex-direction: column; gap: 24px; }
        .control-group label { display: block; font-weight: 600; margin-bottom: 10px; font-size: 0.9rem; }
        
        .skin-tones-grid { display: flex; gap: 10px; overflow-x: auto; padding-bottom: 5px; }
        .tone-btn { width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0; border: 2px solid transparent; transition: 0.2s; }
        .tone-btn.active { transform: scale(1.1); border-color: var(--primary); }

        .category-toggle { display: flex; background: var(--light-gray); padding: 4px; border-radius: 8px; }
        .category-toggle button { flex: 1; padding: 10px; font-size: 0.9rem; font-weight: 600; border-radius: 6px; color: var(--gray); }
        .category-toggle button.active { background: white; color: var(--primary); box-shadow: 0 2px 4px rgba(0,0,0,0.05); }

        .shades-grid { display: flex; gap: 10px; flex-wrap: wrap; }
        .shade-btn { width: 40px; height: 40px; border-radius: 10px; border: 2px solid transparent; display: flex; justify-content: center; align-items: center; }
        .shade-btn.active { transform: scale(1.1); box-shadow: 0 0 0 2px white, 0 0 0 4px var(--primary); }

        .buy-action { margin-top: auto; padding-top: 20px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
        .btn { background: var(--dark); color: white; padding: 12px 24px; border-radius: 50px; font-weight: 600; display: flex; align-items: center; gap: 8px; transition: 0.3s; font-size: 0.9rem; }
        .btn:hover { background: var(--primary); transform: translateY(-2px); }

        /* SHOP */
        .shop-header { display: flex; flex-direction: column; gap: 20px; margin-bottom: 30px; }
        .filter-scroll { display: flex; gap: 10px; overflow-x: auto; padding-bottom: 10px; }
        .filter-btn { padding: 8px 16px; border-radius: 20px; border: 1px solid var(--border); font-size: 0.9rem; white-space: nowrap; }
        .filter-btn.active { background: var(--dark); color: white; border-color: var(--dark); }

        .products-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        .product-card { border: 1px solid var(--border); border-radius: 12px; overflow: hidden; background: white; transition: 0.3s; }
        .card-image { position: relative; aspect-ratio: 1; background: #f0f0f0; overflow: hidden; }
        .card-image img { width: 100%; height: 100%; object-fit: cover; }
        .wishlist-btn { position: absolute; top: 10px; right: 10px; background: white; padding: 8px; border-radius: 50%; opacity: 0.8; transition: 0.3s; }
        .wishlist-btn.liked { color: var(--primary); opacity: 1; }
        .btn-add { width: 100%; background: rgba(255,255,255,0.9); padding: 10px; font-weight: 600; font-size: 0.85rem; border-top: 1px solid rgba(0,0,0,0.05); }
        .add-btn-container { position: absolute; bottom: 0; width: 100%; transform: translateY(100%); transition: 0.3s; }
        .product-card:hover .add-btn-container { transform: translateY(0); }
        .card-info { padding: 15px; }
        .card-info h3 { font-size: 1rem; margin-bottom: 5px; }
        .card-info .category { font-size: 0.7rem; text-transform: uppercase; color: var(--gray); font-weight: 700; letter-spacing: 1px; }

        /* TOAST */
        .toast-notification { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); background: #222; color: white; padding: 12px 24px; border-radius: 50px; display: flex; align-items: center; gap: 10px; z-index: 1000; font-size: 0.9rem; white-space: nowrap; }

        /* MEDIA QUERIES (A MÁGICA DA RESPONSIVIDADE) */
        @media (min-width: 768px) {
          .hero .container { flex-direction: row; align-items: center; text-align: left; }
          .hero-img { order: 2; }
          .hero-text { order: 1; }
          .products-grid { grid-template-columns: repeat(2, 1fr); }
          .shop-header { flex-direction: row; justify-content: space-between; align-items: center; }
        }

        @media (min-width: 1024px) {
          .mobile-only { display: none; }
          .desktop-only { display: flex; }
          
          .studio-card { flex-direction: row; min-height: 500px; }
          .visual-area { flex: 1.2; aspect-ratio: auto; }
          .controls-area { flex: 0.8; padding: 40px; overflow-y: auto; justify-content: center; }
          
          .products-grid { grid-template-columns: repeat(4, 1fr); gap: 30px; }
        }

        @media (max-width: 1023px) {
          .desktop-only { display: none; }
          .mobile-only { display: block; }
          .studio-card { flex-direction: column; }
        }
      `}</style>

      <Navigation
        cartCount={cart.length}
        onNavigate={scrollToSection}
        activeSection="home"
      />

      <header id="home" className="hero">
        <div className="container">
          <div className="hero-text">
            <span className="hero-badge">NOVIDADE SKIN-FIT</span>
            <h1>
              Sua beleza,
              <br /> seu tom exato.
            </h1>
            <p>
              Descubra a tecnologia que se adapta a você. Prove agora sem sair
              de casa.
            </p>
            <button className="btn" onClick={() => scrollToSection("try-on")}>
              Experimentar Agora <Camera size={18} />
            </button>
          </div>
          <div className="hero-img">
            <img
              src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800"
              alt="Model"
            />
          </div>
        </div>
      </header>

      <VirtualStudio onAddToCart={handleAddToCart} />
      <ShopSection onAddToCart={handleAddToCart} />
      {notification && (
        <Toast
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
}
