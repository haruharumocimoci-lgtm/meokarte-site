import { useInView } from "@/hooks/useInView";

export default function Features() {
  const { ref, isInView } = useInView(0.2);

  const features = [
    {
      value: "¥0",
      label: "制作費・初期費用",
    },
    {
      value: "¥5,000",
      suffix: "/月",
      label: "維持費（税込）・変更 月2回まで",
    },
    {
      value: "縛りなし",
      label: "いつでも解約OK・違約金なし",
    },
  ];

  return (
    <section ref={ref} className="relative py-20 lg:py-24 washi-bg">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`paper-card rounded-sm p-8 lg:p-10 hover:shadow-[0_8px_30px_oklch(0.18_0.02_280/0.08)] transition-all duration-300 hover:-translate-y-0.5 text-center relative overflow-hidden ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Hanko stamp accent in corner */}
              <div className="absolute top-3 right-3 w-6 h-6 border border-[oklch(0.50_0.18_25/0.3)] rounded-[2px] flex items-center justify-center opacity-40">
                <div className="w-3 h-3 bg-[oklch(0.50_0.18_25/0.15)] rounded-[1px]" />
              </div>

              <div className="font-display font-bold text-3xl lg:text-4xl text-sumi mb-3 relative z-10">
                {feature.value}
                {feature.suffix && (
                  <span className="text-lg text-[oklch(0.55_0.03_240)] font-normal">{feature.suffix}</span>
                )}
              </div>
              <p className="text-sm text-[oklch(0.55_0.03_240)] font-medium relative z-10">{feature.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
