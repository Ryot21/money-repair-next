// import Image from "next/image";
// import SideberContactForm from "@/components/elements/form/Sideber";
import Button from "@/components/elements/button";

export default function ContactSidebar() {
  return (
    <div className={"c-sideber--ctaArea mgt7 mgb10s"}>
      {/* <h2 className={"c-sideber--title -contact -en-color03 -b-btm mgb10 mgb10s"}>
        資料ダウンロード
      </h2> */}
      <p>
        貴社の<span className={"-b"}>福利厚生</span>に新たな価値を加え、
        <br />
        <span className={"-f-gothic01 -b"}>
          従業員のご家族を含めた資産形成と経済力
        </span>
        を<br className={"sp"} />
        トータルサポートいたします。
        <br />
        <span className={"-b"}>『マネリペ』をぜひご利用ください。</span>
      </p>

      <div className={"c-contents--btnArea"}>
        <Button href="/contact/download" customAreaClass="-center" customClass="-btn -maru -blue">資料ダウンロード</Button>
      </div>
    </div>
  );
}
