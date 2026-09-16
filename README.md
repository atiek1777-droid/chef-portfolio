# موقع حبيب هلال محسن — شيف عام ومعلم مطبخ

موقع شخصي احترافي متجاوب (Next.js + Tailwind CSS)، باللغة العربية واتجاه RTL بالكامل.

## المحتويات
- `app/` — صفحات ومكونات Next.js (App Router)
- `components/` — كل قسم من أقسام الصفحة كمكوّن منفصل (Hero, About, Specialties, Skills, Experience, Goal, Contact, Footer)
- `public/images/profile-chef.jpg` — الصورة الشخصية المستخدمة في الموقع (في الهيدر الرئيسي وكملصقات شفافة خفيفة في الخلفية)

## التشغيل محليًا

يتطلب المشروع Node.js (يفضل الإصدار 18 أو أحدث).

```bash
npm install
npm run dev
```

ثم افتح المتصفح على: http://localhost:3000

## بناء نسخة الإنتاج

```bash
npm run build
npm start
```

## استبدال الصورة الشخصية
الصورة موجودة في: `public/images/profile-chef.jpg`
لاستبدالها، ضع صورة جديدة بنفس الاسم في نفس المسار (يفضل صورة عمودية بنسبة تقارب 3:4 لأفضل ظهور).

## رفع المشروع إلى GitHub

```bash
git init
git add .
git commit -m "الموقع الشخصي لحبيب هلال محسن"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```
(استبدل `USERNAME/REPO-NAME` باسم حسابك واسم المستودع الذي تنشئه على GitHub)

## النشر على Vercel

**الطريقة الأسهل (بدون سطر أوامر):**
1. ادخل إلى https://vercel.com وسجّل الدخول (يمكن الدخول مباشرة بحساب GitHub).
2. اضغط "Add New Project".
3. اختر المستودع الذي رفعته على GitHub.
4. اترك الإعدادات الافتراضية (Vercel يتعرف على Next.js تلقائيًا) واضغط "Deploy".
5. بعد دقيقة تقريبًا سيكون الموقع متاحًا على رابط من نوع: `your-project.vercel.app`

**أو عبر سطر الأوامر:**
```bash
npm install -g vercel
vercel
```
واتبع التعليمات التي تظهر.

## ملاحظة
جميع بيانات السيرة الذاتية في الموقع مأخوذة حرفيًا من البيانات المرسلة، دون إضافة أي معلومات أو شهادات أو أسماء مطاعم غير مذكورة.
