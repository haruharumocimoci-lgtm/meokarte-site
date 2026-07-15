import sumiStroke from "@/assets/sumi-stroke_25bd9a2f.png";
import { useInView } from "@/hooks/useInView";
import { TrendingUp, ShoppingBag, Globe } from "lucide-react";

export default function MoreThanHP() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="services" ref={ref} className="py-28 lg:py-36 bg-[oklch(0.18_0.02_280)] sumi-section relative overflow-hidden">
      <div className="container relative z-10">
        {/* Section header - asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-20 lg:mb-24">
          <div className="lg:col-span-7">
            <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[oklch(0.50_0.18_25)] font-medium mb-5">
              More Than a Homepage
            </p>
            <h2
              className={`font-display font-bold text-3xl lg:text-[2.5rem] xl:text-[3rem] text-white leading-[1.25] ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              ホームページはスタートライン。
              <br />
              その先の集客まで伴走できます。
            </h2>
            <img
              src={sumiStroke}
              alt=""
              className="ink-stroke mt-8 opacity-25"
            />
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end pb-2">
            <p className="text-[oklch(0.62_0.02_240)] text-base lg:text-lg leading-relaxed border-l-2 border-[oklch(0.50_0.18_25/0.4)] pl-5">
              ご希望の方には、3つのオプションをご用意しています。ホームページ公開後、必要になったタイミングで追加できます。
            </p>
          </div>
        </div>

        {/* Three options - staggered layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {/* Option 1 - 集客プラン */}
          <div
            className={`ink-card rounded-sm p-8 lg:p-10 hover:border-[oklch(0.50_0.18_25/0.35)] transition-all duration-300 group overflow-hidden ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "120ms" }}
          >
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <TrendingUp className="w-5 h-5 text-[oklch(0.60_0.16_25)]" strokeWidth={1.5} />
              <div className="hanko-badge">
                月20,000円（税込）
              </div>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-5 relative z-10">
              集客プラン
            </h3>
            <p className="text-sm text-[oklch(0.62_0.02_240)] leading-[1.8] relative z-10">
              Googleマップ（MEO）の運用をまるごとお任せいただくプランです。AI口コミ分析・改善レポート・Google投稿の作成・口コミ返信のご提案まで対応。入口として、口コミを近隣の高評価店と比較した
              <span className="text-white font-medium">無料のMEO診断カルテ</span>
              もお渡ししています。
            </p>
          </div>

          {/* Option 2 - 通販ページ */}
          <div
            className={`ink-card rounded-sm p-8 lg:p-10 hover:border-[oklch(0.50_0.18_25/0.35)] transition-all duration-300 group overflow-hidden lg:mt-8 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "240ms" }}
          >
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <ShoppingBag className="w-5 h-5 text-[oklch(0.60_0.16_25)]" strokeWidth={1.5} />
              <div className="hanko-badge">
                初期15,000円（税込）
              </div>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-5 relative z-10">
              通販ページの追加
            </h3>
            <p className="text-sm text-[oklch(0.62_0.02_240)] leading-[1.8] relative z-10">
              お土産・お持ち帰りセット・お食事券などをホームページ上で販売できる通販ページを追加。決済はStripe（カード等）に対応し、月々の追加費用はかかりません。※食品の販売には所定の営業許可が必要です。
            </p>
          </div>

          {/* Option 3 - 独自ドメイン */}
          <div
            className={`ink-card rounded-sm p-8 lg:p-10 hover:border-[oklch(0.50_0.18_25/0.35)] transition-all duration-300 group overflow-hidden lg:mt-16 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "360ms" }}
          >
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <Globe className="w-5 h-5 text-[oklch(0.60_0.16_25)]" strokeWidth={1.5} />
              <div className="hanko-badge">
                年5,000円（税込）
              </div>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-5 relative z-10">
              独自ドメイン
            </h3>
            <p className="text-sm text-[oklch(0.62_0.02_240)] leading-[1.8] relative z-10">
              「yourshop.com」のような、お店だけのドメインで公開します。名刺やチラシにも載せやすく、お店の信頼感が増します。年額にドメイン代を含み、2年目以降も年5,000円（税込）です。
            </p>
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 flex items-start gap-4 max-w-2xl">
          <div className="hanko-badge shrink-0 mt-0.5">注</div>
          <p className="text-sm text-[oklch(0.50_0.02_240)] leading-relaxed">
            いずれもご希望の方だけのオプションです。ご不要な方に無理におすすめすることはありません。
          </p>
        </div>
      </div>
    </section>
  );
}
