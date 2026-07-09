import { useInView } from "@/hooks/useInView";
import { Check } from "lucide-react";

export default function Pricing() {
  const { ref, isInView } = useInView(0.1);

  const plans = [
    {
      label: "基本プラン",
      tag: "HOMEPAGE",
      price: "¥5,000",
      priceSuffix: "／月（税込）",
      description: "お店のホームページをこれから持つ方に",
      features: [
        "ホームページ制作費 0円",
        "スマホ特化デザイン",
        "地図・電話・口コミ投稿への導線設計",
        "サーバー・公開費用込み",
        "内容の変更・更新 月4回まで",
        "いつでも解約OK・違約金なし",
      ],
      cta: "無料でHPをつくる",
      ctaHref: "#contact",
      featured: true,
    },
    {
      label: "集客プラン",
      tag: "OPTION 1",
      price: "¥20,000",
      priceSuffix: "／月（税込）",
      description: "Googleマップからの集客を本気で伸ばしたい方に",
      features: [
        "Googleマップ（MEO）運用",
        "AI口コミ分析",
        "改善レポート",
        "Google投稿作成",
        "口コミ返信の提案",
      ],
      cta: "相談してみる",
      ctaHref: "#contact",
      featured: false,
    },
    {
      label: "通販ページ追加",
      tag: "OPTION 2",
      price: "¥15,000",
      priceSuffix: "（初期一括・税込）",
      description: "お土産やお食事券をネットでも売りたい方に",
      features: [
        "通販ページの制作・追加",
        "Stripeカード決済の設定",
        "特定商取引法にもとづく表記の整備",
        "月々の追加費用なし（HP維持費に込み）",
        "※食品の販売は営業許可の確認が必要",
      ],
      cta: "相談してみる",
      ctaHref: "#contact",
      featured: false,
    },
  ];

  return (
    <section id="pricing" ref={ref} className="py-28 lg:py-36 washi-bg relative">
      <div className="container relative z-10">
        {/* Section header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[oklch(0.50_0.18_25)] font-medium mb-5">
            Pricing
          </p>
          <h2
            className={`font-display font-bold text-3xl lg:text-[2.5rem] xl:text-[3rem] text-sumi leading-[1.25] mb-6 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            料金
          </h2>
          <p className="text-[oklch(0.50_0.03_240)] text-base lg:text-lg leading-relaxed">
            制作費は0円。かかるのは月額の維持費だけです。たたき台を見てから決めてください。
          </p>

          {/* Summary badges */}
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="hanko-badge">制作費 0円</span>
            <span className="hanko-badge">月額 5,000円（税込）</span>
            <span className="hanko-badge">契約期間の縛り なし</span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative paper-card rounded-sm flex flex-col overflow-hidden ${
                plan.featured
                  ? "border-[oklch(0.50_0.18_25)] shadow-[0_4px_24px_oklch(0.50_0.18_25/0.1)] ring-1 ring-[oklch(0.50_0.18_25/0.08)]"
                  : ""
              } p-7 lg:p-9 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Featured hanko stamp */}
              {plan.featured && (
                <div className="absolute top-4 right-4 w-12 h-12 border-2 border-[oklch(0.50_0.18_25/0.6)] rounded-[3px] flex items-center justify-center rotate-[-8deg]">
                  <span className="text-[0.55rem] font-bold text-[oklch(0.50_0.18_25)] leading-tight text-center">
                    おす
                    <br />
                    すめ
                  </span>
                </div>
              )}

              {/* Tag */}
              <div className="mb-5 relative z-10">
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[oklch(0.50_0.03_240)] font-medium">
                  {plan.tag}
                </span>
              </div>

              {/* Price */}
              <div className="mb-2 relative z-10">
                <span className="font-display font-bold text-3xl lg:text-[2.25rem] text-sumi">
                  {plan.price}
                </span>
                <span className="text-sm text-[oklch(0.50_0.03_240)] ml-1">{plan.priceSuffix}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-[oklch(0.50_0.03_240)] mb-7 relative z-10">{plan.description}</p>

              {/* Thin ink line divider */}
              <div className="h-px bg-gradient-to-r from-[oklch(0.18_0.02_280/0.15)] via-[oklch(0.18_0.02_280/0.08)] to-transparent mb-7 relative z-10" />

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1 relative z-10">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-sumi">
                    <Check className="w-3.5 h-3.5 text-[oklch(0.50_0.18_25)] mt-0.5 shrink-0" strokeWidth={2.5} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                className={`block text-center py-3.5 px-6 rounded-sm font-medium text-sm transition-all duration-200 relative z-10 ${
                  plan.featured
                    ? "bg-[oklch(0.50_0.18_25)] text-white hover:bg-[oklch(0.45_0.20_25)] shadow-[0_2px_8px_oklch(0.50_0.18_25/0.3)] hover:shadow-[0_4px_16px_oklch(0.50_0.18_25/0.4)] active:scale-[0.97]"
                    : "border border-[oklch(0.18_0.02_280/0.2)] text-sumi hover:bg-[oklch(0.18_0.02_280)] hover:text-white hover:border-[oklch(0.18_0.02_280)] active:scale-[0.97]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 flex items-start gap-4 max-w-3xl">
          <div className="hanko-badge shrink-0 mt-0.5">注</div>
          <p className="text-sm text-[oklch(0.50_0.03_240)] leading-relaxed">
            契約期間の縛り・違約金はありません。月単位でいつでも解約できます。通販の売上には別途Stripeの決済手数料がかかります。大きな作り替えなど特別なご依頼は、必ず事前にお見積りしてから進めます。
          </p>
        </div>
      </div>
    </section>
  );
}
