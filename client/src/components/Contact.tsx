import restaurantExterior from "@/assets/restaurant-exterior_781c1de4.jpg";
import { useInView } from "@/hooks/useInView";
import { Mail } from "lucide-react";

export default function Contact() {
  const { ref, isInView } = useInView(0.1);

  const mailtoLink =
    "mailto:info@misegao.com?subject=%E3%80%90%E7%84%A1%E6%96%99HP%E5%B8%8C%E6%9C%9B%E3%80%91HP%E3%83%9F%E3%82%BB%E3%82%AC%E3%82%AA&body=%E3%81%8A%E5%90%8D%E5%89%8D%EF%BC%9A%0A%E5%BA%97%E5%90%8D%EF%BC%9A%0A%E3%81%8A%E5%BA%97%E3%81%AE%E3%82%A8%E3%83%AA%E3%82%A2%EF%BC%88%E4%BE%8B%EF%BC%9A%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E8%97%A4%E6%B2%A2%E5%B8%82%EF%BC%89%EF%BC%9A%0AGoogle%E3%83%9E%E3%83%83%E3%83%97%E3%81%AE%E5%BA%97%E5%90%8D%EF%BC%88%E6%AD%A3%E5%BC%8F%E5%90%8D%E7%A7%B0%EF%BC%89%EF%BC%9A%0A";

  return (
    <section id="contact" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={restaurantExterior}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.02_280/0.92)] via-[oklch(0.18_0.02_280/0.88)] to-[oklch(0.18_0.02_280/0.95)]" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[oklch(0.50_0.18_25)] font-medium mb-5">
            Free Homepage
          </p>
          <h2
            className={`font-display font-bold text-3xl lg:text-4xl xl:text-[2.75rem] text-white leading-[1.3] mb-6 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            まずは、あなたのお店の
            <br />
            「顔」を見てみませんか。
          </h2>
          <p
            className={`text-[oklch(0.75_0.01_80)] text-base lg:text-lg leading-relaxed mb-10 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            店名とエリアをお送りいただくだけで、ホームページのたたき台を無料でおつくりします。
            <br className="hidden sm:block" />
            しつこい営業は一切しません。
          </p>

          {/* CTA Button */}
          <div
            className={`${isInView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "200ms" }}
          >
            <a
              href={mailtoLink}
              className="inline-flex items-center gap-3 bg-[oklch(0.50_0.18_25)] text-white font-medium text-base lg:text-lg py-4 px-8 rounded-sm shadow-[0_4px_20px_oklch(0.50_0.18_25/0.4)] hover:bg-[oklch(0.45_0.20_25)] hover:shadow-[0_6px_28px_oklch(0.50_0.18_25/0.5)] transition-all duration-200 active:scale-[0.97]"
            >
              <Mail className="w-5 h-5" />
              メールで無料HPを申し込む
            </a>
          </div>

          <p
            className={`mt-6 text-sm text-[oklch(0.60_0.01_80)] ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "300ms" }}
          >
            お名前・店名・お店のエリアをご記入のうえ送信してください。
          </p>
        </div>
      </div>
    </section>
  );
}
