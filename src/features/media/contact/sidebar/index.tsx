// import Image from "next/image";
import SideberContactForm from "@/components/elements/form/sideber";

export default function ContactSidebar() {
  return (
    <div className={"c-sideber--ctaArea mgt7 mgb10s"}>
      <h2
        className={"c-sideber--title -contact -en-color03 -b-btm mgb10 mgb10s"}
      >
        資料ダウンロード
      </h2>
      <SideberContactForm customClass="-sideber" />
    </div>
  );
}
