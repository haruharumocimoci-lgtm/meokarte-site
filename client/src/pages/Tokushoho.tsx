import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

// 特定商取引法に基づく表記
// 所在地・電話番号は消費者庁ガイドラインに沿った「請求開示方式」で記載
export default function Tokushoho() {
  const rows: { label: string; value: React.ReactNode }[] = [
    { label: "サービス名", value: "HPミセガオ" },
    { label: "事業者", value: "持丸 春聡（屋号：misegao／個人事業主）" },
    { label: "運営責任者", value: "持丸 春聡" },
    {
      label: "所在地",
      value:
        "お取引を希望されるお客様には、ご請求があれば遅滞なく開示いたします。下記メールアドレスまでご請求ください。",
    },
    {
      label: "電話番号",
      value:
        "ご請求があれば遅滞なく開示いたします。お問い合わせはメールにて承ります。",
    },
    {
      label: "メールアドレス",
      value: (
        <a
          href="mailto:info@misegao.com"
          className="underline underline-offset-2 hover:text-[oklch(0.50_0.18_25)] transition-colors duration-200"
        >
          info@misegao.com
        </a>
      ),
    },
    { label: "販売URL", value: "https://misegao.com" },
    {
      label: "販売価格",
      value: (
        <ul className="space-y-1.5">
          <li>基本プラン：月額 5,000円（税込）</li>
          <li>集客プラン：月額 20,000円（税込）</li>
          <li>通販ページ追加：15,000円（初期一括・税込）</li>
          <li>
            独自ドメイン：初期 5,000円（税込・1年目のドメイン代込み）、2年目以降 年
            3,500円（税込）
          </li>
        </ul>
      ),
    },
    {
      label: "販売価格以外の必要料金",
      value:
        "サイトの閲覧・お申し込みに必要な通信費はお客様のご負担となります。通販ページをご利用の場合、売上に対するStripe決済手数料が別途かかります。",
    },
    {
      label: "お支払い方法",
      value:
        "クレジットカード決済（Stripe）／現金（対面でご契約の場合。領収書を発行いたします）",
    },
    {
      label: "お支払い時期",
      value:
        "月額プランはお申し込み時に初回分を決済し、以降1か月ごとに自動更新・自動決済されます。一括料金（通販ページ追加・独自ドメイン初期費用）はお申し込み時に決済されます。現金でのお支払いの場合は、ご契約時にお支払いいただきます（月額プランは6か月分または12か月分の前払い）。",
    },
    {
      label: "サービス提供時期",
      value:
        "決済確認後、担当者よりすみやかにご連絡いたします。掲載内容（店舗情報・写真など）のご確認が取れ次第、制作を開始し公開します。",
    },
    {
      label: "解約について",
      value:
        "契約期間の縛り・違約金はありません。月額プランはいつでも解約でき、解約月の末日までサービスをご利用いただけます。日割りでの返金は行いません。解約のご連絡は info@misegao.com までお願いします。",
    },
    {
      label: "返品・キャンセル",
      value:
        "サービスの性質上、決済完了後の返金は原則お受けできません。当方の不備によりサービスを提供できない場合は、個別に誠実に対応いたします。",
    },
  ];

  return (
    <div className="min-h-screen washi-bg py-16 lg:py-24 px-6">
      <div className="container max-w-3xl">
        <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[oklch(0.50_0.18_25)] font-medium mb-4">
          Legal
        </p>
        <h1 className="font-display font-bold text-2xl lg:text-3xl text-sumi leading-[1.35] mb-10">
          特定商取引法に基づく表記
        </h1>

        <div className="paper-card rounded-sm p-7 lg:p-10">
          <div className="space-y-0">
            {rows.map((row, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-start py-4 border-b border-[oklch(0.18_0.02_280/0.08)] last:border-b-0"
              >
                <span className="text-[0.7rem] tracking-wider text-[oklch(0.50_0.03_240)] font-medium sm:w-44 shrink-0 mb-1.5 sm:mb-0 sm:pt-0.5">
                  {row.label}
                </span>
                <span className="text-sm text-sumi leading-relaxed flex-1">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-10 text-sm text-[oklch(0.50_0.03_240)] hover:text-[oklch(0.50_0.18_25)] transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={2} />
          トップへ戻る
        </Link>
      </div>
    </div>
  );
}
