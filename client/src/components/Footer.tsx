import brandLogo from "@/assets/brand-logo_295a132b.png";
import { Link } from "wouter";
export default function Footer() {
  const businessInfo = [
    { label: "サービス名", value: "HPミセガオ" },
    { label: "代表者", value: "持丸 春聡" },
    { label: "電話", value: "【準備中】" },
    { label: "メール", value: "info@misegao.com" },
    { label: "対応エリア", value: "神奈川県全域（オンライン対応で全国可）" },
    {
      label: "事業内容",
      value:
        "飲食店向けホームページの制作・運用、通販ページの制作、Googleマップ集客（MEO）の診断・改善支援、口コミデータ分析",
    },
  ];

  return (
    <footer className="bg-[oklch(0.12_0.015_280)] py-16 lg:py-20 relative">
      <div className="container">
        {/* Business info */}
        <div className="max-w-2xl mb-14">
          <h3 className="text-[0.65rem] tracking-[0.25em] uppercase text-[oklch(0.50_0.18_25)] font-medium mb-8">
            Business Information
          </h3>
          <div className="space-y-0">
            {businessInfo.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-start py-3.5 border-b border-[oklch(0.20_0.015_280)]"
              >
                <span className="text-[0.7rem] tracking-wider uppercase text-[oklch(0.40_0.02_240)] font-medium sm:w-28 shrink-0 mb-1 sm:mb-0 sm:pt-0.5">
                  {item.label}
                </span>
                <span className="text-sm text-[oklch(0.70_0.01_80)] leading-relaxed">
                  {item.label === "メール" ? (
                    <a
                      href={`mailto:${item.value}`}
                      className="hover:text-[oklch(0.60_0.16_25)] transition-colors duration-200 underline underline-offset-2 decoration-[oklch(0.30_0.02_280)]"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-10 border-t border-[oklch(0.20_0.015_280)]">
          <div className="flex items-center gap-2.5">
            <img
              src={brandLogo}
              alt="HPミセガオ"
              className="w-7 h-7"
            />
            <span className="font-display font-bold text-white text-base">
              HPミセガオ
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <Link
              href="/tokushoho"
              className="text-xs text-[oklch(0.45_0.02_240)] hover:text-[oklch(0.60_0.16_25)] transition-colors duration-200 underline underline-offset-2 decoration-[oklch(0.30_0.02_280)]"
            >
              特定商取引法に基づく表記
            </Link>
            <p className="text-xs text-[oklch(0.35_0.02_240)]">
              &copy; 2025 HPミセガオ. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
