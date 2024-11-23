import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الشيخ الدكتور عثمان الخميس",
};

function Home() {
  return (
    <>
      <Header />
      <main className="text-lg md:text-xl tracking-wide leading-9 px-4 sm:px-10 lg:px-0 max-w-screen-md mx-auto py-10 ">
        <h3 className="text-3xl mb-10 underline underline-offset-4">
          اسمه ونسبه ومولده:
        </h3>
        <p className="">
          عُثْمَانْ بن مُحَمّدْ بن حَمَدْ بن عَبْدِ الله بن صَالِحْ بن مُحَمّدْ
          الخَمِيْسْ النَاصِرِيْ التَمِيْمِيْ وباختصار عُثْمَانْ الخَمِيْسْ فقيه
          ومحدث وأكاديمي يعود نسبه إلى قبيلة النواصر من ذرية المسور بن عمر بن
          عباد بن الحُصين التميمي، عالم دين سُني كويتي.
        </p>
        <p className="mt-5">الميلاد : 26 مايو 1962 </p>
        <p>الجنسية : كويتي </p>

        <hr className="mt-10 opacity-50" />
        <h3 className="text-3xl my-10 underline underline-offset-4">
          مسيرته العلمية والعملية
        </h3>
        <p className="indent-8">
          درس في جامعة الإمام محمد بن سعود الإسلامية بالرياض، حاصل على شهادة
          الماجستير في الحديث النبوي، برسالة عن الأحاديث الواردة في شأن السبطين
          (الحسن والحسين). وحاصل على شهادة الدكتوراة من جامعة الملك سعود بتقدير
          امتياز وكانت رسالته بعنوان المراجعات دراسة نقدية حديثة. عمل إماماً في
          مسجد الحميدة من عام 1993 إلى 2004 تقريباً، وقبل ذلك كان مؤذناً في
          المسجد ذاته من عام 1989 إلى 1993.
        </p>
        <br />
        <p className="indent-8">
          برز عثمان الخميس كأحد أهم المناظرين من أهل السنة والجماعة للمذهب
          الشيعي حيث انتقد علماء الشيعة وناظرهم في كثير من معتقداتهم، وعُرف من
          خلال كتبه وأبحاثه وردوده على الشيعة الإثنى عشرية أيضاً، ظهر الخميس عبر
          العديد من البرامج الفضائية والحوارية التي تُناقش وتبحث مسائل الاختلاف
          بين الفرق الإسلامية.
        </p>
        <br />
        <p className="indent-8">
          اشتهر الخميس لدى عامة أهل السنة والجماعة في أواخر التسعينات عبر قناة
          المستقلة التي تبث من لندن والتي كانت تستضيف العديد من رجال الدين
          الشيعي للتنظير في تداعيات فتنة مقتل عثمان ومسائل ولاية علي وولاية
          المهدي المنتظر، وكان الخميس الممثل الدائم للجانب السني.
        </p>
        <br />
        <p className="indent-8">
          كان للخميس حضور قوي على ساحات المناظرات بين الشيعة الأثنى عشرية والسنة
          في المحطات الفضائية، وهو أحد أقطاب المربع السني المنافح عن أهل السنة
          والجماعة، واعتقادهم في الفتنة التي أطلّت عقب مقتل الصحابي والخليفة
          الراشدي الثالث عثمان بن عفان.
        </p>

        <hr className="mt-10 opacity-50" />
        <h3 className="text-3xl my-10 underline underline-offset-4">مشايخه</h3>

        <ul>
          <li>الشيخ عبد العزيز بن عبد الله بن باز.</li>
          <li>الشيخ محمد بن صالح العثيمين.</li>
          <li>الشيخ ناظم المسباح.</li>
          <li>الشيخ أبي عمر إبراهيم اللاحم.</li>
          <li>الشيخ أبي محمد ناصر حميد.</li>
          <li>الشيخ أبي إبراهيم علي اليحي.</li>
          <li>الشيخ أبي علي عبد الله الجعيثم.</li>
          <li>الشيخ أبي محمد صالح الميان.</li>
          <li>الشيخ أبي عبد الله علي الجمعة.</li>
          <li>الشيخ حمود العقلا.</li>
          <li>الشيخ محمد المرشد.</li>
          <li>الشيخ أبو سامي.</li>
        </ul>

        <hr className="mt-10 opacity-50" />
        <h3 className="text-3xl my-10 underline underline-offset-4">مؤلفاته</h3>

        <ul className=" flex flex-col gap-4">
          <li>كتاب المراجعات، دراسة نقدية حديثية، رسالة دكتوراه.</li>
          <li>
            حقبة من التاريخ (ما بين وفاة النبي صلى الله عليه وسلم إلى مقتل
            الحسين رضي الله عنه).
          </li>
          <li>
            كشف الجاني محمد التيجاني، هذا الكتاب رد على كتاب ثم اهتديت لمحمد
            السماوي التيجاني
          </li>
          <li>من هو المهدي المنتظر</li>
          <li>سياحة في كتاب الكافي</li>
          <li>كتاب الكافي - عرض ونقد</li>
          <li>شبهات وردود</li>
          <li>متى يشرق نورك أيها المنتظر ؟</li>
          <li>كتاب من القلب إلى القلب.</li>
          <li>الأحاديث الواردة في شأن السبطين، رسالة ماجستير</li>
          <li>كتاب كنوز السيرة.</li>
          <li>الدعاء أحكام وآداب.</li>
          <li>أحكام الطهارة والصلاة</li>
          <li>منهج الحق في العقيدة والأخلاق</li>
          <li>
            فبهداهم اقتده (قراءة تأصيلية في سير وقصص الأنبياء عليهم السلام)
          </li>
          <li>القواعد النافعة في أسماء الله وصفاته</li>
          <li>حديث عائشة وقصة فدك</li>
          <li>
            صفة حج النبي صلى الله عليه وسلم (شرح حديث جابر بن عبد الله رضي الله
            عنهما)
          </li>
          <li>
            نيل الإرب من جامع العلوم والحكم لابن رجب: اختصار وانتقاء: عثمان
            الخميس، بالمشاركة.
          </li>
          <li>حقبة من التاريخ</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}

export default Home;
