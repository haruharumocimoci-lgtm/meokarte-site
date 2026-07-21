import brandLogo from "@/assets/brand-logo_295a132b.png";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#why", label: "なぜHPが要るのか" },
    { href: "#flow", label: "ご利用の流れ" },
    { href: "#services", label: "できること" },
    { href: "#pricing", label: "料金" },
    { href: "#faq", label: "よくある質問" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.96_0.015_80/0.97)] backdrop-blur-xl shadow-[0_1px_3px_oklch(0.18_0.02_280/0.08)] border-b border-[oklch(0.88_0.015_80/0.5)]"
          : "bg-transparent"
      }`}
    >
      {/* Campaign announcement bar */}
      <a
        href="#contact"
        className="block bg-[oklch(0.50_0.18_25)] text-white hover:bg-[oklch(0.45_0.20_25)] transition-colors duration-200"
      >
        <div className="container flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 py-2 text-center">
          <span className="inline-flex items-center gap-1.5 text-[0.65rem] lg:text-xs font-bold tracking-[0.12em] border border-white/50 rounded-[2px] px-2 py-0.5">
            先着10名
          </span>
          <span className="text-xs lg:text-sm font-medium">
            ホームページ制作費0円＋月額3ヶ月無料キャンペーン実施中
          </span>
          <span className="hidden sm:inline text-[0.65rem] lg:text-xs text-white/75">
            ※先着10名に達し次第終了
          </span>
        </div>
      </a>

      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 group">
          <img
            src={brandLogo}
            alt="HPミセガオ"
            className="w-9 h-9 lg:w-10 lg:h-10 transition-transform duration-200 group-hover:scale-95"
          />
          <span
            className={`font-display font-bold text-lg lg:text-xl transition-colors duration-300 ${
              scrolled ? "text-sumi" : "text-white"
            }`}
          >
            HPミセガオ
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[oklch(0.50_0.18_25)] after:transition-all after:duration-300 hover:after:w-full ${
                scrolled
                  ? "text-[oklch(0.55_0.03_240)] hover:text-sumi"
                  : "text-[oklch(0.80_0.01_80)] hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="hanko-btn text-sm rounded-sm py-2.5 px-5"
          >
            無料でHPをつくる
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="メニュー"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-200 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            } ${scrolled ? "bg-sumi" : "bg-white"}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-200 ${
              mobileMenuOpen ? "opacity-0" : ""
            } ${scrolled ? "bg-sumi" : "bg-white"}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-200 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            } ${scrolled ? "bg-sumi" : "bg-white"}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[oklch(0.96_0.015_80/0.98)] backdrop-blur-xl border-t border-[oklch(0.88_0.015_80)]">
          <nav className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[oklch(0.55_0.03_240)] hover:text-sumi transition-colors py-2 border-b border-[oklch(0.92_0.01_80)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hanko-btn text-center rounded-sm mt-2"
            >
              無料でHPをつくる
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
