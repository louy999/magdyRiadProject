import CarouselImg from "./components/home/carouselImg";
import ServiecsPage from "./components/home/serviecs";
import AboutCompany from "./components/home/aboutCompany";
import OurPartaner from "./components/home/ourPartaner";
import FooterPage from "./components/home/footer";
export default function Home() {
  return (
    <div>
      <CarouselImg />
      <ServiecsPage />
      <AboutCompany />
      <OurPartaner />
      <FooterPage />
    </div>
  );
}
