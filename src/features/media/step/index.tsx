"use client";

import { usePathname } from "next/navigation";

type Props = {
  currentStep?: "input" | "confirm" | "thanks";
};

export default function ContactStep({ currentStep }: Props) {
  const pathname = usePathname();

  // ステップのアクティブ状態を管理
  const getStepClass = (
    step: "step-item01" | "step-item02" | "step-item03"
  ) => {
    if (currentStep) {
      if (currentStep === "input" && step === "step-item01") return "-active";
      if (currentStep === "confirm" && step === "step-item02") return "-active";
      if (currentStep === "thanks" && step === "step-item03") return "-active";
    } else {
      if (pathname === "/contact" && step === "step-item01") return "-active";
      if (pathname === "/contact/confirm" && step === "step-item02")
        return "-active";
      if (pathname === "/contact/thanks" && step === "step-item03")
        return "-active";
    }
    return "";
  };

  return (
    <div className="c-contact--step">
      <ul className="step-ttl c-flex -col3 -jc-sb pdb2 pdb2s">
        <li className={`step-item01 flexItem ${getStepClass("step-item01")}`}>
          <p className="s-M -center -b -ls-3">STEP01</p>
        </li>
        <li className={`step-item02 flexItem ${getStepClass("step-item02")}`}>
          <p className="s-M -center -b -ls-3">STEP02</p>
        </li>
        <li className={`step-item03 flexItem ${getStepClass("step-item03")}`}>
          <p className="s-M -center -b -ls-3">STEP03</p>
        </li>
      </ul>
      <ul className="step-des c-flex -col3 -jc-sb pdt2 pdt3s">
        <li className={`step-item01 flexItem ${getStepClass("step-item01")}`}>
          <p className="s-M -center -b -ls-2">情報入力</p>
        </li>
        <li className={`step-item02 flexItem ${getStepClass("step-item02")}`}>
          <p className="s-M -center -b -ls-2">内容確認</p>
        </li>
        <li className={`step-item03 flexItem ${getStepClass("step-item03")}`}>
          <p className="s-M -center -b -ls-2">送信完了</p>
        </li>
      </ul>
    </div>
  );
}
