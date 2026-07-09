import sumiStroke from "@/assets/sumi-stroke_25bd9a2f.png";
import { useInView } from "@/hooks/useInView";
import { Shield, FileText, Sparkles, MessageCircle, Search } from "lucide-react";

export default function WhyNeed() {
  const { ref, isInView } = useInView(0.1);

  const reasons = [
    {
      icon: Shield,
      title: "信頼感",
      description:
        "「公式ホームページがある＝しっかり営業している店」という印象を持つ人は少なくありません。Googleマップだけでは伝わらない安心感があります。",
    },
    {
      icon: FileText,
      title: "正確な情報",
      description:
        "営業時間・定休日・メニュー・駐車場・アクセス・予約方法などを、お店自身が自由に更新できます。",
    },
    {
      icon: Sparkles,
      title: "お店の魅力",
      description:
        "店主の想い、食材へのこだわり、店内の雰囲気やスタッフ紹介は、Googleマップだけでは十分に伝えきれません。",
    },
    {
      icon: MessageCircle,
      title: "予約・問い合わせ",
      description:
        "ネット予約・電話・LINE・Instagramなどへ、迷わずスムーズに誘導できます。",
    },
    {
      icon: Search,
      title: "検索の強さ",
      description:
        "「横浜 家系ラーメン」「横浜 ランチ」のような検索で、ホームページが検索結果に表示される可能性があります。",
    },
  ];

  return (
    <section id="why" ref={ref} className="py-28 lg:py-36 bg-[oklch(0.18_0.02_280)] sumi-section relative overflow-hidden">
      <div className="container relative z-10">
        {/* Asymmetric header with ink stroke */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-20 lg:mb-24">
          <div className="lg:col-span-6">
            <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[oklch(0.50_0.18_25)] font-medium mb-5">
              Why You Need It
            </p>
            <h2
              className={`font-display font-bold text-3xl lg:text-[2.5rem] xl:text-[3rem] text-white leading-[1.25] ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              お店の信用を高め、
              <br />
              来店につなげるために。
            </h2>
            {/* Ink stroke divider */}
            <img
              src={sumiStroke}
              alt=""
              className="ink-stroke mt-8 opacity-30"
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end pb-2">
            <p className="text-[oklch(0.62_0.02_240)] text-base lg:text-lg leading-relaxed border-l-2 border-[oklch(0.50_0.18_25/0.4)] pl-5">
              ホームページには、Googleマップや食べログだけでは果たせない役割があります。
            </p>
          </div>
        </div>

        {/* Cards - asymmetric 2+3 stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`ink-card rounded-sm p-7 lg:p-8 hover:border-[oklch(0.50_0.18_25/0.35)] transition-all duration-300 group overflow-hidden ${
                index >= 3 ? "lg:col-start-1" : ""
              } ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${(index + 1) * 80}ms` }}
            >
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <div className="w-9 h-9 flex items-center justify-center shrink-0">
                  <reason.icon className="w-5 h-5 text-[oklch(0.60_0.16_25)]" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-lg text-white pt-1">
                  {reason.title}
                </h3>
              </div>
              <p className="text-sm text-[oklch(0.62_0.02_240)] leading-[1.8] relative z-10 pl-[3.25rem]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note with hanko accent */}
        <div className="mt-14 flex items-start gap-4 max-w-2xl">
          <div className="hanko-badge shrink-0 mt-0.5">注</div>
          <p className="text-sm text-[oklch(0.55_0.02_240)] leading-relaxed">
            ホームページは「作って終わり」では意味がありません。HPミセガオは、来店につながる導線として機能するホームページを設計します。
          </p>
        </div>
      </div>
    </section>
  );
}
