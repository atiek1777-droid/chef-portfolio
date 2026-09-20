import Image from "next/image";
import { Flame, ShieldCheck, Timer, Users2 } from "lucide-react";

const traits = [
  {
    icon: Flame,
    title: "العمل تحت الضغط",
    description:
      "قدرة عالية على إنجاز الطلبات في أوقات الذروة دون التأثير على الجودة",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
  },
  {
    icon: ShieldCheck,
    title: "تنظيم المطبخ",
    description: "الالتزام بالنظافة وترتيب المطبخ وسلامة الأغذية بشكل دائم",
    image: "https://images.unsplash.com/photo-1581099160562-40eb08ab9c19?w=400&h=300&fit=crop",
  },
  {
    icon: Timer,
    title: "سرعة تجهيز الطلبات",
    description: "إنجاز الطلبات بسرعة ودقة مع الحفاظ على مذاق وجودة الطعام",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop",
  },
  {
    icon: Users2,
    title: "العمل ضمن فريق",
    description:
      "التكيف مع مختلف بيئات العمل والتعاون الجيد مع الزملاء وفريق المطبخ",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
];

export default function Experience() {
  return (
    <section id="الخبرات" className="section-padding bg-amber-50">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-center gap-4 text-center sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-800">
            الخبرة العملية
          </h2>
          <p className="max-w-2xl text-base leading-7 text-warmgray-600">
            خبرة عملية تزيد عن عشر سنوات في مجال المطاعم والمطابخ، اكتسب
            خلالها مهارات عملية راسخة في إدارة سير العمل داخل المطبخ
          </p>
          <span className="h-1 w-16 rounded-full bg-gradient-to-l from-amber-500 to-yellow-500" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {traits.map(({ icon: Icon, title, description, image }) => (
            <div
              key={title}
              className="rounded-2xl border border-amber-100 bg-white overflow-hidden shadow-card hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-40 w-full overflow-hidden bg-cream">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-5 text-right">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500 text-white">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold text-brown-800">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-warmgray-600">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
