import Footer from "@/components/Footer";
import Header from "@/components/Header";

function Home() {
  return (
    <>
      <Header />
      <main className="text-lg md:text-xl tracking-wide leading-9 px-4 sm:px-10 lg:px-0 max-w-screen-md mx-auto py-10 ">
        <p>
          رحلة طلب العلم الشرعي
          <span className="text-yellow-400 font-bold">
            &quot;مفاتح الطلب&quot;
          </span>{" "}
          مع الشيخ الدكتور عثمان الخميس هي بوابة نور للتعرف على أصول علوم
          الشريعة وأساسياتها. تهدف هذه الرحلة إلى تبسيط طريق العلم للمبتدئين وكل
          راغب في التعمق، بأسلوب ميسر يُرشد القلوب ويثبّت العلم، ليرتقي الطالب
          بثقة على طريق المعرفة.
        </p>

        <hr className="my-10 opacity-50" />

        <p className="underline underline-offset-4">
          <strong>
            الغاية الكبرى هي أن يفهم المسلم دينه حق الفهم، ويعمل به بإخلاص،
            ليكون من الفائزين والمفلحين في الدنيا والآخرة بإذن الله.
          </strong>
        </p>

        <hr className="my-10 opacity-50" />

        <p className="mb-6">
          يتضمن البرنامج دراسة 17 متناً من المتون الأساسية التي تُعتبر ركائز في
          كل فن من الفنون الشرعية:
        </p>

        <ul className="font-bold">
          <li>ستة متون في العقيدة،</li>
          <li>متنان في الحديث ومصطلحه،</li>
          <li>متنان في التفسير وأصوله،</li>
          <li>ثلاثة متون في الفقه وأصوله وقواعده،</li>
          <li>متن في النحو،</li>
          <li>متن في التجويد،</li>
          <li>ومتنان في العلم وفضله وآدابه.</li>
        </ul>

        <hr className="my-10 opacity-50" />

        <p>
          كل متن من هذه المتون يُعد حجر أساس لا غنى عنه لطالب العلم، وقد تم
          شرحها بأسلوب ميسر وموجز يُعين الطلبة على فهمها بوضوح، ويفتح أمامهم
          آفاق التعمق في علوم الشريعة. هذه الرحلة ليست مجرد تعلم؛ بل هي تأسيس
          لمسار علمي يبني عقولاً وقلوباً على نور الهداية.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default Home;