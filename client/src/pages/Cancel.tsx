import { X } from "lucide-react";

export default function Cancel() {
  return (
    <div className="min-h-screen washi-bg flex items-center justify-center px-6">
      <div className="paper-card rounded-sm p-9 lg:p-12 max-w-lg w-full text-center relative">
        <div className="w-14 h-14 mx-auto mb-7 rounded-full border-2 border-[oklch(0.18_0.02_280/0.25)] flex items-center justify-center">
          <X className="w-7 h-7 text-[oklch(0.50_0.03_240)]" strokeWidth={2.5} />
        </div>
        <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[oklch(0.50_0.03_240)] font-medium mb-4">
          Canceled
        </p>
        <h1 className="font-display font-bold text-2xl lg:text-3xl text-sumi leading-[1.35] mb-5">
          お手続きは完了していません
        </h1>
        <p className="text-sm text-[oklch(0.50_0.03_240)] leading-relaxed mb-9">
          決済はキャンセルされました。請求は発生していませんので、ご安心ください。
          <br />
          ご不明な点があれば、お気軽にお問い合わせください。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/#pricing"
            className="inline-block text-center py-3.5 px-8 rounded-sm font-medium text-sm transition-all duration-200 bg-[oklch(0.50_0.18_25)] text-white hover:bg-[oklch(0.45_0.20_25)] shadow-[0_2px_8px_oklch(0.50_0.18_25/0.3)] hover:shadow-[0_4px_16px_oklch(0.50_0.18_25/0.4)] active:scale-[0.97]"
          >
            料金プランに戻る
          </a>
          <a
            href="/#contact"
            className="inline-block text-center py-3.5 px-8 rounded-sm font-medium text-sm transition-all duration-200 border border-[oklch(0.18_0.02_280/0.2)] text-sumi hover:bg-[oklch(0.18_0.02_280)] hover:text-white hover:border-[oklch(0.18_0.02_280)] active:scale-[0.97]"
          >
            相談してみる
          </a>
        </div>
      </div>
    </div>
  );
}
