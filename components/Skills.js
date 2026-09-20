import {
  Timer,
  Sparkles,
  ScanSearch,
  ShieldCheck,
  BatteryFull,
  Users,
  Handshake,
  Wrench,
} from "lucide-react";

const skills = [
  {
    icon: Timer,
    text: "القدرة على تجهيز الطلبات بسرعة ودقة",
  },
  {
    icon: Sparkles,
    text: "الحرص على جودة ومذاق الطعام",
  },
  {
    icon: ScanSearch,
    text: "معرفة جيدة بتجهيز المكونات وتقطيعها وتحضيرها",
  },
  {
    icon: ShieldCheck,
    text: "الالتزام بالنظافة وسلامة الأغذية والمحافظة على ترتيب المطبخ",
  },
  {
    icon: BatteryFull,
    text: "تحمل ضغط العمل والعمل لساعات طويلة",
  },
  {
    icon: Users,
    text: "القدرة على العمل بشكل مستقل وضمن فريق",
  },
  {
    icon: Handshake,
    text: "حسن التعامل مع الزملاء والعملاء",
  },
  {
    icon: Wrench,
    text: "المحافظة على الأدوات والمعدات المستخدمة في المطبخ",
  },
];

export default function Skills() {
  return (
    <section id="المهارات" className="section-padding bg-cream-100">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-center gap-4 text-center sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-800">
            المهارات المهنية
          </h2>
          <p className="max-w-2xl text-base leading-7 text-warmgray-600">
            خبرة واسعة في العمل داخل المطابخ والمطاعم، وسرعة في التعلم والتكيف مع
            أي مهارة أو وصفة جديدة
          </p>
          <span className="h-1 w-16 rounded-full bg-gradient-to-l from-amber-500 to-yellow-500" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skills.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-start gap-4 rounded-2xl border border-warmgray-200 bg-white p-5 shadow-card"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                <Icon size={20} strokeWidth={1.8} />
              </span>
              <p className="pt-1 text-base leading-7 text-warmgray-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
