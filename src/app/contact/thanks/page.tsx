import ContactStep from "@/components/ContactStep";

export default function Page() {
  return (
    <>
        {/* STEP */}
        <div className="c-contents pdt5 pdt5s pdb5 pdb5s">
          <ContactStep />
        </div>
        <div className="c-contents pdt5 pdt10s pdb5 pdb10s">
          <div className="c-contents--inner">
              <p className="s-ML -center -ls-1 -lh-2">
              ご回答後はできる限り早急に
              <br />
              <span className="s-ML -b -ls-1 -lh-2">
                  『<span className="s-ML -b -red">03-6264-7047</span>』
              </span>
              よりご連絡いたします。
              <br />
              <br />
              また、弊社営業時間外の場合、
              <br />
              <span className="s-ML -b -ls-1 -lh-2">担当者の携帯番号</span>から
              <br className="sp" />
              お電話する場合がございます。
              <br />
              <br />
              お忙しい中、
              <br />
              お時間を割いてご回答いただきましたこと、
              <br />
              心より感謝申し上げます。
              </p>
          </div>
        </div>
    </>
  );
}
