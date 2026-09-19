import { Flame, ShieldCheck, Timer, Users2 } from "lucide-react";

const traits = [
  {
    icon: Flame,
    title: "العمل تحت الضغط",
    description:
      "قدرة عالية على إنجاز الطلبات في أوقات الذروة دون التأثير على الجودة",
  },
  {
    icon: ShieldCheck,
    title: "تنظيم المطبخ",
    description: "الالتزام بالنظافة وترتيب المطبخ وسلامة الأغذية بشكل دائم",
  },
  {
    icon: Timer,
    title: "سرعة تجهيز الطلبات",
    description: "إنجاز الطلبات بسرعة ودقة مع الحفاظ على مذاق وجودة الطعام",
  },
  {
    icon: Users2,
    title: "العمل ضمن فريق",
    description:
      "التكيف مع مختلف بيئات العمل والتعاون الجيد مع الزملاء وفريق المطبخ",
  },
];

export default function Experience() {
  return (
    <section id="الخبرات" className="section-padding bg-royal-50">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-center gap-4 text-center sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900">
            الخبرة العملية
          </h2>
          <p className="max-w-2xl text-base leading-7 text-ink-700/80">
            خبرة عملية تزيد عن عشر سنوات في مجال المطاعم والمطابخ، اكتسب
            خلالها مهارات عملية راسخة في إدارة سير العمل داخل المطبخ
          </p>
          <span className="h-1 w-16 rounded-full bg-gradient-to-l from-royal-600 to-crimson-500" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {traits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-royal-100 bg-white p-6 text-right shadow-card"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-royal-600 text-white">
                <Icon size={22} strokeWidth={1.8} />
              </div>
              <h3 className="text-base font-bold text-ink-900">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-ink-700/80">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
