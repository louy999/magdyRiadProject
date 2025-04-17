import React from "react";
import Image from "next/image";
import imageCover from "../../image/L.0-4-APP.webp";
import Link from "next/link";
const AboutCompany = () => {
  return (
    <div className="card lg:card-side shadow-md relative p-4 w-9/12 left-2/4 -translate-x-2/4 bg-black/25">
      <div className="card-body ">
        <h2 className="card-title text-4xl relative left-2/4 mb-10 ">
          عن الشركه
        </h2>
        <p className="w-2/4">
          تعتبر الشركة التخصصيه من أحد روافد الهندسة المدنية ، و تركز في المقام
          الأول في عملها على البنية التحتية و المشاريع الراقية التي تخدم الصالح
          العام و الخاص بأعلى كفاءة و جودة ممكنة . تتطلع الشركة التخصصيه
          للمقاولات العامه إلى أن تكون إحدى الشركات الرائدة في مصر في مجال
          المقاولات
        </p>
        <div className="card-actions justify-end">
          <Link href="/">
            <button className="btn btn-primary">Listen</button>
          </Link>
        </div>
      </div>
      <figure>
        <Image
          src={imageCover}
          width={1000}
          hieght={1000}
          alt="Album"
          className="w-96 h-96 rounded-md"
        />
      </figure>
    </div>
  );
};

export default AboutCompany;
