import { useInView } from "@/hooks/useInView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const { ref, isInView } = useInView(0.1);

  const faqs = [
    {
      question: "なぜ制作費が無料なのですか？",
      answer:
        "月額の維持費だけで成り立つように、制作の仕組みを効率化しているからです。また、実物のたたき台を見ていただくことが私たちの一番の営業でもあります。ご覧いただいて合わなければ、導入いただかなくて構いません。",
    },
    {
      question: "月額5,000円のほかに費用はかかりますか？",
      answer:
        "かかりません。サーバー代・公開費用も月額に含まれ、内容の変更・更新も月4回までは追加費用なしでご依頼いただけます。大きな作り替えなど特別なご依頼をいただく場合は、必ず事前にお見積りをご提示し、ご了承いただいてから進めます。",
    },
    {
      question: "写真や文章は自分で用意する必要がありますか？",
      answer:
        "最初のたたき台は、Googleマップなどで公開されている情報をもとにこちらで作成します。お店のこだわりの写真や文章をご提供いただければ、差し替えてさらに良くしていきます。",
    },
    {
      question: "解約したらホームページはどうなりますか？",
      answer:
        "公開停止となります。契約期間の縛りや違約金はなく、月単位でいつでも解約できます。データの取り扱いなどはお気軽にご相談ください。",
    },
    {
      question: "食べログやInstagramがあれば十分では？",
      answer:
        "役割が違います。ポータルやSNSは「見つけてもらう場所」、ホームページは「お店を確かめてもらう場所」です。検索したお客様を受け止める公式の顔があることで、ポータルもSNSもより活きてきます。",
    },
    {
      question: "MEOとは何ですか？ 集客の相談もできますか？",
      answer:
        "MEOは、Googleマップで見つけてもらいやすくするための取り組みです。私たちはGoogleマップの実データ分析を強みとしており、ご希望があれば集客プラン（月20,000円・税込）でMEO運用・AI口コミ分析・改善レポートまで伴走します。レビューゲーティングややらせ口コミなど、Googleの規約に違反する手法は一切使いません。",
    },
  ];

  return (
    <section id="faq" ref={ref} className="py-28 lg:py-36 bg-white relative">
      <div className="container relative z-10">
        {/* Section header - left aligned */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[oklch(0.50_0.18_25)] font-medium mb-5">
            FAQ
          </p>
          <h2
            className={`font-display font-bold text-3xl lg:text-[2.5rem] xl:text-[3rem] text-sumi leading-[1.25] ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            よくある質問
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`paper-card rounded-sm px-6 lg:px-8 overflow-hidden data-[state=open]:border-[oklch(0.50_0.18_25/0.25)] data-[state=open]:shadow-[0_2px_12px_oklch(0.50_0.18_25/0.05)] transition-all duration-200 ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${(index + 1) * 80}ms` }}
              >
                <AccordionTrigger className="text-left font-display font-bold text-base lg:text-lg text-sumi py-5 hover:no-underline hover:text-[oklch(0.50_0.18_25)] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm lg:text-[0.9rem] text-[oklch(0.50_0.03_240)] leading-[1.8] pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
