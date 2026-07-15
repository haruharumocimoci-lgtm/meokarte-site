import heroRestaurant from "@/assets/hero-restaurant_dd0e4c47.jpg";
import { useInView } from "@/hooks/useInView";

export default function Hero() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroRestaurant}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.02_280/0.85)] via-[oklch(0.18_0.02_280/0.7)] to-[oklch(0.18_0.02_280/0.4)]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-2xl">
          <p
            className={`text-sm tracking-[0.2em] uppercase text-[oklch(0.50_0.18_25)] font-medium mb-6 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Restaurant Homepage Service
          </p>
          <h1
            className={`font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-8 ${
              isInView ? "animate-fade-in-up delay-100" : "opacity-0"
            }`}
          >
            お店の顔、
            <br />
            つくります。
          </h1>
          <p
            className={`text-base lg:text-lg text-[oklch(0.85_0.01_80)] leading-relaxed mb-10 max-w-xl ${
              isInView ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            HPミセガオは、飲食店のホームページを制作費0円でおつくりするサービスです。
            かかるのは月額5,000円（税込）の維持費だけで、内容の変更は月2回まで対応。
            Googleマップや検索からのお客様を逃さない、スマホ特化のホームページで「お店の顔」を整えます。
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 ${
              isInView ? "animate-fade-in-up delay-300" : "opacity-0"
            }`}
          >
            <a href="#contact" className="hanko-btn text-center rounded-sm text-base">
              無料でHPをつくってみる
            </a>
          </div>
          <p
            className={`mt-6 text-sm text-[oklch(0.70_0.01_80)] ${
              isInView ? "animate-fade-in-up delay-400" : "opacity-0"
            }`}
          >
            たたき台のホームページを無料でおつくりしてからご提案します。実物を見てから決めてください。
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-xs text-white tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-white/50 animate-pulse" />
      </div>
    </section>
  );
}
