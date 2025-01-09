
import MainVisual from "@/components/MainVisual";
import LogoSwiper from "@/components/Swiper/Logo";

export default function Home() {
  return (
    <main>
      <MainVisual />
      <div id="logoSection" className={"c-contents pdt5 pdt10s mgb5s"}>
            <div className={"c-contents--inner"}>
                <h2 className={"s-L -center -b pdb3 pdb3s"}>多くのお客様にご好評いただいております</h2>
            </div>
            <div className={"swiper swiper-Logo -right mgb1 mgb3s"}>
              <LogoSwiper />
            </div>
            <div className={"swiper swiper-Logo -left"}>
              <LogoSwiper />
            </div>
      </div>
    </main>
  );
}
