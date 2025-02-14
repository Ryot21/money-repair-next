import LogoSlider from "@/components/Slider/Logo";

export default function LogoArea() {
    return (
        <div id="logoSection" className={"c-contents pdt5 pdt10s mgb5s"}>
            <div className={"c-contents--inner"}>
                <h2 className={"s-L -center -b pdb3 pdb3s"}>多くのお客様にご好評いただいております</h2>
            </div>
            <div className={"swiper swiper-Logo -right mgb1 mgb3s"}>
                <LogoSlider />
            </div>
            <div className={"swiper swiper-Logo -left"}>
                <LogoSlider />
            </div>
        </div>
    )
}