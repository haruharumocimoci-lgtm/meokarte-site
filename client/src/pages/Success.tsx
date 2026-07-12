import { Check } from "lucide-react";
import { Link } from "wouter";

export default function Success() {
  return (
    <div className="min-h-screen washi-bg flex items-center justify-center px-6">
      <div className="paper-card rounded-sm p-9 lg:p-12 max-w-lg w-full text-center relative">
        <div className="w-14 h-14 mx-auto mb-7 rounded-full bg-[oklch(0.50_0.18_25)] flex items-center justify-center">
          <Check className="w-7 h-7 text-white" strokeWidth={2.5} />
        </div>
        <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[oklch(0.50_0.18_25)] font-medium mb-4">
          Thank You
        </p>
        <h1 className="font-display font-bold text-2xl lg:text-3xl text-sumi leading-[1.35] mb-5">
          ご購入ありがとうございます
        </h1>
        <p className="text-sm text-[oklch(0.50_0.03_240)] leading-relaxed mb-9">
          決済が完了しました。ご登録のメールアドレスに確認メールをお送りしています。
          <br />
          内容を確認のうえ、担当者よりご連絡いたします。
        </p>
        <Link
          href="/"
          className="inline-block text-center py-3.5 px-10 rounded-sm font-medium text-sm transition-all duration-200 bg-[oklch(0.50_0.18_25)] text-white hover:bg-[oklch(0.45_0.20_25)] shadow-[0_2px_8px_oklch(0.50_0.18_25/0.3)] hover:shadow-[0_4px_16px_oklch(0.50_0.18_25/0.4)] active:scale-[0.97]"
        >
          トップへ戻る
        </Link>
      </div>
    </div>
  );
}
