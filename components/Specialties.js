import {
  Flame,
  Wheat,
  Sandwich,
  UtensilsCrossed,
  Soup,
  CookingPot,
  CircleDot,
} from "lucide-react";

const specialties = [
  {
    icon: Soup,
    title: "المندي والكبسة",
    description: "إعداد المندي والكبسة والدجاج واللحم بالطريقة الشعبية الأصيلة",
  },
  {
    icon: Wheat,
    title: "الأرز المضغوط",
    description: "تحضير الأرز المضغوط بإتقان مع المأكولات الصباحية والمسائية",
  },
  {
    icon: Flame,
    title: "الشاورما",
    description: "تحضير الشاورما بالدجاج واللحم بنكهة مميزة",
  },
  {
    icon: UtensilsCrossed,
    title: "المشاوي",
    description: "شواء الدجاج واللحم على الطريقة الاحترافية",
  },
  {
    icon: Sandwich,
    title: "الوجبات السريعة",
    description: "إعداد البرجر والزنجر والتورتيلا والفاهيتا والكودو والمطبق",
  },
  {
    icon: CookingPot,
    title: "خبز التميس",
    description: "تجهيز العجائن والمكونات وتحضير خبز التميس وتقديمه مع الوجبات",
  },
  {
    icon: CircleDot,
    title: "المطبق",
    description: "إعداد المطبق ضمن قائمة الوجبات السريعة والمأكولات الجاهزة",
  },
];

export default function Specialties() {
  return (
    <section id="التخصصات" className="section-padding bg-linen-200">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-center gap-4 text-center sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-coal-800">
            التخصصات
          </h2>
          <p className="max-w-2xl text-base leading-7 text-ash-600">
            مجموعة من الأطباق والمهارات التي يتقنها في المطبخ، من الأطباق
            الشعبية إلى المشاوي والوجبات السريعة والمخبوزات
          </p>
          <span className="h-1 w-16 rounded-full bg-gradient-to-l from-ember-500 to-saffron-500" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-linen-300 bg-white p-6 text-right shadow-card transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ember-50 text-ember-600 transition-colors duration-300 group-hover:bg-ember-500 group-hover:text-white">
                <Icon size={24} strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-bold text-coal-800">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-ash-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
