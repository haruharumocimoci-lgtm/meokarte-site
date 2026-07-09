import { useInView } from "@/hooks/useInView";

export default function HowItWorks() {
  const { ref, isInView } = useInView(0.1);

  const steps = [
    {
      number: "壱",
      badge: "無料",
      title: "たたき台をお見せします",
      description:
        "こちらからのご連絡の時点で、お店のホームページのたたき台をすでにご用意しています。実物を見てから、導入するかどうかを決めてください。",
    },
    {
      number: "弐",
      badge: "制作費0円",
      title: "内容を整えて公開",
      description:
        "お店の写真・メニュー・こだわりを反映して公開します。スマホ最適化、地図・電話・口コミ投稿への導線設計まで込みで、制作費は0円です。",
    },
    {
      number: "参",
      badge: "月額¥5,000",
      title: "運用・更新サポート",
      description:
        "かかるのは維持費（税込）だけ。営業時間の変更やメニューの差し替えなどの更新を月4回までご依頼いただけます。集客改善のご相談もこちらで承ります。",
    },
  ];

  return (
    <section id="flow" ref={ref} className="py-28 lg:py-36 washi-bg relative">
      <div className="container relative z-10">
        {/* Section header - left aligned with generous whitespace */}
        <div className="mb-20 lg:mb-24 max-w-xl">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[oklch(0.50_0.18_25)] font-medium mb-5">
            How It Works
          </p>
          <h2
            className={`font-display font-bold text-3xl lg:text-[2.5rem] xl:text-[3rem] text-sumi leading-[1.25] ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            「もう出来てます」から始まる、
            <br />
            いちばん早いホームページ制作。
          </h2>
        </div>

        {/* Steps - vertical timeline with asymmetric cards */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${(index + 1) * 120}ms` }}
            >
              {/* Step card */}
              <div className="paper-card rounded-sm p-8 lg:p-9 relative overflow-hidden">
                {/* Large kanji number */}
                <div className="absolute top-4 right-4 font-display text-[4rem] lg:text-[5rem] font-bold text-[oklch(0.18_0.02_280/0.04)] leading-none select-none">
                  {step.number}
                </div>

                {/* Badge */}
                <div className="hanko-badge mb-6 relative z-10">
                  {step.badge}
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl lg:text-2xl text-sumi mb-4 relative z-10">
                  {step.title}
                </h3>
                <p className="text-sm lg:text-[0.9rem] text-[oklch(0.50_0.03_240)] leading-[1.8] relative z-10">
                  {step.description}
                </p>
              </div>

              {/* Connector arrow (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 translate-x-0 -translate-y-1/2 z-20">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="oklch(0.50 0.18 25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
