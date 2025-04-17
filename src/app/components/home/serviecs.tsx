import React from "react";
import Image from "next/image";
import image15 from "../../image/15.jpg";
const ServiecsPage = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <h1 className="w-full text-5xl text-center">خدماتنا</h1>
      <div className="flex justify-center md:justify-between flex-wrap md:flex-nowrap items-center gap-10 w-full p-4 md:w-2/4 ">
        <Image
          alt=""
          src={image15}
          width={1000}
          hieght={1000}
          className="w-96 h-96 rounded-lg"
        />
        <div className="">
          تعتبر هذه الخدمة أحد أهم الخدمات والبنود التي تقوم الشركة التخصصية
          للمقاولات بتنفيذها حيث أننا نمتلك الدقة والأحتراف في مجال تقديم الحلول
          الجيوتقنية وأعمال التربة والأساسات وذلك بإستخدام التقنيات المختلفة مثل
          الحقن والأساسات العميقة مثل خوازيق الحفر الدوار (Bored Piles)و خوازيق
          البريمة المستمرة(C.F.A Piles)، الشدادات الارضيه (Anchors)، تدبيس
          التربة و الخرسانة المرشوشة، العزل الافقى، نظام الحوائط الساندة، وجميع
          مشاكل التربة . وإنه لمن دواعي الفخر أن لدينا سابقة أعمال في المشروعات
          القومية وغيرها كما أننا نقوم بتطبيق أحدث الطرق العلمية الحديثة في حفظ
          وصيانة المنشأت وذلك من أجل تلبية جميع إحتياجات العملاء ، ونسعي دائما
          لتتميز في تنفيذ تلك الاعمال المتخصصة والصعبة لنكون من أكبر وأهم
          المنافسين للشركات التي تعمل في هذا المجال بأذن الله في المستقبل القريب
          .
        </div>
      </div>
    </div>
  );
};

export default ServiecsPage;
