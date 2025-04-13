import ContactStep from "@/features/media/step";
import Button from "@/components/elements/button";

export default function Page() {
  return (
    <>
        {/* STEP */}
        <div className="c-contents pdt5 pdt5s pdb5 pdb5s">
          <ContactStep />
        </div>
        <div className="c-contents pdt5 pdt10s pdb5 pdb10s">
          <div className="c-contents--inner">
            <p className="s-ML -center -ls-1 -lh-2 mgb5 mgb5s">
              このたびは
              <br />
              資料ダウンロードのお申し込みをいただき、
              <br />
              誠にありがとうございます。
              <br />
              <br />
              3営業日を目安にマネリぺの担当者より
              <br />
              マネリぺに関する資料をお送りいたします。
            </p>
            {/* ボタン */}
            <div className={"c-contents--btnArea"}>
              <Button href="/lp" customAreaClass="-center" customClass="-btn -maru -blue">トップへ戻る</Button>
            </div>
          </div>
        </div>
    </>
  );
}
