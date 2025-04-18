import React from "react";
import Image from "next/image";
import titls from "../image/title_image.jpg";
import machine1 from "../image/20.jpeg";
import machine2 from "../image/21.jpeg";
import machine3 from "../image/20.jpeg";

const WeAre = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[55vh]">
        <Image
          src={titls}
          alt="cover"
          className="fixed top-0 left-0 w-screen h-[50vh] object-cover -z-10"
        />
        <div className="z-20 w-screen h-[50vh] text-white text-3xl md:text-5xl  font-bold flex justify-center items-center bg-black/40">
          شركة ماجتيك
        </div>
      </div>
      <div className="bg-white">
        {/* About Us Section */}
        <div className="px-6 md:px-20 py-10 text-right">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">من نحن؟</h2>
          <p className="text-lg text-gray-700 leading-loose">
            تأسست شركة ماجتيك في عام 2010، وهي متخصصة في مجال المقاولات العامة
            والتوريدات الصناعية. نعمل على تنفيذ مشاريع كبرى بمستوى احترافي،
            ولدينا فريق عمل ذو خبرة طويلة في السوق المصري. تعتمد شركتنا على أحدث
            المعدات والتقنيات لتنفيذ الأعمال بكفاءة وجودة عالية.
          </p>
        </div>

        {/* Clients Section */}
        {/* <div className="px-6 md:px-20 pb-10 text-right">
          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-4">عملاؤنا</h2>
          <p className="text-lg text-gray-700 leading-loose">
            نفتخر بأننا قدمنا خدماتنا لمجموعة من أكبر الشركات والمؤسسات في مصر،
            من بينها شركات مقاولات كبرى، مصانع، وجهات حكومية، وشركات تطوير عقاري
            مرموقة.
          </p>
        </div> */}

        {/* Machines Gallery */}
        <div className="px-6 md:px-20 pb-10">
          <h2 className="text-3xl font-bold text-[#0B1F3A] text-right mb-6">
            معداتنا وتقنياتنا
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Image
              src={machine1}
              alt="machine 1"
              className="rounded-md shadow-lg hover:scale-105 transition duration-300"
            />
            <Image
              src={machine2}
              alt="machine 2"
              className="rounded-md shadow-lg hover:scale-105 transition duration-300"
            />
            <Image
              src={machine3}
              alt="machine 3"
              className="rounded-md shadow-lg hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAre;
