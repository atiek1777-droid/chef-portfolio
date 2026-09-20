import Image from "next/image";
import {
  Flame,
  Wheat,
  Sandwich,
  UtensilsCrossed,
  Soup,
  CookingPot,
  CircleDot,
} from "lucide-react";
import PhotoWatermark from "./PhotoWatermark";

const specialties = [
  {
    icon: Soup,
    title: "المندي والكبسة",
    description: "إعداد المندي والكبسة والدجاج واللحم بالطريقة الشعبية الأصيلة",
    image: "/images/food/kabsa.jpg",
    alt: "مندي ولحم شهي",
  },
  {
    icon: Wheat,
    title: "الأرز المضغوط",
    description: "تحضير الأرز المضغوط بإتقان مع المأكولات الصباحية والمسائية",
    image: "/images/food/rice.jpg",
    alt: "أرز مضغوط",
  },
  {
    icon: Flame,
    title: "الشاورما",
    description: "تحضير الشاورما بالدجاج واللحم بنكهة مميزة",
    image: "/images/food/shawarma.jpg",
    alt: "شاورما لذيذة",
  },
  {
    icon: UtensilsCrossed,
    title: "المشاوي",
    description: "شواء الدجاج واللحم على الطريقة الاحترافية",
    image: "/images/food/grill.jpg",
    alt: "لحم مشوي على النار",
  },
  {
    icon: Sandwich,
    title: "الوجبات السريعة",
    description: "إعداد البرجر والزنجر والتورتيلا والفاهيتا والكودو والمطبق",
    image: "/images/food/burger.jpg",
    alt: "برجر لذيذ",
  },
  {
    icon: CookingPot,
    title: "خبز التميس",
    description: "تجهيز العجائن والمكونات وتحضير خبز التميس وتقديمه مع الوجبات",
    image: "/images/food/fastfood.jpg",
    alt: "خبز طازج",
  },
  {
    icon: CircleDot,
    title: "المطبق",
    description: "إعداد المطبق ضمن قائمة الوجبات السريعة والمأكولات الجاهزة",
    image: "/images/food/bread.jpg",
    alt: "مطبق شهي",
  },
];

export default function Specialties() {
  return (
    <section id="التخصصات" className="relative overflow-hidden section-padding bg-cream-200">
      <PhotoWatermark
        position="right-[4%] bottom-4 hidden lg:block"
        size={160}
        opacity="opacity-[0.07]"
        rotate="rotate-3"
      />
      <div className="container-page relative">
        <div className="mb-12 flex flex-col items-center gap-4 text-center sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-800">
            التخصصات
          </h2>
          <p className="max-w-2xl text-base leading-7 text-warmgray-600">
            مجموعة من الأطباق والمهارات التي يتقنها في المطبخ، من الأطباق
            الشعبية إلى المشاوي والوجبات السريعة والمخبوزات
          </p>
          <span className="h-1 w-16 rounded-full bg-gradient-to-l from-amber-500 to-yellow-500" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map(({ icon: Icon, title, description, image, alt }) => (
            <div
              key={title}
              className="group rounded-2xl border border-warmgray-200 bg-white overflow-hidden shadow-card transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden bg-cream">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 text-right">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-brown-800">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-warmgray-600">
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
